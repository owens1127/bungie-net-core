import { OpenAPIObject, PathItemObject, SchemaObject } from 'openapi3-ts';
import { getRef } from './open-api-3-util.mjs';
import { ServiceInterfaces } from './types.mjs';
import _ from 'underscore';

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

export function addValue<T, S>(map: Map<T, Set<S>>, key: T, value: S): void {
  if (map.has(key)) {
    map.get(key)!.add(value);
  } else {
    map.set(key, new Set([value]));
  }
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

export function importInterface(
  serviceInterface: ServiceInterfaces,
  importFiles: Map<string, Set<string>>
) {
  addValue(importFiles, `./interfaces/${serviceInterface}`, serviceInterface);
}

export function getTags(pathItemObject: PathItemObject) {
  const tags = new Set<string>(
    _.compact([pathItemObject.get?.tags, pathItemObject.post?.tags]).flat()
  );
  if (tags.has('')) {
    tags.delete('');
    tags.add('Core');
  }
  return tags;
}
