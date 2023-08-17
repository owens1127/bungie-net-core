/**
 * This is a custom, hand-rolled generator for TS typings for the Bungie.net API.
 * The script is is based on the idea of bungie-api-ts, {@link https://github.com/DestinyItemManager/bungie-api-ts/}
 */

import fs from 'fs';
import _ from 'underscore';
import { OpenAPIObject, PathItemObject } from 'openapi3-ts';
import { generateComponentFile, generateSuperIndex } from './generate-component.mjs';
import { generateManifestTypes } from './generate-manifest-types.mjs';
import { generateEndpointFile } from './generate-endpoints.mjs';
import { getTags } from './util.mjs';
import { createTree } from './parse-schema-tree.mjs';

(async () => {
  const doc = JSON.parse(fs.readFileSync('./api-src/openapi.json').toString()) as OpenAPIObject;

  // Pairs of [request path, path service description]
  const paths = _.pairs(doc.paths) as [string, PathItemObject][];

  const componentMap = createTree(paths, doc);

  const definitionsByFile = _.groupBy(Array.from(componentMap.values()), def =>
    def.module.type === 'normal' || def.module.type === 'genericParams' || def.module.type === 'enum'
      ? def.module.fileName
      : ''
  );
  delete definitionsByFile[''];

  generateSuperIndex(definitionsByFile);

  _.forEach(definitionsByFile, (definitions, file) => {
    generateComponentFile(file, definitions, doc, componentMap);
  });

  const pathsByTag = _.groupBy(paths, ([route, path]) => _.first(Array.from(getTags(path)))!);

  _.forEach(pathsByTag, (paths, tag) => generateEndpointFile(tag, paths, doc, componentMap));

  await generateManifestTypes(
    Array.from(componentMap.values()).filter(v => v.data.manifest),
    doc
  );
})();
