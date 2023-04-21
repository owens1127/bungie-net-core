"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAccessTokenFromAuthCode = getAccessTokenFromAuthCode;
exports.getAccessTokenFromRefreshToken = getAccessTokenFromRefreshToken;
var _credentials2 = require("./credentials");
var _TokenRequestError = require("../errors/TokenRequestError");
var _NotConfiguredError = require("../errors/NotConfiguredError");
var _axios = _interopRequireDefault(require("axios"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
const TOKEN_URL = 'https://www.bungie.net/platform/app/oauth/token/';
function getAccessTokenFromAuthCode(_x) {
  return _getAccessTokenFromAuthCode.apply(this, arguments);
}
function _getAccessTokenFromAuthCode() {
  _getAccessTokenFromAuthCode = _asyncToGenerator(function* (code) {
    return fetchTokens(code, 'authorization_code', 'code');
  });
  return _getAccessTokenFromAuthCode.apply(this, arguments);
}
function getAccessTokenFromRefreshToken(_x2) {
  return _getAccessTokenFromRefreshToken.apply(this, arguments);
}
function _getAccessTokenFromRefreshToken() {
  _getAccessTokenFromRefreshToken = _asyncToGenerator(function* (refreshToken) {
    return fetchTokens(refreshToken, 'refresh_token', 'refresh_token');
  });
  return _getAccessTokenFromRefreshToken.apply(this, arguments);
}
function fetchTokens(_x3, _x4, _x5) {
  return _fetchTokens.apply(this, arguments);
}
function _fetchTokens() {
  _fetchTokens = _asyncToGenerator(function* (code, type, key) {
    const clientId = (0, _credentials2._credentials)().BUNGIE_CLIENT_ID;
    const secret = (0, _credentials2._credentials)().BUNGIE_CLIENT_SECRET;
    let data;
    let headers;
    if (secret && clientId) {
      data = new URLSearchParams({
        grant_type: type,
        [key]: code,
        client_id: clientId,
        client_secret: secret
      });
      headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
      };
    } else throw new _NotConfiguredError.NotConfiguredError();
    return (0, _axios.default)(TOKEN_URL, {
      method: 'POST',
      data,
      headers
    }).then(({
      data: res
    }) => handleTokenResponse(res));
  });
  return _fetchTokens.apply(this, arguments);
}
function handleTokenResponse(response) {
  const time = Date.now();
  if (response !== null && response !== void 0 && response.access_token) {
    const access = {
      value: response.access_token,
      type: 'access',
      created: time,
      expires: time + response.expires_in * 1000
    };
    const refresh = {
      value: response.refresh_token,
      type: 'refresh',
      created: time,
      expires: time + response.refresh_expires_in * 1000
    };
    return {
      bungieMembershipId: response.membership_id,
      access,
      refresh
    };
  } else {
    throw new _TokenRequestError.TokenRequestError('No data or access token in response', response);
  }
}