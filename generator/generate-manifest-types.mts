import { OpenAPIObject } from 'openapi3-ts';
import { DefinitionObject } from './types.mjs';
import _ from 'underscore';
import { generateHeader, generateImports, writeOutFile } from './writing-utils.mjs';
import path from 'path';

const typesFile = './manifest/types';

export async function generateManifestTypes(
  defs: DefinitionObject<'normal'>[],
  doc: OpenAPIObject
) {
  let attempt = 0;
  const manifest = await getManifest();

  const jsonKeys = Object.keys(manifest.jsonWorldComponentContentPaths.en);
  // exclude some tables from the definitionmanifest table because we don't have the format for them
  const defsToInclude = defs.filter(def => jsonKeys.includes(def.module.importName));

  const languageList = Object.keys(manifest.jsonWorldComponentContentPaths).sort();

  const imports = _.compact(
    defsToInclude.map(def =>
      generateImports(typesFile, def.module.fileName, [def.module.importName])
    )
  );

  imports.push(`import { DestinyDefinition } from '../interfaces';`);

  // defs we have documentation for. some stuff in manifest doesn't have type definitions. idk why.
  const extraJsonKeys = jsonKeys.filter(
    key => !defsToInclude.map(d => d.module.importName).includes(key)
  );

  // fun!
  extraJsonKeys.splice(extraJsonKeys.indexOf('DestinyInventoryItemLiteDefinition'), 1);

  const allManifestComponentsType = [
    `export type AllManifestComponents = {`,
    defsToInclude.map(d => `'${d.module.importName}': ${d.module.importName};`).join('\n'),
    extraJsonKeys.map(k => `'${k}': DestinyDefinition<unknown>;`).join('\n'),
    "'DestinyInventoryItemLiteDefinition': DestinyDefinition<DestinyInventoryItemDefinition> & { hash: never } ;",
    '}'
  ].join('\n');

  const languageType = `export type ManifestLanguage = ${languageList
    .map(l => `'${l}'`)
    .join(' | ')}`;

  writeOutFile(
    path.join('./src', typesFile),
    '.ts',
    [generateHeader(doc), imports.join('\n'), allManifestComponentsType, languageType].join('\n\n')
  );

  async function getManifest(retry: number = 0): Promise<any> {
    try {
      // @ts-ignore
      const data = await fetch('https://www.bungie.net/Platform/Destiny2/Manifest/').then(res =>
        res.json()
      );
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
