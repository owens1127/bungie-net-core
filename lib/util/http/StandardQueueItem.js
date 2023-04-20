"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StandardQueueItem = void 0;
var _BungieAPIError = require("../../errors/BungieAPIError");
var _schemas = require("../../schemas");
var _AQueueItem = require("./AQueueItem");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const timeoutCodes = [_schemas.PlatformErrorCodes.DestinyDirectBabelClientTimeout];
class StandardQueueItem extends _AQueueItem.AQueueItem {
  constructor(url, init, resolve, reject) {
    super(url, init);
    _defineProperty(this, "resolve", void 0);
    _defineProperty(this, "reject", void 0);
    this.resolve = resolve;
    this.reject = reject;
  }
  execute(retry) {
    var _this = this;
    return _asyncToGenerator(function* () {
      const start = Date.now();
      let res;
      try {
        res = yield fetch(_this.url, _this.init).then(response => response.json());
      } catch (e) {
        _this.reject(e);
        return 0;
      }
      res.ResponseTime = Date.now() - start;
      if (res.ErrorCode === _schemas.PlatformErrorCodes.Success) {
        _this.resolve(res);
      } else if (!retry && timeoutCodes.includes(res.ErrorCode)) {
        return _this.execute(true);
      } else {
        _this.reject(new _BungieAPIError.BungieAPIError(res));
      }
      return res.ThrottleSeconds * 1000;
    })();
  }
}
exports.StandardQueueItem = StandardQueueItem;