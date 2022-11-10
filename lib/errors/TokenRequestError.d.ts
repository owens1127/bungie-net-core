/**
 * Represents an error requesting access and refresh tokens from the bungie API
 */
import { TokenResponse } from "../util/tokens";
export declare class TokenRequestError extends Error {
    private response;
    constructor(message: string, response: TokenResponse);
}
