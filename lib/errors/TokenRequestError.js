
/**
 * Represents an error requesting access and refresh tokens from the bungie API
 */
class TokenRequestError extends Error {
    /**
     *
     * @param {string} message
     * @param {TokenResponse} response
     */
    constructor(message, response) {
        super(message);
        /** @type TokenResponse */
        this.response = response;
        /** @type string */
        this.name = 'BungieAPIError'
    }

}
module.exports = TokenRequestError;