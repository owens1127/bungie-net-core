const http = require('../util/rate-limiter').manifestRequest;
/**
 * Represents the look-up key for the manifest
 * @typedef {number} Hash
*/
/**
 * fetches the enormous combined JSON manifest file
 * @param {DestinyManifest} destinyManifest
 * @param {DestinyManifestLanguage?} language
 * @returns Promise<AllDestinyManifestComponents>
*/
async function getAllDestinyManifestComponents(destinyManifest, language) {
  return http({
    method: 'GET',
    url: 'https://www.bungie.net'+destinyManifest.jsonWorldContentPaths[language],
  });
}
module.exports = getAllDestinyManifestComponents;