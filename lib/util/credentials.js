"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._credentials = void 0;
let _credentials = () => {
  var _process$env$BUNGIE_A, _process$env$BUNGIE_C, _process$env$BUNGIE_C2;
  return {
    BUNGIE_API_KEY: (_process$env$BUNGIE_A = process.env.BUNGIE_API_KEY) !== null && _process$env$BUNGIE_A !== void 0 ? _process$env$BUNGIE_A : '',
    BUNGIE_CLIENT_ID: (_process$env$BUNGIE_C = process.env.BUNGIE_CLIENT_ID) !== null && _process$env$BUNGIE_C !== void 0 ? _process$env$BUNGIE_C : '',
    BUNGIE_CLIENT_SECRET: (_process$env$BUNGIE_C2 = process.env.BUNGIE_CLIENT_SECRET) !== null && _process$env$BUNGIE_C2 !== void 0 ? _process$env$BUNGIE_C2 : ''
  };
};
exports._credentials = _credentials;