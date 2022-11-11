import { BungieNetResponse } from "./server-response.js";
/**
 * @typedef {Object} FetchConfig
 * @property {string} url
 * @property {string} method
 * @property {Object?} params
 * @property {Object?} body
 */
export declare type FetchConfig = {
    url: string;
    method: string;
    params?: {};
    body?: {};
};
export declare function rateLimitedRequest(access_token: string | undefined, config: FetchConfig): Promise<BungieNetResponse<any>>;
export declare function manifestRequest(config: FetchConfig): Promise<any>;
