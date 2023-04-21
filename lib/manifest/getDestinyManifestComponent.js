"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDestinyManifestComponent = getDestinyManifestComponent;
var _rateLimiter = require("../util/http/rate-limiter");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function getDestinyManifestComponent(_x) {
  return _getDestinyManifestComponent.apply(this, arguments);
}
function _getDestinyManifestComponent() {
  _getDestinyManifestComponent = _asyncToGenerator(function* (params) {
    const r = {
      method: 'GET',
      url: 'https://www.bungie.net' + params.destinyManifest.jsonWorldComponentContentPaths[params.language][params.tableName]
    };
    try {
      return yield (0, _rateLimiter.manifestRequest)(r);
    } catch (e) {
      r.url += '?retry';
      try {
        return yield (0, _rateLimiter.manifestRequest)(r);
      } catch (_unused) {
        throw e;
      }
    }
  });
  return _getDestinyManifestComponent.apply(this, arguments);
}