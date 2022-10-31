import _, {all} from 'underscore';
import {
  OpenAPIObject,
  PathItemObject,
  ParameterObject,
  SchemaObject,
  ReferenceObject,
} from 'openapi3-ts';
import {
  getRef,
  getReferencedTypes,
  DefInfo,
  typeName,
  isRequestBodyObject,
} from './util.js';

export function computeTypeMaps(
  pathPairsByTag: { [tag: string]: [string, PathItemObject][] },
  doc: OpenAPIObject
) {
  const allDefsEverywhere = new Set<string>();
  const defsByTag: { [tag: string]: Set<string> } = {};
  _.each(pathPairsByTag, (paths, tag) => {
    const defs = findReachableComponents(tag, paths, doc);
    addAll(allDefsEverywhere, defs);
    defsByTag[tag] = defs;
  });

  const componentsByFile: Map<string, DefInfo> = new Map<string, DefInfo>();
  const componentsByTag: { [tag: string]: DefInfo[] } = {};
  const componentByDef: { [def: string]: DefInfo } = {};
  const manifestComponents: DefInfo[] = [];
  const directoryExportsMap = new Map<string, Set<string>>();

  for (const def of allDefsEverywhere) {
    const tags: string[] = [];
    _.each(defsByTag, (defs: Set<string>, tag) => {
      if (defs.has(def)) {
        tags.push(tag);
      }
    });
    // const isEnum = getRef(doc, def)?.enum !== undefined
    const info: DefInfo = {
      def,
      tags,
      filename: addFile(def, directoryExportsMap),
      typeName: typeName(def, doc),
    };

    if (isMobileManifestEntity(def, doc)) {
      manifestComponents.push(info);
    }

    componentsByFile.set(info.filename, info);

    info.tags.forEach(tag => {
      componentsByTag[tag] = componentsByTag[tag] || [];
      componentsByTag[tag].push(info);
    })

    componentByDef[info.def] = info;
  }

  return { manifestComponents, directoryExportsMap, componentsByFile, componentsByTag, componentByDef};
}

function addFile(def: string, directories: Map<string, Set<string>>) {

  const split = def.split('/');
  const schemaName: string = _.last(split)!;
  const root = split.slice(2, split.length-1).join('/');
  const subDirectories = schemaName.split('.');
  const pathToDefinition = subDirectories.join('/');

  let basePath = root;
  const entries: Set<string> = directories.get(basePath) || new Set<string>();
  entries.add(subDirectories[0]);
  directories.set(basePath, entries);
  for (let i = 0; i < subDirectories.length - 1; i++) {
    const folder = subDirectories[i];
    let next = subDirectories[i+1];
    basePath += ('/' + folder);
    const entries: Set<string> = directories.get(basePath) || new Set<string>();
    entries.add(next);
    directories.set(basePath, entries);
  }

  return root + '/' + pathToDefinition + `.js`
}

function findReachableComponents(
  tag: string,
  paths: [string, PathItemObject][],
  doc: OpenAPIObject
) {
  const pathDefinitions = paths.reduce(
    (memo: Set<string>, [_, pathDef]) =>
      addAll(memo, findReachableComponentsFromPath(pathDef, doc)),
    new Set<string>()
  );

  const allDefinitions = new Set(pathDefinitions);
  pathDefinitions.forEach((definition) =>
    addReachableComponentsFromComponent(allDefinitions, definition, doc)
  );
  return allDefinitions;
}

function addAll<T>(first: Set<T>, second: Set<T>): Set<T> {
  for (const value of second) {
    first.add(value);
  }
  return first;
}

function findReachableComponentsFromPath(pathDef: PathItemObject, doc: OpenAPIObject): Set<string> {
  const methodDef = pathDef.get || pathDef.post!;
  const params = (methodDef.parameters || []) as ParameterObject[];
  const paramTypes = new Set(
    params.map((param) => getReferencedTypes(param.schema!)).filter((p) => p)
  ) as Set<string>;

  const requestBody = methodDef.requestBody;
  if (requestBody && isRequestBodyObject(requestBody)) {
    const schema = requestBody.content['application/json'].schema!;
    const paramType = getReferencedTypes(schema);
    if (paramType) {
      paramTypes.add(paramType);
    }
  }

  const returnType = getReferencedTypes(methodDef.responses['200']);
  if (returnType) {
    paramTypes.add(returnType);
  }

  return paramTypes;
}

function addReachableComponentsFromComponent(
  allDefinitions: Set<string>,
  definition: string,
  doc: OpenAPIObject
) {
  const component = getRef(doc, definition);
  if (!component) {
    return;
  }

  if (component && component.type === 'array') {
    addDefinitions(allDefinitions, component.items!, doc);
  } else if (component.type === 'object') {
    if (component.properties) {
      Object.values(component.properties).forEach((schema: SchemaObject | ReferenceObject) => {
        addDefinitions(allDefinitions, schema, doc);
      });
    }
    (component.allOf || []).forEach((schema: SchemaObject | ReferenceObject) => {
      addDefinitions(allDefinitions, schema, doc);
    });
    if (component.additionalProperties && typeof component.additionalProperties !== 'boolean') {
      addDefinitions(allDefinitions, component.additionalProperties, doc);
    }
  }
}

function addDefinitions(allDefinitions: Set<string>, schema: SchemaObject, doc: OpenAPIObject) {
  const newDefinition = getReferencedTypes(schema);
  addDefinitionsFromComponent(allDefinitions, newDefinition, doc);
  if (schema['x-mapped-definition']) {
    addDefinitionsFromComponent(allDefinitions, schema['x-mapped-definition'].$ref, doc);
  }
}

function addDefinitionsFromComponent(
  allDefinitions: Set<string>,
  definition: string | undefined,
  doc: OpenAPIObject
) {
  if (definition && !allDefinitions.has(definition)) {
    allDefinitions.add(definition);
    addReachableComponentsFromComponent(allDefinitions, definition, doc);
  }
}

function isMobileManifestEntity(def: string, doc: OpenAPIObject) {
  return getRef(doc, def)!['x-mobile-manifest-name']! !== undefined;
}

export function seeDefHyperLink(def: string) {
  return `@see {@link https://bungie-net.github.io/${def}}`;
}
