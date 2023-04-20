"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ManifestQueueItem = void 0;
var _AQueueItem = require("./AQueueItem");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
class ManifestQueueItem extends _AQueueItem.AQueueItem {
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
      let res;
      try {
        res = yield fetch(_this.url, _this.init).then(response => response.json());
        _this.resolve(res);
      } catch (e) {
        if (!retry) return _this.execute(true);
        _this.reject(e);
      }
    })();
  }
}
exports.ManifestQueueItem = ManifestQueueItem;