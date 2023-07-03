/**
 * This is a custom, hand-rolled generator for TS typings for the Bungie.net API.
 * The script is a modifed version of the 'bungie-api-ts' script used for DIM, {@link https://github.com/DestinyItemManager/bungie-api-ts/}
 */

import fs from 'fs';
import _ from 'underscore';
import { OpenAPIObject, PathItemObject } from 'openapi3-ts';

import { generateIndices } from './generate-indices.mjs';
import { generateTypeDefinition } from './generate-classes.mjs';
import { generateManifestUtils } from './generate-manifest.mjs';
import { generateServiceDefinition } from './generate-endpoints.mjs';
import { computeTypeMaps } from './generate-tree.mjs';
import { writeOutFile } from './generate-common.mjs';

(async () => {
  const doc = JSON.parse(
    fs.readFileSync('./api-src/openapi.json').toString()
  ) as OpenAPIObject;

  // Pairs of [request path, path service description]
  const pathPairs = _.pairs(doc.paths) as [string, PathItemObject][];

  // Grouped by "tag" which says which service (destiny, groups, forums, etc)
  const pathPairsByTag = _.groupBy(pathPairs, ([path, desc]) => {
    return (desc.get || desc.post)!.tags![0];
  });
  pathPairsByTag['Core'] = pathPairsByTag[''];
  delete pathPairsByTag[''];

  const {
    componentsByFile,
    componentByDef,
    componentsByTag,
    manifestComponents
  } = computeTypeMaps(pathPairsByTag, doc);

  componentsByFile.forEach((component, file) => {
    generateTypeDefinition(file, component, doc, componentByDef);
  });

  await generateManifestUtils(manifestComponents, componentByDef, doc);

  _.each(pathPairsByTag, (paths, tag) => {
    generateServiceDefinition(tag, paths, doc, componentByDef);
  });

  generateIndices(componentsByTag, doc, componentsByFile);

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
