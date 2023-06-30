export class TokenRequestError extends Error {
  readonly response: any;
  constructor(message: string, response: any) {
    super(message);
    this.response = response;
    this.name = 'BungieTokenRequestError';
  }
}
