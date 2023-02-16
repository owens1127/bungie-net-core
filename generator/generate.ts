/**
 * This is a custom, hand-rolled generator for TS typings for the Bungie.net API.
 * The script is a modifed version of the 'bungie-api-ts' script used for DIM, {@link https://github.com/DestinyItemManager/bungie-api-ts/}
 */

import fs from 'fs';
import _ from 'underscore';
import { OpenAPIObject, PathItemObject } from 'openapi3-ts';
import { DefInfo } from './util.js';

import { generateIndices } from './generate-indices.js';
import { generateTypeDefinition } from './generate-classes.js';
import { generateManifestUtils } from './generate-manifest.js';
import { generateServiceDefinition } from './generate-endpoints.js';
import { generatePackageJson } from './generate-package-json.js';
import { computeTypeMaps } from './type-index.js';
import {generateClient} from "./generate-client.js";

// allow some async operations
(async () => {
  const doc = JSON.parse(fs.readFileSync('./api-src/openapi.json').toString()) as OpenAPIObject;

  // Pairs of [request path, path service description]
  const pathPairs = _.pairs(doc.paths) as [string, PathItemObject][];

  // Grouped by "tag" which says which service (destiny, groups, forums, etc)
  const pathPairsByTag = _.groupBy(pathPairs, ([path, desc]) => {
    return (desc.get || desc.post)!.tags![0];
  });
  pathPairsByTag['Core'] = pathPairsByTag[''];
  delete pathPairsByTag[''];

  generateClient(Object.keys(pathPairsByTag));


  const { componentsByFile, componentByDef, componentsByTag, manifestComponents }
      = computeTypeMaps(pathPairsByTag, doc);

  componentsByFile.forEach((component, file) => {
    generateTypeDefinition(file, component, doc, componentByDef);
  });

  await generateManifestUtils(manifestComponents, componentByDef, doc);

  _.each(pathPairsByTag, (paths, tag) => {
    generateServiceDefinition(tag, paths, doc, componentByDef);
  });

  generateIndices(componentsByTag, doc, componentsByFile);

  generatePackageJson();
})();
