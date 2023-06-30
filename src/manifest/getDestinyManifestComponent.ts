import {
  AllDestinyManifestComponents,
  DestinyManifestComponentName,
  DestinyManifestLanguage
} from './';
import { DestinyManifest } from '../models';
import { ManifestRequestError } from '../errors/ManifestRequestError';

export interface GetDestinyManifestComponentParams<
  T extends DestinyManifestComponentName
> {
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
export async function getDestinyManifestComponent<
  T extends DestinyManifestComponentName
>(
  params: GetDestinyManifestComponentParams<T>
): Promise<AllDestinyManifestComponents[T]> {
  let url =
    'https://www.bungie.net' +
    params.destinyManifest.jsonWorldComponentContentPaths[params.language][
      params.tableName
    ];

  const request = async (): Promise<AllDestinyManifestComponents[T]> => {
    const data = await fetch(url);
    if (data.ok) {
      return data.json();
    } else {
      throw data;
    }
  };

  try {
    return request();
  } catch (e) {
    url += '?retry';
    try {
      return request();
    } catch (e) {
      throw new ManifestRequestError(
        `Failed to get the ${params.tableName} manifest component`,
        params,
        e
      );
    }
  }
}
