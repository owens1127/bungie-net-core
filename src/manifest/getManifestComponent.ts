import { BungieClientProtocol } from '..';
import { DestinyManifest } from '../models/Destiny/Config/DestinyManifest';
import { AllManifestComponents, DestinyManifestLanguage } from './types';

type ManifestDefinition<T extends keyof AllManifestComponents> =
  AllManifestComponents[T];

export async function getManifestComponentJSON<
  T extends keyof AllManifestComponents
>(
  {
    destinyManifest,
    tableName,
    language
  }: {
    destinyManifest: DestinyManifest;
    tableName: T;
    language: DestinyManifestLanguage;
  },
  client: BungieClientProtocol
): Promise<Record<string, ManifestDefinition<T>>> {
  let url = new URL(
    'https://www.bungie.net' +
      destinyManifest.jsonWorldComponentContentPaths[language][tableName]
  );

  return client.fetch({ url, method: 'GET' });
}
