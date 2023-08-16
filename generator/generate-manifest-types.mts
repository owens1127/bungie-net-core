import { OpenAPIObject } from 'openapi3-ts';
import { DefinitionObject } from './types.mjs';
import _ from 'underscore';
import {
  generateHeader,
  generateImports,
  writeOutFile
} from './writing-utils.mjs';
import path from 'path';

const typesFile = './manifest/types';

export async function generateManifestTypes(
  defs: DefinitionObject<'normal'>[],
  doc: OpenAPIObject
) {
  let attempt = 0;
  const manifest = await getManifest();

  // defs we have documentation for. some stuff in manifest doesn't have type definitions. idk why.
  const jsonKeys = Object.keys(manifest.jsonWorldComponentContentPaths.en);
  // exclude some tables from the definitionmanifest table because we don't have the format for them
  const defsToInclude = defs.filter(def => jsonKeys.includes(def.module.name));

  const languageList = Object.keys(
    manifest.jsonWorldComponentContentPaths
  ).sort();

  const imports = _.compact(
    defsToInclude.map(def =>
      generateImports(typesFile, def.module.fileName, [def.module.name])
    )
  );

  const allManifestComponentsType =
    `export type AllManifestComponents = {` +
    '\n' +
    defsToInclude.map(d => `'${d.module.name}': ${d.module.name};`).join('\n') +
    '\n' +
    '}';

  const languageType = `export type DestinyManifestLanguage = ${languageList
    .map(l => `'${l}'`)
    .join(' | ')}`;

  writeOutFile(
    path.join('./src', typesFile),
    '.ts',
    [
      generateHeader(doc),
      imports.join('\n'),
      allManifestComponentsType,
      languageType
    ].join('\n\n')
  );

  async function getManifest(retry: number = 0): Promise<any> {
    try {
      // @ts-ignore
      const data = await fetch(
        'https://www.bungie.net/Platform/Destiny2/Manifest/'
      ).then(res => res.json());
      if (!data?.Response) {
        if (retry > 3) {
          console.error(new Error('Failed to download Manifest'));
          process.exit(1);
        }
        // try again
        return await getManifest(++attempt);
      }
      return data.Response;
    } catch (e) {
      console.error(e);
      process.exit(1);
    }
  }
}
