import {
  AllDestinyManifestComponents,
  DestinyManifestComponentName,
  DestinyManifestLanguage,
  DestinyManifestSlice,
  getDestinyManifestComponent
} from './';
import { DestinyManifest } from '../schemas';

export interface GetDestinyManifestSliceParams<T extends DestinyManifestComponentName[]> {
  destinyManifest: DestinyManifest;
  tableNames: T;
  language: DestinyManifestLanguage;
}
/**
 * this returns a similar structure to getAllDestinyManifestComponents (the big manifest json)
 * but only specific components within. it bundles multiple single tables requests,
 * into a single properly typed object with keys named after manifest components
 *
 * i.e. `{ DestinyInventoryItemDefinition: etc...,
 * DestinyObjectiveDefinition: etc... }`
 *
 * due to typescript limitations, the array of tableNames needs to be recognized by
 * typescript as readonly (not mutable between inception and going into the function),
 * so that it considers them table names and not just strings.
 *
 * like `['DestinyInventoryItemDefinition' as const]`
 *
 * or maybe `['DestinyInventoryItemDefinition'] as const`
 *
 * or just feed in into the function hardcoded like
 *
 * `function(['DestinyInventoryItemDefinition'])`
 */

export async function getDestinyManifestSlice<T extends DestinyManifestComponentName[]>(
  params: GetDestinyManifestSliceParams<T>
): Promise<DestinyManifestSlice<T>> {
  const downloadedTables = await Promise.all(
    params.tableNames.map(async tableName => {
      const tableContent = await getDestinyManifestComponent({
        destinyManifest: params.destinyManifest,
        tableName,
        language: params.language
      });
      return { tableName, tableContent };
    })
  );
  const manifestSlice = {} as AllDestinyManifestComponents;
  for (const downloadedTable of downloadedTables) {
    manifestSlice[downloadedTable.tableName] = downloadedTable.tableContent as any;
  }
  return manifestSlice as DestinyManifestSlice<T>;
}
