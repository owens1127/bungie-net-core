/**
 * Represents an error requesting access and refresh tokens from the bungie API
 */
import {TokenResponse} from "../util/tokens";

export class TokenRequestError extends Error {
    private response: TokenResponse;
    constructor(message: string, response: TokenResponse) {
        super(message);
        this.response = response;
        this.name = 'BungieAPIError'
    }

}