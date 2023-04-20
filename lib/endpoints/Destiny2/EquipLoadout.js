"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.equipLoadout = equipLoadout;
var _rateLimiter = require("../../util/http/rate-limiter");
var _BungieAPIError = require("../../errors/BungieAPIError");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function equipLoadout(_x, _x2) {
  return _equipLoadout.apply(this, arguments);
}
function _equipLoadout() {
  _equipLoadout = _asyncToGenerator(function* (body) {
    var _access_token;
    const token = (_access_token = this === null || this === void 0 ? void 0 : this.access_token) !== null && _access_token !== void 0 ? _access_token : undefined;
    try {
      return yield (0, _rateLimiter.rateLimitedRequest)(token, {
        method: 'POST',
        url: 'https://www.bungie.net/Platform/Destiny2/Actions/Loadouts/EquipLoadout/',
        body
      });
    } catch (err) {
      if (err instanceof _BungieAPIError.BungieAPIError) err.stack = new Error().stack;
      throw err;
    }
  });
  return _equipLoadout.apply(this, arguments);
}