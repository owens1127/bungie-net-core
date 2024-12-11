import { AllDestinyManifestComponents, DestinyManifestDefinition, DestinyManifestLanguage } from '.';
import { BungieHttpProtocol } from '..';
import { DestinyManifest } from '../models/Destiny/Config/DestinyManifest';

export async function getManifestComponentJSON<T extends keyof AllDestinyManifestComponents>(
  http: BungieHttpProtocol,
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
  const baseUrl = 'https://www.bungie.net' + destinyManifest.jsonWorldComponentContentPaths[language][tableName];
  return http<Record<string, DestinyManifestDefinition<T>>>({
    baseUrl,
    method: 'GET',
    searchParams: new URLSearchParams(),
    body: undefined
  });
}
