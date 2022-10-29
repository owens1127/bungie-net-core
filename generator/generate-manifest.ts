import { DefInfo } from './util';
import { OpenAPIObject } from 'openapi3-ts';
import fetch from 'node-fetch';
import { docComment, indent, writeOutFile } from './generate-common.js';

const manifestMetadataPromise = manifestMetaResponse(false);

// @ts-ignore
async function manifestMetaResponse(retry: boolean) {
  try {
    // @ts-ignore
    let manifestMeta: { Response: Object } = await fetch('https://www.bungie.net/Platform/Destiny2/Manifest/').then(
        (res) => res.json()
    );
    if (!manifestMeta?.Response) {
      if (retry) {
        console.error(new Error('Failed to download Manifest'));
        process.exit(1);
      }
      // try again
      return await manifestMetaResponse(true);
    }
    return manifestMeta.Response;
  } catch (e) {
    console.error(e);
    process.exit(1);
  }

}

export async function generateManifestUtils(components: DefInfo[], componentByDef: { [def: string]: DefInfo }, doc: OpenAPIObject) {
  await generateIndex(components, componentByDef, doc);
  generateManifestFunctions();
}

async function generateIndex(components: DefInfo[], componentByDef: { [def: string]: DefInfo }, doc: OpenAPIObject) {
  const filename = `lib/manifest/index.js`;
  let manifestMetadata = await manifestMetadataPromise;

  // defs we have documentation for. some stuff in manifest doesn't have type definitions. idk why.
  const jsonKeys = Object.keys(manifestMetadata.jsonWorldComponentContentPaths.en)
  // exclude some tables from the definitionmanifest table because we don't have the format for them
  const defsToInclude = components.filter(
      (def) => jsonKeys.includes(def.typeName)
  );

  const inlineImports = new Map<string,string>();
  const imports: string[] = [];
  defsToInclude.forEach(def => {
    imports.push(`const ${def.typeName} = require('../${def.filename}');`);
    inlineImports.set(def.typeName, `import('../${def.filename}')`);
  })

  const componentTypes = generateComponentTypes(defsToInclude, inlineImports);

  const tables = `const TABLES = {\n${indent(defsToInclude.map((def) => {
    return def.typeName
  }).join(',\n'), 1)}\n}
exports.TABLES = TABLES`;

  const languageList = Object.keys(manifestMetadata.jsonWorldComponentContentPaths).sort();

  const languages = `const LANGUAGES = {
${languageList.map((l) => `  '${l}': '${l}',`).join('\n')}
};
exports.LANGUAGES = LANGUAGES;

${docComment('', [`@typedef {${languageList.map(l => {return `'${l}'`}).join(' | ')}} DestinyManifestLanguage`])}
`;
  const exports = ['GetAllDestinyManifestComponents', 'GetDestinyManifestComponent', 'GetDestinyManifestSlice'].map((f) => {
    return `exports.${f} = require('./${f}.js');`
  }).join('\n');
  const definition =
      [generateManifestHeader(doc), imports.join('\n'), hashDef(), componentTypes, tables, languages, exports].join(
          '\n\n'
      );

  writeOutFile(filename, definition);


}

function generateComponentTypes(defsToInclude: DefInfo[], imports: Map<string, string>) {
  const allComponentInfo = "this describes a big object holding several tables of hash-keyedDestinyDefinitions. This is roughly what you get if you decode the gigantic, single-json manifest blob, but also just what we use here to dole out single-table, typed definitions"
  const allComponentParams = defsToInclude.map((manifestComponent) => `@property {{[key: Hash]: ${imports.get(manifestComponent.typeName)}}} ${manifestComponent.typeName}s`);
  const allComponents = docComment(allComponentInfo, ["@typedef AllDestinyManifestComponents", ...allComponentParams]);
  const destinyManifestComponents = docComment('', [`@typedef {${defsToInclude.map(d => {return `AllDestinyManifestComponents.${d.typeName}s`}).join(' | ')}} DestinyManifestComponents`]);
  const slice = docComment('', [`@typedef {DestinyManifestComponents[]} DestinyManifestComponentSlice`]);
  return [allComponents, destinyManifestComponents, slice].join('\n\n');
}

function generateManifestHeader(doc: OpenAPIObject): string {
  return `/**
 * These definitions and helper fucntions are based off the structure of DestinyManifest
 * in the bungie.net API spec, but are not explicity defined endpoints in the spec.
 */`;
}

function generateManifestFunctions() {
  const importStatement = `const http = require('../rate-limiter')`
  generateGetAllDestinyManifestComponents(importStatement);
  generateGetDestinyManifestComponent(importStatement);
  generateGetDestinyManifestSlice();

}

function generateGetAllDestinyManifestComponents(importStatement: string) {
  const filename = `lib/manifest/GetAllDestinyManifestComponents.js`;

  const comment = docComment('fetches the enormous combined JSON manifest file', [
    `@param {DestinyManifest} destinyManifest`,
    `@param {DestinyManifestLanguage?}`,
    `@returns Promise<AllDestinyManifestComponents>`
  ]);
  const body = `async function getAllDestinyManifestComponents(destinyManifest, language) {
  return http({
    method: 'GET',
    url: 'https://www.bungie.net'+destinyManifest.jsonWorldContentPaths[language],
  });
}
module.exports = getAllDestinyManifestComponents;`

  const definition = [importStatement, hashDef(), comment, body].join('\n');
  writeOutFile(filename, definition);
}

function generateGetDestinyManifestComponent(importStatement: string) {
  const filename = `lib/manifest/GetDestinyManifestComponent.js`;
  const comment = docComment(`this fetches and returns a single table (Component) from the d2 manifest i.e. DestinyInventoryItemDefinition / DestinyObjectiveDefinition / DestinyVendorDefinition / DestinySeasonDefinition / etc.`,
      [
          `@template Component`,
          `@param {DestinyManifest} destinyManifest`,
          `@param {Component} table The table to access. Import the TABLES enum to help.`,
          `@param {DestinyManifestLanguage} language`,
          `@return {Promise<{[key: Hash]: Component}>}`
  ])
  const body = `async function getDestinyManifestComponent(destinyManifest, table, language)  {
  ${docComment('', ['@type FetchConfig'])}
  const r = {
    method: 'GET',
    url:
        'https://www.bungie.net' +
        destinyManifest.jsonWorldComponentContentPaths[language][table.name || table],
  };
  try {
    return await http(r);
  } catch (e) {
    r.url += '?retry';
    try {
      return await http(r);
    } catch {
      throw e;
    }
  }
}
module.exports = getDestinyManifestComponent;`
  const definition = [importStatement, hashDef(), comment, body].join('\n\n');
  writeOutFile(filename, definition);
}

function generateGetDestinyManifestSlice() {
  const importStatement = `const getDestinyManifestComponent = require('./GetDestinyManifestComponent');`
  const filename = `lib/manifest/GetDestinyManifestSlice.js`;
  const comment = docComment(`this returns a similar structure to getAllDestinyManifestComponents (the big manifest json) but only specific components within. it bundles multiple single tables requests, into a single properly typed object with keys named after manifest components`,
      [
        `@template Components`,
        `@param {DestinyManifest} destinyManifest`,
        `@param {Components} tables The tables to access. Import the TABLES enum to help.`,
        `@param {DestinyManifestLanguage} language`,
        `@return {Promise<AllDestinyManifestComponents>}`
      ])
  const body = `async function getDestinyManifestSlice(destinyManifest, tables, language) {
  const downloadedTables = await Promise.all(
    tables.map(async (table) => {
      const tableContent = await getDestinyManifestComponent(destinyManifest, table.name || table, language);
      return { tableName: table.name || table, tableContent };
    })
  );
  const manifestSlice = {};
  for (const downloadedTable of downloadedTables) {
    manifestSlice[downloadedTable.tableName] = downloadedTable.tableContent;
  }
  return manifestSlice;
}
module.exports = getDestinyManifestSlice;`;
  const definition = [importStatement, hashDef(), comment, body].join('\n\n');
  writeOutFile(filename, definition);
}

function hashDef(): string {
  return docComment('Represents the look-up key for the manifest', ["@typedef {number} Hash"]);
}