import { OpenAPIObject, SchemaObject } from 'openapi3-ts';
import { getRef } from './open-api-3-util.mjs';

export function combineSets<T>(first: Set<T>, second: Set<T>): Set<T> {
  const newSet = new Set<T>();
  for (const value of first) {
    newSet.add(value);
  }
  for (const value of second) {
    newSet.add(value);
  }
  return newSet;
}

export function isEnum(component: string, doc: OpenAPIObject): boolean {
  return !!getRef(doc, component)?.['x-enum-values'];
}

export function mappedToMobileManifestEntity(
  component: string,
  doc: OpenAPIObject
) {
  return getRef(doc, component)!['x-mobile-manifest-name'] as
    | string
    | undefined;
}

export function hasConditionalComponents(
  component: string,
  doc: OpenAPIObject
): boolean {
  const ref = getRef(doc, component);
  return Object.values(ref?.properties ?? {}).some(
    (potentialComponents: SchemaObject) =>
      potentialComponents['x-destiny-component-type-dependency']
  );
}
