"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Schema = exports.Manifest = exports.Tokens = exports.BungieClient = exports.generateOAuthURL = void 0;
var NotConfiguredError_1 = require("./errors/NotConfiguredError");
var credentials_1 = require("./util/credentials");
var TokensImport = __importStar(require("./util/tokens"));
var ManifestImport = __importStar(require("./manifest/index"));
var SchemaImport = __importStar(require("./schemas/index"));
/**
 * Creates an authentication URL for users to click
 * @see {@link https://github.com/Bungie-net/api/wiki/OAuth-Documentation}
 */
function generateOAuthURL(options) {
    if (!(0, credentials_1._credentials)().BUNGIE_CLIENT_ID)
        throw new NotConfiguredError_1.NotConfiguredError();
    var stateString = (options === null || options === void 0 ? void 0 : options.state) ? "&state=".concat(options.state) : '';
    var redirectString = (options === null || options === void 0 ? void 0 : options.redirectURL) ? "&redirect_uri=".concat(options.redirectURL) : '';
    return ("https://www.bungie.net/en/OAuth/Authorize?client_id=".concat((0, credentials_1._credentials)().BUNGIE_CLIENT_ID, "&response_type=code") +
        redirectString +
        stateString);
}
exports.generateOAuthURL = generateOAuthURL;
var client_1 = require("./util/client");
Object.defineProperty(exports, "BungieClient", { enumerable: true, get: function () { return client_1.BungieClient; } });
exports.Tokens = TokensImport;
exports.Manifest = ManifestImport;
exports.Schema = SchemaImport;
