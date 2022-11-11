function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

export class TokenRequestError extends Error {
  constructor(message, response) {
    super(message);
    _defineProperty(this, "response", void 0);
    this.response = response;
    this.name = 'BungieAPIError';
  }
}