import { manifestRequest as http } from '../util/rate-limiter.js';
export function getAllDestinyManifestComponents(params) {
  return http({
    method: 'GET',
    url: 'https://www.bungie.net' + params.destinyManifest.jsonWorldContentPaths[params.language]
  });
}