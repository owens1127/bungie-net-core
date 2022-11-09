const getDestinyManifestComponent = require('./GetDestinyManifestComponent');

/**
 * this returns a similar structure to getAllDestinyManifestComponents (the big
 * manifest json) but only specific components within. it bundles multiple single
 * tables requests, into a single properly typed object with keys named after
 * manifest components
 * @template Components
 * @param {DestinyManifest} destinyManifest
 * @param {Components} tables The tables to access. Import the TABLES enum to help.
 * @param {DestinyManifestLanguage} language
 * @return {Promise<AllDestinyManifestComponents>}
*/

async function getDestinyManifestSlice(destinyManifest, tables, language) {
  const downloadedTables = await Promise.all(
    tables.map(async (table) => {
      const tableContent = await getDestinyManifestComponent(destinyManifest, table.name || table, language);
      return { tableName: table.name || table, tableContent };
    })
  );
  const manifestSlice = {};
  for (const downloadedTable of downloadedTables) {
    manifestSlice[downloadedTable.tableName] = downloadedTable.tableContent;
  }
  return manifestSlice;
}
module.exports = getDestinyManifestSlice;