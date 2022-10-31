import {
    DefInfo,
    isReferenceObject,
    isRequestBodyObject,
    lastPart,
    lcFirst,
    resolveSchemaType,
} from './util.js';
import {OpenAPIObject, ParameterObject, PathItemObject,} from 'openapi3-ts';
import {
    docComment,
    generateHeader,
    indent,
    writeOutFile,
} from './generate-common.js';
import _ from "underscore";
import {seeDefHyperLink} from "./type-index.js";

export function generateServiceDefinition(
    tag: string,
    paths: [string, PathItemObject][],
    doc: OpenAPIObject,
    componentByDef: { [def: string]: DefInfo }
): void {
    const exports: string[] = [];
    paths.forEach(([path, pathDef]) => {
        // @ts-ignore
        const file = (_.last(pathDef.summary.split('.')));
        exports.push(file!);
        const filename = `lib/endpoints/${tag}/${file}.js`;
        const pathDefinition = generatePathDefinition(path, pathDef, doc, componentByDef);
        const definition = [generateHeader(doc), pathDefinition].join('\n\n') + '\n';

        writeOutFile(filename, definition);
    });
    writeOutFile(`lib/endpoints/${tag}/index.js`,
        exports.map((endpt) => {
            return `exports.${endpt} = require('./${endpt}.js');`
        }).join('\n'));
}

function generatePathDefinition(
    path: string,
    pathDef: PathItemObject,
    doc: OpenAPIObject,
    componentByDef: { [def: string]: DefInfo }
): string {
    let server = doc.servers![0].url;
    // per https://github.com/Bungie-net/api/issues/853
    // strict condition, so no surprises if doc.servers changes
    if (
        server === 'https://www.bungie.net/Platform' &&
        path.includes('/Stats/PostGameCarnageReport/')
    )
        server = 'https://stats.bungie.net/Platform';
    const typeName = lastPart(pathDef.summary!);
    const functionName = lcFirst(typeName);

    const method = pathDef.get ? 'GET' : 'POST';
    const methodDef = pathDef.get || pathDef.post!;
    const params = (methodDef.parameters || []) as ParameterObject[];
    const hyperRef = seeDefHyperLink('#' + pathDef.summary);

    const queryParameterNames = params
        .filter((param) => param.in === 'query')
        .map((param) => param.name);

    const parameterArgs = [];
    let typeDefinition = '';
    if (params.length) {
        typeDefinition =
            generateParamsTypedef(typeName + 'Params', params, componentByDef, doc, hyperRef) +
            '\n\n';
        parameterArgs.push(`params: ${typeName}Params`);
    }

    if (methodDef.requestBody) {
        if (isRequestBodyObject(methodDef.requestBody)) {
            const schema = methodDef.requestBody.content['application/json'].schema!;

            const paramType = resolveSchemaType(schema, doc);
            // addImport(doc, schema, componentByDef, importFiles);
            const docString = methodDef.requestBody.description
                ? docComment(methodDef.requestBody.description) + '\n'
                : '';
            parameterArgs.push(
                `${docString}body${methodDef.requestBody.required ? '' : '?'}: ${paramType}`
            );
        } else if (isReferenceObject(methodDef.requestBody)) {
            throw new Error("didn't expect this");
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
            const paramType = resolveSchemaType(param.schema!, doc);

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

    const returnValue = resolveSchemaType(methodDef.responses['200'], doc);

    const rateLimitedFunction = 'rateLimitedRequest'
    const imports = `const { ${rateLimitedFunction} } = require('../../rate-limiter.js');`
    const withParams = params.length > 0;

    return `${imports}\n${typeDefinition}${docComment(methodDef.description!, 
        [`${withParams?`@param {${typeName}Params} params`:''}`, 
            `@returns ${returnValue}`, 
            `@this import(../../index).Client`,
            hyperRef])}
module.exports = async function ${functionName}(${withParams?'params':''}) {
  return ${rateLimitedFunction}(this.access_token, {
    method: '${method}',
    url: ${templatizedPath}${paramsObject}${requestBodyParam}
  });
}`;
}

function generateParamsTypedef(
    typeName: string,
    params: ParameterObject[],
    componentByDef: { [def: string]: DefInfo },
    doc: OpenAPIObject,
    reference: string,
) {
    const parameterArgs = _.compact(params.map((param) => {
        const paramType = resolveSchemaType(param.schema!, doc);
        if (paramType) {
            const required =
                param.required || (param.name === 'components' && paramType === 'DestinyComponentType[]')
                    ? ''
                    : '?'

            return `@property {${paramType}${required}} ${param.name} ${param.description}`
        } else {
            return '';
        }

    }));
    return docComment('', [`@typedef ${typeName}`, ...parameterArgs, reference]);
}
