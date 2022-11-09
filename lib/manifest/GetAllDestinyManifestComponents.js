const http = require('../util/rate-limiter').manifestRequest;
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