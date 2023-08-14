import {
  OpenAPIObject,
  ParameterObject,
  PathItemObject,
  ReferenceObject,
  SchemaObject
} from 'openapi3-ts';
import {
  DefinitionObject,
  DictionaryComponentPattern,
  ServiceInterfaces,
  SingleComponentPattern
} from './types.mjs';
import {
  combineSets,
  hasConditionalComponents,
  isEnum,
  mappedToMobileManifestEntity
} from './util.mjs';
import {
  getRef,
  getReferencedTypes,
  isRequestBodyObject
} from './open-api-3-util.mjs';
import _ from 'underscore';

export function createTree(
  paths: [string, PathItemObject][],
  doc: OpenAPIObject
) {
  //   const componentsByTag = new Map<string, string[]>();
  const components = findReachableComponents(paths, doc);

  const defintionsByComponent: Map<string, DefinitionObject> = new Map<
    string,
    DefinitionObject
  >();

  Array.from(components).forEach(component => {
    defintionsByComponent.set(component, getDefinition(component, doc));
  });

  const defintionsByFile: Map<string, DefinitionObject> = new Map<
    string,
    DefinitionObject
  >();
  const defintionsByTag: Map<string, DefinitionObject> = new Map<
    string,
    DefinitionObject
  >();

  //   console.log(defintionsByComponent);
}

function findReachableComponents(
  paths: [string, PathItemObject][],
  doc: OpenAPIObject
): Set<string> {
  const pathDefinitions = paths.reduce(
    (memo: Set<string>, [_, pathDef]) =>
      combineSets(memo, findReachableComponentsFromPath(pathDef)),
    new Set<string>()
  );

  const allDefinitions = new Set(pathDefinitions);
  pathDefinitions.forEach(definition => {
    addReachableComponentsFromComponent(allDefinitions, definition, doc);
  });
  return allDefinitions;
}

function findReachableComponentsFromPath(pathDef: PathItemObject): Set<string> {
  const methodDef = pathDef.get || pathDef.post!;
  const params = (methodDef.parameters || []) as ParameterObject[];
  const paramTypes = new Set(
    params.map(param => getReferencedTypes(param.schema!)).filter(Boolean)
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
      Object.values(component.properties).forEach(
        (schema: SchemaObject | ReferenceObject) => {
          addDefinitions(allDefinitions, schema, doc);
        }
      );
    }
    (component.allOf || []).forEach(
      (schema: SchemaObject | ReferenceObject) => {
        addDefinitions(allDefinitions, schema, doc);
      }
    );
    if (
      component.additionalProperties &&
      typeof component.additionalProperties !== 'boolean'
    ) {
      addDefinitions(allDefinitions, component.additionalProperties, doc);
    }
  }
}

function addDefinitions(
  allDefinitions: Set<string>,
  schema: SchemaObject,
  doc: OpenAPIObject
) {
  const newDefinition = getReferencedTypes(schema);
  addDefinitionsFromComponent(allDefinitions, newDefinition, doc);
  if (schema['x-mapped-definition']) {
    addDefinitionsFromComponent(
      allDefinitions,
      schema['x-mapped-definition'].$ref,
      doc
    );
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

function getDefinition(
  component: string,
  doc: OpenAPIObject
): DefinitionObject {
  const ref = getRef(doc, component)!;
  return {
    tags: [],
    module: filesFor(component, doc, ref),
    data: {
      hasConditionalComponents: hasConditionalComponents(component, doc),
      manifest: mappedToMobileManifestEntity(component, doc),
      dependsOnComponent: ref['x-destiny-component-type-dependency']
    }
  };
}

function filesFor(
  component: string,
  doc: OpenAPIObject,
  ref: SchemaObject
): DefinitionObject['module'] {
  const split = component.split('/');
  const schemaName: string = _.last(split)!;
  const _parts = schemaName.split('.');
  const pathToDefinition = _parts.join('/');
  const componentName = _.last(_parts)!;

  // handle primitive types
  if (
    pathToDefinition === 'boolean' ||
    pathToDefinition === 'int32' ||
    pathToDefinition === 'int64'
  )
    return {
      interfaceName: pathToDefinition,
      componentName,
      exportTo: null,
      importFrom: null
    };

  const root = split.slice(2, split.length - 1).join('/') as
    | 'responses'
    | 'schemas';
  if (root === 'responses') {
    return {
      interfaceName: `${ServiceInterfaces.BungieResponse}<${componentName}>`,
      componentName,
      exportTo: null,
      importFrom: {
        interface: ServiceInterfaces.BungieResponse,
        ref: component.replace('responses', 'schemas')
      }
    };
  }

  const dictionaryComponentMatch = component.match(DictionaryComponentPattern);
  if (dictionaryComponentMatch) {
    return {
      interfaceName: `${ServiceInterfaces.DictionaryComponent}<${componentName}>`,
      componentName,
      exportTo: null,
      importFrom: {
        interface: ServiceInterfaces.DictionaryComponent,
        ref: (
          (ref.properties!.data as SchemaObject)
            .additionalProperties as ReferenceObject
        ).$ref
      }
    };
  }

  const singleComponentMatch = component.match(SingleComponentPattern);
  if (singleComponentMatch) {
    return {
      interfaceName: `${ServiceInterfaces.SingleComponent}<${componentName}>`,
      componentName,
      exportTo: null,
      importFrom: {
        interface: ServiceInterfaces.SingleComponent,
        ref: ref.properties?.data.$ref
      }
    };
  }

  const fileName = `./${
    isEnum(component, doc) ? 'enums' : 'models'
  }/${pathToDefinition}`;
  return {
    interfaceName: componentName,
    componentName,
    exportTo: fileName,
    importFrom: fileName
  };
}
