

export class BungieAPIError extends TypeError {
  constructor(response) {
    super(response.Message);
    this.name = 'BungieAPIError';
    this.ErrorCode = response.ErrorCode;
    this.ErrorStatus = response.ErrorStatus;
    this.MessageData = response.MessageData;
    this.ThrottleSeconds = response.ThrottleSeconds;
  }
}