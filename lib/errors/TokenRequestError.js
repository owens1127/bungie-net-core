

export class TokenRequestError extends Error {
  constructor(message, response) {
    super(message);
    this.response = response;
    this.name = 'BungieAPIError';
  }
}