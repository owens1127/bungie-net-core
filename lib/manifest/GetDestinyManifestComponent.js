const http = require('../rate-limiter')

/**
 * Represents the look-up key for the manifest
 * @typedef {number} Hash
*/

/**
 * this fetches and returns a single table (Component) from the d2 manifest i.e.
 * DestinyInventoryItemDefinition / DestinyObjectiveDefinition /
 * DestinyVendorDefinition / DestinySeasonDefinition / etc.
 * @template Component
 * @param {DestinyManifest} destinyManifest
 * @param {Component} table The table to access. Import the TABLES enum to help.
 * @param {DestinyManifestLanguage} language
 * @return {Promise<{[key: Hash]: Component}>}
*/

async function getDestinyManifestComponent(destinyManifest, table, language)  {
  /** @type FetchConfig */
  const r = {
    method: 'GET',
    url:
        'https://www.bungie.net' +
        destinyManifest.jsonWorldComponentContentPaths[language][table.name || table],
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
module.exports = getDestinyManifestComponent;