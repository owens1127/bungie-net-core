import {
  OpenAPIObject,
  ReferenceObject,
  RequestBodyObject,
  SchemaObject
} from 'openapi3-ts';

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

export function getReferencedTypes(
  schema: SchemaObject | ReferenceObject
): string | undefined {
  if (isReferenceObject(schema)) {
    return schema.$ref;
  } else if (schema['x-enum-reference']) {
    return schema['x-enum-reference'].$ref;
  } else if (schema.items) {
    return getReferencedTypes(schema.items!);
  } else if (schema.allOf) {
    return getReferencedTypes(schema.allOf[0]);
  } else if (
    schema.additionalProperties &&
    typeof schema.additionalProperties !== 'boolean'
  ) {
    return getReferencedTypes(schema.additionalProperties);
  }
}

export function getRef(
  doc: OpenAPIObject,
  ref: string
): SchemaObject | undefined {
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
