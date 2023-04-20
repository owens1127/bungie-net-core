"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllDestinyManifestComponents = getAllDestinyManifestComponents;
var _rateLimiter = require("../util/http/rate-limiter");
function getAllDestinyManifestComponents(params) {
  return (0, _rateLimiter.manifestRequest)({
    method: 'GET',
    url: 'https://www.bungie.net' + params.destinyManifest.jsonWorldContentPaths[params.language]
  });
}