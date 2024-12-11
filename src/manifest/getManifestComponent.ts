import { AllDestinyManifestComponents, DestinyManifestDefinition, DestinyManifestLanguage } from '.';
import { BungieClientProtocol } from '..';
import { DestinyManifest } from '../models/Destiny/Config/DestinyManifest';

export async function getManifestComponentJSON<T extends keyof AllDestinyManifestComponents>(
  client: BungieClientProtocol,
  {
    destinyManifest,
    tableName,
    language
  }: {
    destinyManifest: DestinyManifest;
    tableName: T;
    language: DestinyManifestLanguage;
  }
): Promise<Record<string, DestinyManifestDefinition<T>>> {
  const url = new URL('https://www.bungie.net' + destinyManifest.jsonWorldComponentContentPaths[language][tableName]);
  return client.fetch({ url, method: 'GET' });
}
