import { getDestinyManifestComponent } from "./index.js";

export async function getDestinyManifestSlice(params) {
  const downloadedTables = await Promise.all(params.tableNames.map(async tableName => {
    const tableContent = await getDestinyManifestComponent({
      destinyManifest: params.destinyManifest,
      tableName,
      language: params.language
    });
    return {
      tableName,
      tableContent
    };
  }));
  const manifestSlice = {};
  for (const downloadedTable of downloadedTables) {
    manifestSlice[downloadedTable.tableName] = downloadedTable.tableContent;
  }
  return manifestSlice;
}