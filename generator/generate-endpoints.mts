import {
  OpenAPIObject,
  ParameterLocation,
  ParameterObject,
  PathItemObject,
  isReferenceObject
} from 'openapi3-ts';
import {
  camelCase,
  docComment,
  generateHeader,
  generateImports,
  indent,
  seeLink,
  writeOutFile
} from './writing-utils.mjs';
import path from 'path';
import _ from 'underscore';
import { isRequestBodyObject } from './open-api-3-util.mjs';
import { resolveParamType } from './resolve-parameters.mjs';
import { DefinitionObject, ServiceInterfaces } from './types.mjs';
import { addValue, getTags, importInterface } from './util.mjs';

export function generateEndpointFile(
  tag: string,
  paths: [string, PathItemObject][],
  doc: OpenAPIObject,
  components: Map<string, DefinitionObject<any>>
): void {
  const importFiles = new Map<string, Set<string>>();
  const defs = new Array<string>();
  _.forEach(paths, ([route, pathDef]) => {
    const pathDefinition = generateEndpointDefinition(
      route,
      pathDef,
      doc,
      components,
      importFiles
    );
    defs.push(pathDefinition);
  });

  const filename = path.join('./endpoints', tag);

  const definition = [
    generateHeader(doc),
    _.compact(
      _.map(Array.from(importFiles.entries()), ([key, value]) =>
        generateImports(filename, key, Array.from(value))
      )
    ).join('\n'),
    defs.join('\n\n')
  ].join('\n\n');

  writeOutFile(path.join('./src', filename), '.ts', definition);
}

function generateEndpointDefinition(
  route: string,
  pathDef: PathItemObject,
  doc: OpenAPIObject,
  components: Map<string, DefinitionObject<any>>,
  importFiles: Map<string, Set<string>>
): string {
  let server = doc.servers![0].url;
  // per https://github.com/Bungie-net/api/issues/853
  // strict condition, so no surprises if doc.servers changes
  if (
    server === 'https://www.bungie.net/Platform' &&
    route.includes('/Stats/PostGameCarnageReport/')
  ) {
    server = 'https://stats.bungie.net/Platform';
  }
  const name = _.last(pathDef.summary!.split('.'))!;
  const method = pathDef.get ? 'GET' : 'POST';
  const methodDef = pathDef.get || pathDef.post!;
  const tags = getTags(pathDef);
  const params = (methodDef.parameters || []) as ParameterObject[];
  const link = seeLink('#' + pathDef.summary);
  const rateDoc =
    methodDef['x-documentation-attributes']
      ?.ThrottleSecondsBetweenActionPerUser &&
    `Wait at least ${methodDef['x-documentation-attributes']?.ThrottleSecondsBetweenActionPerUser}s between actions.`;

  params.forEach(param => {
    // per https://github.com/Bungie-net/api/pull/1718/commits/2d4225f5a93a814daba9f9443986da77bdd0e7bf
    // current page is a query param, not a route param
    if (param.name === 'currentpage') param.in = 'query';
  });

  const groupedParams = _.groupBy(params, param => param.in) as Partial<
    Record<ParameterLocation, ParameterObject[]>
  >;

  const args = new Array<string>();

  if (params.length) {
    args.push(`params: ${generateParamsType(params, components, importFiles)}`);
  }

  if (methodDef.requestBody) {
    if (isRequestBodyObject(methodDef.requestBody)) {
      const schema = methodDef.requestBody.content['application/json'].schema!;

      const paramType = resolveParamType(schema, components, importFiles, null);
      const docString = methodDef.requestBody.description
        ? docComment(methodDef.requestBody.description) + '\n'
        : '';

      args.push(
        docString +
          'body' +
          (methodDef.requestBody.required ? '' : '?') +
          `: ${paramType}`
      );
    } else if (isReferenceObject(methodDef.requestBody)) {
      throw new Error("didn't expect this");
    }
  }

  args.push('client: BungieClientProtocol');
  addValue(importFiles, './', 'BungieClientProtocol');
  importInterface(ServiceInterfaces.BungieResponse, importFiles);

  const paramInitializers = groupedParams.query?.map(param => {
    return `addParam(url, params['${param.name}'], '${param.name}')`;
  });
  const searchParamsString = paramInitializers?.join('\n') ?? '';
  if (searchParamsString) addValue(importFiles, './util', 'addParam');

  const urlString = _.compact([
    'const url = new URL(`' +
      (route.includes('{')
        ? `${server}${route.replace(/{/g, '${params.')}`
        : `${server}${route}`) +
      '`)',
    searchParamsString
  ]).join('\n');

  let requestBodyString = '';
  if (methodDef.requestBody && isRequestBodyObject(methodDef.requestBody)) {
    requestBodyString = 'body';
  }

  const responseType = resolveParamType(
    methodDef.responses['200'],
    components,
    importFiles,
    null
  );

  //   generateTestStub(tag, snakeInterface, doc, argumentsList);

  const docs = docComment(
    methodDef.description! + (rateDoc ? '\n' + rateDoc : ''),
    [link]
  );

  const hasComponentResponse = !!groupedParams.query?.some(
    param => param.name === 'components'
  );
  const getEntity = name === 'GetDestinyEntityDefinition';

  if (getEntity) {
    addValue(importFiles, './manifest/types', 'AllManifestComponents');
  }

  const generic = hasComponentResponse
    ? '<T extends readonly DestinyComponentType[]>'
    : getEntity
    ? '<T extends AllManifestComponents>'
    : '';

  const fetchArgs = _.compact([
    `method: '${method}'`,
    'url',
    requestBodyString
      ? [
          `${requestBodyString}`,
          'headers: { "Content-Type": "application/json" }'
        ].join(',\n')
      : null
  ]);

  const functionBody = [
    urlString,
    `return client.fetch({${fetchArgs.join(',\n')}})`
  ].join('\n');

  const definition = [
    `export async function ${camelCase(name)}${generic}(${args.join(
      ', '
    )}): Promise<${responseType}> {`,
    functionBody,
    '}'
  ].join('\n');

  return [docs, definition].join('\n');
}

function generateParamsType(
  params: ParameterObject[],
  components: Map<string, DefinitionObject>,
  importFiles: Map<string, Set<string>>
) {
  const parameterArgs = params.map(param => {
    let paramType = resolveParamType(
      param.schema!,
      components,
      importFiles,
      null
    );
    const docString = param.description
      ? docComment(param.description) + '\n'
      : '';

    const isComponent =
      param.name === 'components' && paramType === 'DestinyComponentType[]';
    if (isComponent) {
      paramType = '[...T]';
    }

    return (
      docString +
      param.name +
      (!param.required && !isComponent ? '?' : '') +
      `: ${paramType};`
    );
  });

  return '{\n' + indent(parameterArgs.join('\n'), 1) + '\n}';
}
