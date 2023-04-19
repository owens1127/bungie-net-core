import { BungieNetResponse } from './server-response.js';
export declare type FetchConfig = {
    url: string;
    method: string;
    params?: {
        [key: string]: any;
    };
    body?: any;
};
export declare function rateLimitedRequest<T>(access_token: string | undefined, config: FetchConfig): Promise<BungieNetResponse<T>>;
export declare function manifestRequest(config: FetchConfig): Promise<any>;
