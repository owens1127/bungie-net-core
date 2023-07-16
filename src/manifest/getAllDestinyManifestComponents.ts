import { DestinyManifest } from '../models/index';
import { ManifestRequestError } from '../errors/ManifestRequestError';
import {
  AllManifestComponents,
  DestinyManifestLanguage
} from './manifest-types';
import fetch from 'isomorphic-fetch';

export interface GetAllDestinyManifestComponentsParams {
  destinyManifest: DestinyManifest;
  language: DestinyManifestLanguage;
}
/** fetches the enormous combined JSON manifest file */
export async function getAllDestinyManifestComponents(
  params: GetAllDestinyManifestComponentsParams
): Promise<AllManifestComponents> {
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
