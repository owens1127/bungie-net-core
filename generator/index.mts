/**
 * This is a custom, hand-rolled generator for TS typings for the Bungie.net API.
 * The script is is based on the idea of bungie-api-ts, {@link https://github.com/DestinyItemManager/bungie-api-ts/}
 */

import fs from 'fs';
import _ from 'underscore';
import { OpenAPIObject, PathItemObject } from 'openapi3-ts';
import { createTree } from './generate-tree.mjs';
import { generateComponentFile } from './generate-component.mjs';

(async () => {
  const doc = JSON.parse(
    fs.readFileSync('./api-src/openapi.json').toString()
  ) as OpenAPIObject;

  // Pairs of [request path, path service description]
  const paths = _.pairs(doc.paths) as [string, PathItemObject][];

  const componentMap = createTree(paths, doc);

  const definitionsByFile = _.groupBy(
    Array.from(componentMap.values()),
    def => def.module.exportTo ?? ''
  );
  delete definitionsByFile[''];

  _.forEach(definitionsByFile, (definitions, file) => {
    generateComponentFile(file, definitions, doc, componentMap);
  });

  // await generateManifestUtils(manifestComponents, componentByDef, doc);

  // _.each(pathPairsByTag, (paths, tag) => {
  //   generateServiceDefinition(tag, paths, doc, componentByDef);
  // });

  // generateIndices(componentsByTag, doc, componentsByFile);

  // const packagePath = './package.json';
  // let packageJson = JSON.parse(fs.readFileSync(packagePath).toString());
  // const exports = {
  //   '.': './lib/index.js',
  //   './models': './lib/models/index.js',
  //   './manifest': './lib/manifest/index.js',
  //   './auth': './lib/auth/index.js',
  //   './api': './lib/api.js',
  //   ...Object.fromEntries(
  //     Object.keys(componentsByTag)
  //       .sort()
  //       .map(tag => [`./endpoints/${tag}`, `./lib/endpoints/${tag}/index.js`])
  //   )
  // };

  // writeOutFile(
  //   packagePath,
  //   JSON.stringify({ ...packageJson, exports }, null, 2)
  // );
})();
