import fetch from 'node-fetch';
import {BungieAPIError} from './errors/BungieAPIError';
import {HttpClient, HttpClientConfig} from "bungie-api-ts/http";
import {NotConfiguredError} from "./errors/NotConfiguredError";
import {credentials} from "./credentials";
import {BungieNetTokens} from "./tokens";

const DELAY = 100
let _lastCall = 0;


export const rateLimitedRequest: HttpClient = (config: HttpClientConfig): Promise<any> => {
    return _request(config);
}

/**
 * Requires the user to bind the authorization tokens to authorizedRateLimitedRequest
 * @this {BungieNetTokens}
 */
export const authorizedRateLimitedRequest: HttpClient = (config: HttpClientConfig): Promise<any> => {
    return _request(config, this);
}

type RequestInit = {
    method: string
    body: string | null
    headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': string
        'Authorization'?: string
    }
}

function _request(config: HttpClientConfig, auth?: BungieNetTokens): Promise<any> {
    if (!credentials.BUNGIE_CLIENT_ID) throw new NotConfiguredError();
    const time = Date.now();
    let wait = 0;
    if (time - _lastCall < DELAY) {
        wait = DELAY - (time - _lastCall);
    }
    _lastCall = time + wait;
    const params = config.params ? Object.keys(config.params).map(key => {
        return (config.params[key] !== undefined) ? key + '=' + config.params[key] : '';
    }).join('&') : null;
    // @ts-ignore
    return new Promise((resolve) => {
        setTimeout(() => {
            const start = Date.now()
            const url = config.url + (params ? '?' + params : '')
            let init: RequestInit = {
                method: config.method,
                body: config.body ? JSON.stringify(config.body) : null,
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-KEY': credentials.BUNGIE_API_KEY
                }
            }
            if (auth) {
                init.headers['Authorization'] = auth.accessToken.value
            }
            resolve(fetch(url, init).then((response) => {
                console.log({
                    method: config.method,
                    url,
                    status: response.status,
                    response_time: Date.now() - start
                })
                return response.json();
            })
                .then((res) => {
                    // @ts-ignore
                    if (res.ErrorCode !== 1) {
                        // @ts-ignore
                        return Promise.reject(new BungieAPIError(res));
                    } else {
                        return res;
                    }
                }));
        }, wait);
    });
}
