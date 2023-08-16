/**
 * This is a custom, hand-rolled generator for TS typings for the Bungie.net API.
 * The script is is based on the idea of bungie-api-ts, {@link https://github.com/DestinyItemManager/bungie-api-ts/}
 */

import fs from 'fs';
import _ from 'underscore';
import { OpenAPIObject, PathItemObject } from 'openapi3-ts';
import { createTree } from './generate-tree.mjs';
import { generateComponentFile } from './generate-component.mjs';
import { generateManifestTypes } from './generate-manifest-types.mjs';
import path from 'path';
import { generateEndpointFile } from './generate-endpoints.mjs';

(async () => {
  const doc = JSON.parse(
    fs.readFileSync('./api-src/openapi.json').toString()
  ) as OpenAPIObject;

  // Pairs of [request path, path service description]
  const paths = _.pairs(doc.paths) as [string, PathItemObject][];

  const componentMap = createTree(paths, doc);

  const definitionsByFile = _.groupBy(Array.from(componentMap.values()), def =>
    def.module.type === 'normal' || def.module.type === 'genericParams'
      ? def.module.fileName
      : ''
  );
  delete definitionsByFile[''];

  _.forEach(definitionsByFile, (definitions, file) => {
    generateComponentFile(file, definitions, doc, componentMap);
  });

  _.forEach(paths, path => {
    generateEndpointFile(path, doc, componentMap);
  });

  await generateManifestTypes(
    Array.from(componentMap.values()).filter(v => v.data.manifest),
    doc
  );
})();
