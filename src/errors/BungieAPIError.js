/**
 * Represents an error sending a request to the Bungie API
 */
class BungieAPIError extends TypeError {

    /** @param {ServerResponsed<any>} response */
    constructor(response) {
        super(response.Message);
        /** @type {string} */
        this.name = 'BungieAPIError';
        /** @type {PlatformErrorCodes} */
        this.ErrorCode = response.ErrorCode;
        /** @type {string} */
        this.ErrorStatus = response.ErrorStatus;
        /** @type {Object.<string, string>} */
        this.MessageData = response.MessageData;
        /** @type {number} */
        this.ThrottleSeconds = response.ThrottleSeconds;
    }

}

module.exports = BungieAPIError;
