import { manifestRequest as http } from '../util/rate-limiter.js';
import {AllDestinyManifestComponents, DestinyManifestLanguage} from "./index.js";
import { DestinyManifest } from "../schemas/index.js";

export interface GetAllDestinyManifestComponentsParams {
  destinyManifest: DestinyManifest;
  language: DestinyManifestLanguage;
}
/** fetches the enormous combined JSON manifest file */
export function getAllDestinyManifestComponents(
    params: GetAllDestinyManifestComponentsParams
): Promise<AllDestinyManifestComponents> {
  return http({
    method: 'GET',
    url: 'https://www.bungie.net'+params.destinyManifest.jsonWorldContentPaths[params.language],
  });
}