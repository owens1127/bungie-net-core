"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDestinyManifestSlice = getDestinyManifestSlice;
var _ = require("./");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function getDestinyManifestSlice(_x) {
  return _getDestinyManifestSlice.apply(this, arguments);
}
function _getDestinyManifestSlice() {
  _getDestinyManifestSlice = _asyncToGenerator(function* (params) {
    const downloadedTables = yield Promise.all(params.tableNames.map(function () {
      var _ref = _asyncToGenerator(function* (tableName) {
        const tableContent = yield (0, _.getDestinyManifestComponent)({
          destinyManifest: params.destinyManifest,
          tableName,
          language: params.language
        });
        return {
          tableName,
          tableContent
        };
      });
      return function (_x2) {
        return _ref.apply(this, arguments);
      };
    }()));
    const manifestSlice = {};
    for (const downloadedTable of downloadedTables) {
      manifestSlice[downloadedTable.tableName] = downloadedTable.tableContent;
    }
    return manifestSlice;
  });
  return _getDestinyManifestSlice.apply(this, arguments);
}