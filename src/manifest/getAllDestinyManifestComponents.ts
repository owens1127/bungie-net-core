import { manifestRequest as http } from '../util/rate-limiter';
import {AllDestinyManifestComponents, DestinyManifestLanguage} from "./index";
import { DestinyManifest } from "../schemas";

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