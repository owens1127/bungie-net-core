import {
  OpenAPIObject,
  ParameterObject,
  PathItemObject,
  ReferenceObject,
  SchemaObject
} from 'openapi3-ts';
import {
  BaseItemComponentSetPattern,
  DefinitionObject,
  DestinyComponentTypeEnumComponent,
  DestinyDefinitionModel,
  DestinyVendorItemComponentSetPattern,
  DictionaryComponentPattern,
  ItemComponentSetPattern,
  ServiceInterfaces,
  SingleComponentPattern
} from './types.mjs';
import {
  combineSets,
  getTags,
  hasConditionalComponents,
  mappedToMobileManifestEntity
} from './util.mjs';
import { getRef, getReferencedTypes, isEnum, isRequestBodyObject } from './open-api-3-util.mjs';
import _ from 'underscore';
import { primitiveToDictionaryKey } from './resolve-parameters.mjs';

export function createTree(paths: [string, PathItemObject][], doc: OpenAPIObject) {
  //   const componentsByTag = new Map<string, string[]>();
  const components = findReachableComponents(paths, doc);

  const componentDefinitions = new Map<string, DefinitionObject<any>>();

  Array.from(components).forEach(component => {
    componentDefinitions.set(component, getDefinition(component, getTags(paths[1]), doc));
  });

  return componentDefinitions;
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

function getDefinition(
  component: string,
  tags: Set<string>,
  doc: OpenAPIObject
): DefinitionObject<any> {
  const ref = getRef(doc, component)!;
  const data: DefinitionObject['data'] = {
    hasConditionalComponents: hasConditionalComponents(component, doc),
    manifest: mappedToMobileManifestEntity(component, doc)
  };
  return {
    tags,
    component,
    ref,
    module: getModule(component, doc, ref, data),
    data
  };
}

function getModule(
  component: string,
  doc: OpenAPIObject,
  ref: SchemaObject,
  data: DefinitionObject<any>['data']
): DefinitionObject<any>['module'] {
  const split = component.split('/');
  const schemaName: string = _.last(split)!;
  const _parts = schemaName.split('.');
  const pathToDefinition = _parts.join('/');
  const componentName = _.last(_parts)!;

  const root = split.slice(2, split.length - 1).join('/') as 'responses' | 'schemas';
  if (root === 'responses') {
    return {
      type: 'appliedToInterface',
      interface: ServiceInterfaces.BungieResponse,
      parameterName: componentName => `${ServiceInterfaces.BungieResponse}<${componentName}>`,
      child: ref.properties!.Response
    };
  }

  // handle primitive types
  if (
    pathToDefinition === 'boolean' ||
    pathToDefinition === 'int32' ||
    pathToDefinition === 'int64'
  )
    return {
      type: 'primitive'
    };

  if (isEnum(component, doc)) {
    return {
      type: 'enum',
      importName: componentName,
      fileName: `./models/${pathToDefinition}`,
      enumFile: `./enums/${pathToDefinition}`
    };
  }
  const dictionaryComponentMatch = component.match(DictionaryComponentPattern);
  if (dictionaryComponentMatch) {
    const key = primitiveToDictionaryKey(dictionaryComponentMatch[1] as any);
    const child = (ref.properties!.data as SchemaObject).additionalProperties as
      | SchemaObject
      | ReferenceObject;

    return {
      type: 'appliedToInterface',
      parameterName: (...args) =>
        `${ServiceInterfaces.DictionaryComponent}<${key}, ${args[0]}, ${args[1]}, ${args[2]}>`,
      child,
      interface: ServiceInterfaces.DictionaryComponent
    };
  }

  const singleComponentMatch = component.match(SingleComponentPattern);
  if (singleComponentMatch) {
    const child = ref.properties!.data;
    return {
      type: 'appliedToInterface',
      parameterName: (...args) =>
        `${ServiceInterfaces.SingleComponent}<${args[0]}, ${args[1]}, ${args[2]}>`,
      interface: ServiceInterfaces.SingleComponent,
      child
    };
  }

  const itemComponentSetMatch = component.match(ItemComponentSetPattern);
  if (itemComponentSetMatch) {
    const key = primitiveToDictionaryKey(itemComponentSetMatch[1] as any);
    return {
      type: 'appliedToInterface',
      parameterName: (...args) => `${ServiceInterfaces.ItemComponentSet}<${key}, ${args[0]}>`,
      interface: ServiceInterfaces.ItemComponentSet,
      child: null
    };
  }

  const vendorItemComponentSetMatch = component.match(DestinyVendorItemComponentSetPattern);
  if (vendorItemComponentSetMatch) {
    return {
      type: 'appliedToInterface',
      parameterName: (...args) => `${ServiceInterfaces.VendorItemComponentSet}<${args[0]}>`,
      interface: ServiceInterfaces.VendorItemComponentSet,
      child: null
    };
  }

  const baseItemComponentSetMatch = component.match(BaseItemComponentSetPattern);
  if (baseItemComponentSetMatch) {
    return {
      type: 'appliedToInterface',
      parameterName: (...args) => `${ServiceInterfaces.BaseItemComponentSet}<${args[0]}>`,
      interface: ServiceInterfaces.BaseItemComponentSet,
      child: null
    };
  }

  if (data.hasConditionalComponents) {
    return {
      type: 'genericParams',
      interfaceName: `${componentName}<T extends readonly DestinyComponentType[] = DestinyComponentType[]>`,
      parameterName: componentName + `<K>`,
      importName: componentName,
      fileName: `./models/${pathToDefinition}`,
      interfaces: [],
      additionalReferences: [DestinyComponentTypeEnumComponent]
    };
  }

  if (component === DestinyDefinitionModel) {
    return {
      type: 'appliedToInterface',
      parameterName: (...args) =>
        `${ServiceInterfaces.DestinyDefinition}<AllManifestComponents[${args[0]}]>`,
      interface: ServiceInterfaces.DestinyDefinition,
      child: null
    };
  }

  return {
    type: 'normal',
    importName: componentName,
    fileName: `./models/${pathToDefinition}`
  };
}
