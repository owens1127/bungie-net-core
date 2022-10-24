/**
 * Represents an error requesting access and refresh tokens from the bungie API
 */
export class TokenRequestError extends Error {
    constructor(message, response) {
        super(message);
        this.response = response;
        this.name = 'BungieAPIError'
    }

}