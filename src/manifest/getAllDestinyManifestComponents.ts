import { AllDestinyManifestComponents, DestinyManifestLanguage } from './index';
import { DestinyManifest } from '../models/index';
import { BungieClientProtocol } from '../client';
import { ManifestRequestError } from '../errors/ManifestRequestError';

export interface GetAllDestinyManifestComponentsParams {
  destinyManifest: DestinyManifest;
  language: DestinyManifestLanguage;
}
/** fetches the enormous combined JSON manifest file */
export async function getAllDestinyManifestComponents(
  params: GetAllDestinyManifestComponentsParams,
  client: BungieClientProtocol
): Promise<AllDestinyManifestComponents> {
  try {
    const data = await fetch(
      'https://www.bungie.net' +
        params.destinyManifest.jsonWorldContentPaths[params.language]
    );
    if (data.ok) {
      return data.json();
    } else {
      throw data;
    }
  } catch (e) {
    throw new ManifestRequestError(
      'Failed to get all manifest components',
      params,
      e
    );
  }
}
