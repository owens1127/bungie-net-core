import { manifestRequest as http } from '../util/rate-limiter.js';
export async function getDestinyManifestComponent(params) {
  const r = {
    method: 'GET',
    url: 'https://www.bungie.net' + params.destinyManifest.jsonWorldComponentContentPaths[params.language][params.tableName]
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