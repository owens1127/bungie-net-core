"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BungieAPIError = void 0;
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
class BungieAPIError extends Error {
  constructor(response) {
    super(response.Message);
    _defineProperty(this, "DetailedErrorTrace", void 0);
    _defineProperty(this, "ErrorCode", void 0);
    _defineProperty(this, "ErrorStatus", void 0);
    _defineProperty(this, "Message", void 0);
    _defineProperty(this, "MessageData", void 0);
    _defineProperty(this, "Response", void 0);
    _defineProperty(this, "ThrottleSeconds", void 0);
    _defineProperty(this, "ResponseTime", void 0);
    this.DetailedErrorTrace = response.DetailedErrorTrace;
    this.ErrorCode = response.ErrorCode;
    this.ErrorStatus = response.ErrorStatus;
    this.MessageData = response.MessageData;
    this.Message = response.Message;
    this.MessageData = response.MessageData;
    this.Response = response.Response;
    this.ThrottleSeconds = response.ThrottleSeconds;
    this.ResponseTime = response.ResponseTime;
  }
}
exports.BungieAPIError = BungieAPIError;