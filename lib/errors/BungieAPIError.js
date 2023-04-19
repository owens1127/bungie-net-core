export class BungieAPIError extends Error {
    DetailedErrorTrace;
    ErrorCode;
    ErrorStatus;
    Message;
    MessageData;
    Response;
    ThrottleSeconds;
    ResponseTime;
    constructor(response) {
        super(response.Message);
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
