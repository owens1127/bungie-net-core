import { SchemaObject, ReferenceObject, OpenAPIObject, RequestBodyObject } from 'openapi3-ts';
import _ from 'underscore';
import {computeTypeMaps} from "./type-index";

export interface DefInfo {
  def: string;
  tags: string[];
  filename: string;
  typeName: string;
}

export function resolveSchemaType(
  schema: SchemaObject | ReferenceObject,
  doc: OpenAPIObject,
  importFiles?: Set<string>,
  componentByDef?: { [def: string]: DefInfo }

): string {
  if (isReferenceObject(schema)) {
    return typeName(schema.$ref, doc);
  } else if (schema['x-enum-reference']) {
    const ref = schema['x-enum-reference'].$ref
    return typeName(ref, doc);
  } else {
    return typeMapping(schema, doc, importFiles, componentByDef);
  }
}

export function typeMapping(
    schema: SchemaObject,
    doc: OpenAPIObject,
    importFiles?: Set<string>,
    componentByDef?: { [def: string]: DefInfo }
): string {
  switch (schema.type) {
    case 'string':
      return schema.format === 'byte' ? 'number' : 'string';
    case 'integer':
      // JS can't represent a 64-bit int as a number, so bungie.net returns it as a string in JSON
      return schema.format === 'int64' ? 'string' : 'number';

    case 'array':
      return resolveSchemaType(schema.items!, doc, importFiles) + '[]';
    case 'object':
      if (schema.allOf) {
        return resolveSchemaType(schema.allOf[0], doc);
      } else if (
        schema.additionalProperties &&
        schema['x-dictionary-key'] &&
        typeof schema.additionalProperties !== 'boolean'
      ) {
        const keySchema: SchemaObject | ReferenceObject = schema['x-dictionary-key'];
        const key = isReferenceObject(keySchema) ? 'number' : resolveSchemaType(keySchema, doc, importFiles, componentByDef);
        const val = resolveSchemaType(schema.additionalProperties, doc);
        return `Object.key<${key}, ${val}>`;
      }
  }

  return schema.type!;
}

export function getReferencedTypes(schema: SchemaObject | ReferenceObject): string | undefined {
  if (isReferenceObject(schema)) {
    return schema.$ref;
  } else if (schema['x-enum-reference']) {
    return schema['x-enum-reference'].$ref;
  } else if (schema.items) {
    return getReferencedTypes(schema.items!);
  } else if (schema.allOf) {
    return getReferencedTypes(schema.allOf[0]);
  } else if (schema.additionalProperties && typeof schema.additionalProperties !== 'boolean') {
    return getReferencedTypes(schema.additionalProperties);
  }
}

export function lcFirst(name: string): string {
  return name[0].toLowerCase() + name.substring(1);
}

export function lastPart(name: string): string {
  return _.last(name.split(/[\.\/]/))!;
}

export function getRef(doc: OpenAPIObject, ref: string): SchemaObject | undefined {
  const path = ref.replace('#/', '').split('/');
  let result = doc;
  let pathSegment = path.shift();
  while (pathSegment) {
    result = result[pathSegment];
    pathSegment = path.shift();
  }
  if (!result) {
    return undefined;
  }
  if (result.content) {
    return result.content['application/json'].schema;
  } else {
    return result;
  }
}

export function typeName(componentPath: string, doc: OpenAPIObject) {
  const name = lastPart(componentPath);
  const component = getRef(doc, componentPath);
  if (!component) {
    return 'any';
  }

  return name;

}

export function isRequestBodyObject(
  requestBody: RequestBodyObject | ReferenceObject
): requestBody is RequestBodyObject {
  return (requestBody as RequestBodyObject).content !== undefined;
}

export function isReferenceObject(
  schema: SchemaObject | ReferenceObject
): schema is ReferenceObject {
  return (schema as ReferenceObject).$ref !== undefined;
}
