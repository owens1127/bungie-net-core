function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

export class BungieAPIError extends TypeError {
  constructor(response) {
    super(response.Message);
    _defineProperty(this, "ErrorCode", void 0);
    _defineProperty(this, "ErrorStatus", void 0);
    _defineProperty(this, "MessageData", void 0);
    _defineProperty(this, "ThrottleSeconds", void 0);
    this.name = 'BungieAPIError';
    this.ErrorCode = response.ErrorCode;
    this.ErrorStatus = response.ErrorStatus;
    this.MessageData = response.MessageData;
    this.ThrottleSeconds = response.ThrottleSeconds;
  }
}