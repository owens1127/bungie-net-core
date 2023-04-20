"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllDestinyManifestComponents = void 0;
var rate_limiter_1 = require("../util/http/rate-limiter");
/** fetches the enormous combined JSON manifest file */
function getAllDestinyManifestComponents(params) {
    return (0, rate_limiter_1.manifestRequest)({
        method: 'GET',
        url: 'https://www.bungie.net' + params.destinyManifest.jsonWorldContentPaths[params.language]
    });
}
exports.getAllDestinyManifestComponents = getAllDestinyManifestComponents;
