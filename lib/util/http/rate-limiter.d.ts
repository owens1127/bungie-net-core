import { BungieNetResponse } from '../../interfaces/server-response';
export type FetchConfig = {
    url: string;
    method: string;
    params?: {
        [key: string]: any;
    };
    body?: any;
};
export declare function rateLimitedRequest<T>(accessToken: string | undefined, config: FetchConfig): Promise<BungieNetResponse<T>>;
export declare function manifestRequest(config: FetchConfig): Promise<any>;
