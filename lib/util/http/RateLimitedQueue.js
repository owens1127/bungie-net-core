"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RateLimitedQueue = void 0;
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
class RateLimitedQueue {
  constructor(rateLimit) {
    _defineProperty(this, "queue", void 0);
    _defineProperty(this, "rateLimit", void 0);
    _defineProperty(this, "size", void 0);
    _defineProperty(this, "timeout", void 0);
    this.rateLimit = rateLimit;
    this.queue = [];
    this.size = 0;
    this.timeout = 0;
  }
  add(item) {
    var _this = this;
    return _asyncToGenerator(function* () {
      _this.queue.push(item);
      _this.size++;
      yield new Promise(resolve => setTimeout(resolve, _this.rateLimit * _this.size + _this.timeout));
      _this.process();
    })();
  }
  pop() {
    var _this$queue$shift;
    return (_this$queue$shift = this.queue.shift()) !== null && _this$queue$shift !== void 0 ? _this$queue$shift : null;
  }
  process() {
    var _this$pop;
    (_this$pop = this.pop()) === null || _this$pop === void 0 ? void 0 : _this$pop.execute().then(timeout => {
      if (typeof timeout === 'number') this.timeout = timeout;
      this.size--;
    });
  }
}
exports.RateLimitedQueue = RateLimitedQueue;