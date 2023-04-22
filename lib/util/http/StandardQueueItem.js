"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StandardQueueItem = void 0;
var _BungieAPIError = require("../../errors/BungieAPIError");
var _models = require("../../models");
var _AQueueItem = require("./AQueueItem");
var _axios = _interopRequireDefault(require("axios"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const timeoutCodes = [_models.PlatformErrorCodes.DestinyDirectBabelClientTimeout];
class StandardQueueItem extends _AQueueItem.AQueueItem {
  constructor(url, config, resolve, reject) {
    super(url, config);
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
        res = (yield (0, _axios.default)(_this.url, _this.config)).data;
      } catch (e) {
        var _e$response, _e$response$data;
        if ((_e$response = e.response) !== null && _e$response !== void 0 && (_e$response$data = _e$response.data) !== null && _e$response$data !== void 0 && _e$response$data.Message) {
          var _e$response2;
          res = (_e$response2 = e.response) === null || _e$response2 === void 0 ? void 0 : _e$response2.data;
        } else {
          _this.reject(e);
          return 0;
        }
      }
      res.ResponseTime = Date.now() - start;
      if (res.ErrorCode === _models.PlatformErrorCodes.Success) {
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