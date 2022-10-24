/**
 * Represents an error sending a request to the Bungie API
 */
export class BungieAPIError extends TypeError {
    /**
     * @param {import('bungie-api-typedef/endpoints').ServerResponse} response
     */
    constructor(response) {
        super(response.Message);
        this.name = 'BungieAPIError'
        this.ErrorCode = response.ErrorCode;
        this.ErrorStatus = response.ErrorStatus;
        this.MessageData = response.MessageData;
        this.ThrottleSeconds = response.ThrottleSeconds;
    }

}
