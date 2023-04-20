"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._credentials = void 0;
var _credentials = function () {
    var _a, _b, _c;
    return {
        BUNGIE_API_KEY: (_a = process.env.BUNGIE_API_KEY) !== null && _a !== void 0 ? _a : '',
        BUNGIE_CLIENT_ID: (_b = process.env.BUNGIE_CLIENT_ID) !== null && _b !== void 0 ? _b : '',
        BUNGIE_CLIENT_SECRET: (_c = process.env.BUNGIE_CLIENT_SECRET) !== null && _c !== void 0 ? _c : ''
    };
};
exports._credentials = _credentials;
