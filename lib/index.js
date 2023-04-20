"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "BungieClient", {
  enumerable: true,
  get: function () {
    return _client.BungieClient;
  }
});
exports.Tokens = exports.Schema = exports.Manifest = void 0;
exports.generateOAuthURL = generateOAuthURL;
var _NotConfiguredError = require("./errors/NotConfiguredError");
var _credentials2 = require("./util/credentials");
var TokensImport = _interopRequireWildcard(require("./util/tokens"));
var ManifestImport = _interopRequireWildcard(require("./manifest/index"));
var SchemaImport = _interopRequireWildcard(require("./schemas/index"));
var _client = require("./util/client");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function generateOAuthURL(options) {
  if (!(0, _credentials2._credentials)().BUNGIE_CLIENT_ID) throw new _NotConfiguredError.NotConfiguredError();
  const stateString = options !== null && options !== void 0 && options.state ? `&state=${options.state}` : '';
  const redirectString = options !== null && options !== void 0 && options.redirectURL ? `&redirect_uri=${options.redirectURL}` : '';
  return `https://www.bungie.net/en/OAuth/Authorize?client_id=${(0, _credentials2._credentials)().BUNGIE_CLIENT_ID}&response_type=code` + redirectString + stateString;
}
const Tokens = TokensImport;
exports.Tokens = Tokens;
const Manifest = ManifestImport;
exports.Manifest = Manifest;
const Schema = SchemaImport;
exports.Schema = Schema;