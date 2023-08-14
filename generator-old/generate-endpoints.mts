import {
  DefInfo,
  getRef,
  isReferenceObject,
  isRequestBodyObject,
  lastPart,
  resolveSchemaType,
  seeDefHyperLink
} from './util.mjs';
import { OpenAPIObject, ParameterObject, PathItemObject } from 'openapi3-ts';
import {
  docComment,
  generateHeader,
  indent,
  writeOutFile
} from './generate-common.mjs';
import _ from 'underscore';
import { generateTestStub } from './generate-tests.mjs';

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
    const filename = `src/endpoints/${tag}/${file}.ts`;
    const pathDefinition = generatePathDefinition(
      path,
      pathDef,
      doc,
      tag,
      componentByDef
    );
    const definition =
      [generateHeader(doc), pathDefinition].join('\n\n') + '\n';

    writeOutFile(filename, definition);
  });
  writeOutFile(
    `src/endpoints/${tag}/index.ts`,
    exports
      .map(endpt => {
        return `export { ${
          endpt[0].toLowerCase() + endpt.substring(1)
        } } from './${endpt}';`;
      })
      .join('\n')
  );
}

function generatePathDefinition(
  path: string,
  pathDef: PathItemObject,
  doc: OpenAPIObject,
  tag: string,
  componentByDef: { [def: string]: DefInfo }
): string {
  const hyperRef = seeDefHyperLink('#' + pathDef.summary);
  const importFiles = new Map<string, string>();

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

  params.forEach(param => {
    // see https://github.com/Bungie-net/api/pull/1718/commits/2d4225f5a93a814daba9f9443986da77bdd0e7bf
    if (param.name === 'currentpage') param.in = 'query';
  });
  const queryParameterNames = params
    .filter(param => param.in === 'query')
    .map(param => param.name);

  const argumentsList: string[] = [];
  const parameterArgs: string[] = [];
  let componentResponse = { value: false };
  let paramsTypeDefinition = '';
  if (params.length) {
    paramsTypeDefinition =
      generateParamsType(
        interfaceName + 'Params',
        params,
        doc,
        hyperRef,
        importFiles,
        componentResponse,
        componentByDef
      ) + '\n\n';
    argumentsList.push('params');
    parameterArgs.push(
      `params: ${interfaceName}Params${
        componentResponse.value ||
        interfaceName === 'GetDestinyEntityDefinition'
          ? '<T>'
          : ''
      }`
    );
  }

  if (methodDef.requestBody) {
    if (isRequestBodyObject(methodDef.requestBody)) {
      const schema = methodDef.requestBody.content['application/json'].schema!;

      const paramType = resolveSchemaType(
        schema,
        doc,
        importFiles,
        componentByDef,
        null
      );
      const docString = methodDef.requestBody.description
        ? docComment(methodDef.requestBody.description) + '\n'
        : '';
      argumentsList.push('body');
      parameterArgs.push(
        `${docString}body${
          methodDef.requestBody.required ? '' : '?'
        }: ${paramType}`
      );
    } else if (isReferenceObject(methodDef.requestBody)) {
      throw new Error("didn't expect this");
    }
  }

  parameterArgs.push('client: BungieClientProtocol');

  // tslint:disable-next-line:no-invalid-template-strings
  const templatizedPath = path.includes('{')
    ? `\`${server}${path.replace(/{/g, '${params.')}\``
    : `'${server}${path}'`;

  let paramsObject = '';
  if (queryParameterNames.length) {
    const paramInitializers = queryParameterNames.map(p => {
      const param = params.find(pa => pa.name === p)!;
      const paramType = resolveSchemaType(
        param.schema!,
        doc,
        importFiles,
        componentByDef,
        null
      );

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

  const staticImports = [
    `import { BungieClientProtocol } from '../../client';`,
    `import { BungieNetResponse } from '../../interfaces/BungieNetResponse';`
  ];
  const responseType = resolveSchemaType(
    methodDef.responses['200'],
    doc,
    importFiles,
    componentByDef,
    null
  );

  const headerImports: string[] = [];
  for (const [component, refOrFile] of Array.from(importFiles.entries())) {
    if (refOrFile.startsWith('#')) {
      headerImports.push(
        `import { ${component} } from '../../${
          getRef(doc, refOrFile)?.['x-enum-values'] ? 'enums' : 'models'
        }'`
      );
    } else {
      headerImports.push(`import { ${component} } from '${refOrFile}'`);
    }
  }
  const rateDoc =
    methodDef['x-documentation-attributes']
      ?.ThrottleSecondsBetweenActionPerUser &&
    `Wait at least ${methodDef['x-documentation-attributes']?.ThrottleSecondsBetweenActionPerUser}s between actions.`;

  let snakeInterface =
    interfaceName[0].toLocaleLowerCase() + interfaceName.substring(1);

  generateTestStub(tag, snakeInterface, doc, argumentsList);

  if (snakeInterface == 'getDestinyEntityDefinition') {
    snakeInterface += '<T extends keyof AllManifestComponents>';
  } else if (componentResponse.value) {
    snakeInterface += '<T extends DestinyComponentType[]>';
  }

  return (
    `${staticImports.join('\n')}\n${headerImports.join(
      '\n'
    )}\n${paramsTypeDefinition}${docComment(
      methodDef.description! + (rateDoc ? '\n' + rateDoc : ''),
      [hyperRef]
    )}
export async function ${snakeInterface}(${parameterArgs.join(
      ', '
    )}): Promise<BungieNetResponse<${responseType}${
      componentResponse.value ? '<T>' : ''
    }>> {` +
    `\nreturn client.fetch<${responseType}${
      componentResponse.value ? '<T>' : ''
    }>({
    method: '${method}',
    url: ${templatizedPath}${indent(paramsObject, 1)}${indent(
      requestBodyParam,
      1
    )}
  });
}`
  );
}

function generateParamsType(
  typeName: string,
  params: ParameterObject[],
  doc: OpenAPIObject,
  reference: string,
  importFiles: Map<string, string>,
  componentResponse: { value: boolean },
  componentByDef: { [def: string]: DefInfo }
) {
  const parameterArgs = params.map(param => {
    let paramType = resolveSchemaType(
      param.schema!,
      doc,
      importFiles,
      componentByDef,
      null
    );
    const docString = param.description
      ? docComment(param.description) + '\n'
      : '';
    if (param.name === 'entityType') {
      paramType = 'T';
    }
    const isComponent =
      param.name === 'components' && paramType === 'DestinyComponentType[]';
    if (isComponent) {
      componentResponse.value = true;
      paramType = '[...T]';
    }
    return `${docString}${param.name}${
      param.required || isComponent ? '' : '?'
    }: ${paramType};`;
  });

  if (typeName === 'GetDestinyEntityDefinitionParams') {
    importFiles.set('AllManifestComponents', '../../manifest/manifest-types');
    typeName += '<T extends keyof AllManifestComponents>';
  }
  return `${docComment('', [reference])}\nexport type ${typeName}${
    componentResponse.value ? '<T extends DestinyComponentType[]>' : ''
  } = {
${indent(parameterArgs.join('\n'), 1)}
}`;
}
