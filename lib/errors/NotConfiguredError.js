"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotConfiguredError = void 0;
var _credentials2 = require("../util/credentials");
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
class NotConfiguredError extends Error {
  constructor() {
    super();
    _defineProperty(this, "BUNGIE_API_KEY", void 0);
    _defineProperty(this, "BUNGIE_CLIENT_ID", void 0);
    _defineProperty(this, "BUNGIE_CLIENT_SECRET", void 0);
    const apiKey = (0, _credentials2._credentials)().BUNGIE_API_KEY;
    const clientId = (0, _credentials2._credentials)().BUNGIE_CLIENT_ID;
    const secret = (0, _credentials2._credentials)().BUNGIE_CLIENT_SECRET;
    this.message = `Please configure your API Key, Client ID, and Client Secret as environment variables: 'BUNGIE_API_KEY, BUNGIE_CLIENT_ID, 'BUNGIE_API_KEY, BUNGIE_CLIENT_SECRET`;
    this.BUNGIE_API_KEY = apiKey ? apiKey.substring(0, 5) + '...' : '';
    this.BUNGIE_CLIENT_ID = clientId;
    this.BUNGIE_CLIENT_SECRET = secret ? secret.substring(0, 5) + '...' : '';
  }
}
exports.NotConfiguredError = NotConfiguredError;