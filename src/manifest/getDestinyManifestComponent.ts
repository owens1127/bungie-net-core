import { manifestRequest as http } from '../util/rate-limiter.js';
import {
  AllDestinyManifestComponents,
  DestinyManifestComponentName,
  DestinyManifestLanguage
} from './index.js';
import { DestinyManifest } from '../schemas/index.js';

export interface GetDestinyManifestComponentParams<T extends DestinyManifestComponentName> {
  destinyManifest: DestinyManifest;
  tableName: T;
  language: DestinyManifestLanguage;
}
/**
 * this fetches and returns a single table (Component) from the d2 manifest
 * i.e. DestinyInventoryItemDefinition / DestinyObjectiveDefinition /
 * DestinyVendorDefinition / DestinySeasonDefinition / etc.
 *
 * due to typescript limitations, the table name needs to be recognized by
 * typescript as a const (not mutable between inception and going into the function),
 * so that it considers it a table name and not just a string.
 *
 * this is easy with a string, since
 *
 * `const x = 'thing';` is type `'thing'`, not type `string`,
 *
 * but make sure it's not a `let x =` or a dynamically set string.
 */
export async function getDestinyManifestComponent<T extends DestinyManifestComponentName>(
  params: GetDestinyManifestComponentParams<T>
): Promise<AllDestinyManifestComponents[T]> {
  const r = {
    method: 'GET' as const,
    url:
      'https://www.bungie.net' +
      params.destinyManifest.jsonWorldComponentContentPaths[params.language][params.tableName]
  };
  try {
    return await http(r);
  } catch (e) {
    r.url += '?retry';
    try {
      return await http(r);
    } catch {
      throw e;
    }
  }
}
