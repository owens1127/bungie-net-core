import {
    DefInfo,
    isReferenceObject,
    isRequestBodyObject,
    lastPart,
    resolveSchemaType
} from './util.js';
import { OpenAPIObject, ParameterObject, PathItemObject } from 'openapi3-ts';
import { docComment, generateHeader, indent, writeOutFile } from './generate-common.js';
import _ from 'underscore';
import { seeDefHyperLink } from './type-index.js';

export function generateServiceDefinition(
    tag: string,
    paths: [string, PathItemObject][],
    doc: OpenAPIObject,
    componentByDef: { [def: string]: DefInfo }
): void {
    const exports: string[] = [];
    paths.forEach(([path, pathDef]) => {
        // @ts-ignore
        const file = _.last(pathDef.summary.split('.'));
        exports.push(file!);
        const filename = `lib-ts/endpoints/${tag}/${file}.ts`;
        const pathDefinition = generatePathDefinition(path, pathDef, doc, componentByDef);
        const definition = [generateHeader(doc), pathDefinition].join('\n\n') + '\n';

        writeOutFile(filename, definition);
    });
    writeOutFile(`lib-ts/endpoints/${tag}/index.ts`,
        exports.map((endpt) => {
            return `export { ${endpt[0].toLowerCase() + endpt.substring(1)} } from './${endpt}.js';`
        }).join('\n'));
}

function generatePathDefinition(
    path: string,
    pathDef: PathItemObject,
    doc: OpenAPIObject,
    componentByDef: { [def: string]: DefInfo }
): string {
    const hyperRef = seeDefHyperLink('#' + pathDef.summary);
    const importFiles = new Map<string, string>();
    //console.log(pathDef)

    let server = doc.servers![0].url;
    // per https://github.com/Bungie-net/api/issues/853
    // strict condition, so no surprises if doc.servers changes
    if (
        server === 'https://www.bungie.net/Platform' &&
        path.includes('/Stats/PostGameCarnageReport/')
    ) {
        server = 'https://stats.bungie.net/Platform';
    }
    const interfaceName = lastPart(pathDef.summary!);

    const method = pathDef.get ? 'GET' : 'POST';
    const methodDef = pathDef.get || pathDef.post!;
    const params = (methodDef.parameters || []) as ParameterObject[];

    params.forEach((param) => {
        // see https://github.com/Bungie-net/api/pull/1718/commits/2d4225f5a93a814daba9f9443986da77bdd0e7bf
        if (param.name === 'currentpage') param.in = 'query'
    });
    // console.log(params)
    const queryParameterNames = params
        .filter((param) => param.in === 'query')
        .map((param) => param.name);

    const parameterArgs = ['this: InstancedImport | AccessTokenObject | void'];
    let paramsTypeDefinition = '';
    if (params.length) {
        paramsTypeDefinition =
            generateParamsType(interfaceName + 'Params', params, componentByDef, doc, hyperRef,
                importFiles) +
            '\n\n';
        parameterArgs.push(`params: ${interfaceName}Params`);
    }

    if (methodDef.requestBody) {
        if (isRequestBodyObject(methodDef.requestBody)) {
            const schema = methodDef.requestBody.content['application/json'].schema!;

            const paramType = resolveSchemaType(schema, doc, importFiles);
            const docString = methodDef.requestBody.description
                ? docComment(methodDef.requestBody.description) + '\n'
                : '';
            parameterArgs.push(
                `${docString}body${methodDef.requestBody.required ? '' : '?'}: ${paramType}`
            );
        } else if (isReferenceObject(methodDef.requestBody)) {
            throw new Error('didn\'t expect this');
        }
    }

    // tslint:disable-next-line:no-invalid-template-strings
    const templatizedPath = path.includes('{')
        ? `\`${server}${path.replace(/{/g, '${params.')}\``
        : `'${server}${path}'`;

    let paramsObject = '';
    if (queryParameterNames.length) {
        const paramInitializers = queryParameterNames.map((p) => {
            const param = params.find((pa) => pa.name === p)!;
            const paramType = resolveSchemaType(param.schema!, doc, importFiles);

            if (paramType.endsWith('[]')) {
                if (!param.required) {
                    return `${p}: params.${p} ? params.${p}.join(',') : undefined`;
                }
                return `${p}: params.${p}.join(',')`;
            }

            return `${p}: params.${p}`;
        });

        paramsObject = `,
    params: {
${indent(paramInitializers.join(',\n'), 3)}
    }`;
    }

    let requestBodyParam = '';
    if (methodDef.requestBody && isRequestBodyObject(methodDef.requestBody)) {
        requestBodyParam = `,
    body`;
    }

    const rateLimitedFunction = 'rateLimitedRequest'
    const staticImports = [`import { ${rateLimitedFunction} } from '../../util/rate-limiter.js';`,
        `import { BungieNetResponse } from '../../util/server-response.js';`,
        `import { InstancedImport, AccessTokenObject } from '../../util/client.js';`,
        `import { BungieAPIError } from '../../errors/BungieAPIError.js';`]
    const responseType = resolveSchemaType(methodDef.responses['200'], doc, importFiles);

    const headerImports: string[] = [];
    for (const [key] of Array.from(importFiles.entries())) {
        headerImports.push(`import { ${key} } from '../../schemas/index.js'`)
    }
    const rateDoc =
        methodDef['x-documentation-attributes']?.ThrottleSecondsBetweenActionPerUser &&
        `Wait at least ${methodDef['x-documentation-attributes']?.ThrottleSecondsBetweenActionPerUser}s between actions.`;

    return `${staticImports.join('\n')}\n${headerImports.join(
        '\n')}\n${paramsTypeDefinition}${docComment(
        methodDef.description! + (rateDoc ? '\n' + rateDoc : ''), [hyperRef]
    )}
export async function ${interfaceName[0].toLocaleLowerCase() + interfaceName.substring(1)}(${parameterArgs.join(
        ', ')}): Promise<BungieNetResponse<${responseType}>> {` +
`  const token = (this as InstancedImport)?.client?.access_token as string ?? (this as AccessTokenObject)?.access_token ?? null
  try {
    const res = await ${rateLimitedFunction}<${responseType}>(token, {
      method: '${method}',
      url: ${templatizedPath}${indent(paramsObject,1)}${indent(requestBodyParam,1)}
    });
    return res;
  } catch (err) {
    if (err instanceof BungieAPIError) err.stack = new Error().stack
    throw err
  }
}`;
}

function generateParamsType(
    typeName: string,
    params: ParameterObject[],
    componentByDef: { [def: string]: DefInfo },
    doc: OpenAPIObject,
    reference: string,
    importFiles: Map<string, string>
) {
    const parameterArgs = params.map((param) => {
        const paramType = resolveSchemaType(param.schema!, doc, importFiles);
        const docString = param.description ? docComment(param.description) + '\n' : '';
        return `${docString}${param.name}${
            param.required || (param.name === 'components' && paramType
                === 'DestinyComponentType[]')
                ? ''
                : '?'
        }: ${paramType};`;
    });

    return `${docComment('', [reference])}\nexport type ${typeName} = {
${indent(parameterArgs.join('\n'), 1)}
}`;
}
