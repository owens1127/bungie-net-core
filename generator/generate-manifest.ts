import { DefInfo } from './util';
import { OpenAPIObject } from 'openapi3-ts';
import { writeOutFile } from './generate-common.js';

let attempts = 0;
const manifestMetadataPromise = manifestMetaResponse(0);

// @ts-ignore
async function manifestMetaResponse(retry: number) {
  try {
    // @ts-ignore
    let manifestMeta: { Response: Object } = await fetch('https://www.bungie.net/Platform/Destiny2/Manifest/').then(
      res => res.json()
    );
    if (!manifestMeta?.Response) {
      if (retry > 5) {
        console.error(new Error('Failed to download Manifest'));
        process.exit(1);
      }
      // try again
      return await manifestMetaResponse(++attempts);
    }
    return manifestMeta.Response;
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

export async function generateManifestUtils(
  components: DefInfo[],
  componentByDef: { [def: string]: DefInfo },
  doc: OpenAPIObject
) {
  const filename = `src/manifest/manifest-types.ts`;
  let manifestMetadata = await manifestMetadataPromise;

  // defs we have documentation for. some stuff in manifest doesn't have type definitions. idk why.
  const jsonKeys = Object.keys(manifestMetadata.jsonWorldComponentContentPaths.en);
  // exclude some tables from the definitionmanifest table because we don't have the format for them
  const defsToInclude = components.filter(def => jsonKeys.includes(def.typeName));

  const languageList = Object.keys(manifestMetadata.jsonWorldComponentContentPaths).sort();

  const body = `import {${defsToInclude.map(c => `\n  ${c.typeName},`).join('')}
} from '../schemas';
/**
 * this describes a big object holding several tables of hash-keyed DestinyDefinitions.
 * this is roughly what you get if you decode the gigantic, single-json manifest blob,
 * but also just what we use here to dole out single-table, typed definitions
 */
export interface AllDestinyManifestComponents {
${defsToInclude
  .map(manifestComponent => `  ${manifestComponent.typeName}: { [key: number]: ${manifestComponent.typeName} };\n`)
  .join('')}}

export const enum ManifestComponents {
${defsToInclude
  .map(manifestComponent => `  ${manifestComponent.typeName} = '${manifestComponent.typeName}',\n`)
  .join('')}
}

/**
 * languages the manifest comes in, as their required keys to download them
 */
export const destinyManifestLanguages = [
${languageList.map(l => `  '${l}',`).join('\n')}
] as const;
export type DestinyManifestLanguage = typeof destinyManifestLanguages[number];
export type DestinyManifestComponentName = keyof AllDestinyManifestComponents;

export type DestinyManifestSlice<K extends Readonly<DestinyManifestComponentName[]>> = Pick<
  AllDestinyManifestComponents,
  K[number]
>;

/**
 * given a STRING table name, returns that TYPE, so that you can write a function like:
 * func<K extends DestinyManifestComponentName>(arg0:K):DestinyDefinitionFrom<K>{...}
 * i.e.
 * func('DestinyInventoryItemDefinition') will return type DestinyInventoryItemDefinition
 */
export type DestinyDefinitionFrom<
  K extends DestinyManifestComponentName
> = AllDestinyManifestComponents[K][number];
`;

  writeOutFile(filename, [generateManifestHeader(doc), body].join('\n\n'));
}

function generateManifestHeader(doc: OpenAPIObject): string {
  return `/**
 * These definitions and helper functions are based off the structure of DestinyManifest
 * in the bungie.net API spec, but are not explicitly defined endpoints in the spec.
 */`;
}
