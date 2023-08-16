import {
  ReferenceObject,
  SchemaObject,
  isReferenceObject,
  isSchemaObject
} from 'openapi3-ts';
import { DefinitionObject } from './types.mjs';
import { addValue, importInterface } from './util.mjs';
import _ from 'underscore';

export function resolveParamType(
  schema: SchemaObject | ReferenceObject,
  componentMap: Map<string, DefinitionObject<any>>,
  importFiles: Map<string, Set<string>>,
  dependency: string[] | null
): string {
  if (isSchemaObject(schema) && schema['x-destiny-component-type-dependency']) {
    dependency = [
      `DestinyComponentType.${schema['x-destiny-component-type-dependency']}`
    ];
  }

  let module: DefinitionObject<any>['module'];
  if (isReferenceObject(schema)) {
    const def = componentMap.get(schema.$ref);
    if (!def) throw Error('Missing reference');
    module = def.module;
  } else if ('x-enum-reference' in schema) {
    module = componentMap.get(schema['x-enum-reference'].$ref)!.module;
  } else {
    return findParamType(schema, componentMap, importFiles, dependency);
  }

  switch (module.type) {
    case 'primitive':
      throw Error('primtive value');
    case 'enum':
    case 'normal':
      addValue(importFiles, module.fileName, module.name);
      return module.name;
    case 'normal':
      addValue(importFiles, module.fileName, module.name);
      return module.name;
    case 'appliedToInterface':
      importInterface(module.interface, importFiles);

      const resolvedComponentName = module.child
        ? resolveParamType(module.child, componentMap, importFiles, dependency)
        : null;
      const args = _.compact([
        resolvedComponentName,
        'T',
        ...(dependency ?? [])
      ]);
      return module.parameterName(...args);
    case 'genericParams':
      addValue(importFiles, module.fileName, module.importName);

      module.interfaces.forEach(intf => importInterface(intf, importFiles));
      module.additionalReferences.forEach(ref => {
        resolveParamType({ $ref: ref }, componentMap, importFiles, dependency);
      });
      return module.parameterName;
  }
}

function findParamType(
  schema: SchemaObject,
  componentMap: Map<string, DefinitionObject>,
  importFiles: Map<string, Set<string>>,
  dependency: string[] | null
): string {
  switch (schema.type) {
    case 'string':
      return schema.format === 'byte' ? 'number' : 'string';
    case 'integer':
      // JS can't represent a 64-bit int as a number, so bungie.net returns it as a string in JSON
      return primitiveToDictionaryKey(schema.format as any);
    case 'array':
      return (
        resolveParamType(schema.items!, componentMap, importFiles, dependency) +
        '[]'
      );
    case 'object':
      if (schema.allOf) {
        return resolveParamType(
          schema.allOf[0],
          componentMap,
          importFiles,
          dependency
        );
      } else if (
        schema.additionalProperties &&
        schema['x-dictionary-key'] &&
        typeof schema.additionalProperties !== 'boolean'
      ) {
        const keySchema: SchemaObject | ReferenceObject =
          schema['x-dictionary-key'];
        const key = isReferenceObject(keySchema)
          ? 'number'
          : resolveParamType(keySchema, componentMap, importFiles, dependency);
        const val = resolveParamType(
          schema.additionalProperties,
          componentMap,
          importFiles,
          dependency
        );
        const keyExp =
          key === 'number' || key === 'string'
            ? `key: ${key}`
            : `key in ${key}`;
        return `{ [${keyExp}]: ${val} }`;
      }
  }

  return schema.type!;
}

export function primitiveToDictionaryKey(
  primitive: 'int32' | 'uint32' | 'int64'
) {
  return primitive === 'int64' ? 'string' : 'number';
}
