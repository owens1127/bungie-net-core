function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

export class BungieAPIError extends Error {
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