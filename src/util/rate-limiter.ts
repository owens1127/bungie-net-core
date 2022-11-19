import { NotConfiguredError } from '../errors/NotConfiguredError.js';
import { __credentials__ } from './credentials.js'
import { BungieAPIError } from '../errors/BungieAPIError.js';
import { BungieNetResponse } from './server-response.js';
import fetch from 'node-fetch';
import { PlatformErrorCodes } from '../schemas/index.js';

// rumored throttle seconds
const DELAY = (10 * 1000) / 250;
let _lastCall = 0;

/**
 * @typedef {Object} FetchConfig
 * @property {string} url
 * @property {string} method
 * @property {Object?} params
 * @property {Object?} body
 */

export type FetchConfig = {
    url: string;
    method: string,
    params?: {},
    body?: {},
}

export function rateLimitedRequest<T>(access_token: string | undefined,
    config: FetchConfig): Promise<BungieNetResponse<T>> {
    if (!__credentials__.BUNGIE_CLIENT_ID) throw new NotConfiguredError();
    const time = Date.now();
    let wait = 0;
    if (time - _lastCall < DELAY) {
        wait = DELAY - (time - _lastCall);
    }
    _lastCall = time + wait;
    const params = equalsParams(config);
    return new Promise((resolve) => {
        setTimeout(() => {
            const start = Date.now()
            const url = config.url + (params ? '?' + params.join('&') : '')
            let init = {
                method: config.method,
                body: config.body ? JSON.stringify(config.body) : null,
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-KEY': __credentials__.BUNGIE_API_KEY
                }
            }
            if (access_token) {
                init.headers['Authorization'] = 'Bearer ' + access_token;
            }
            resolve(fetch(url, init).then((response) => {
                return response.json() as Promise<BungieNetResponse<T>>;
            })
                .then((res: BungieNetResponse<T>) => {
                    // idk if this is the best way to do this
                    if (res.ThrottleSeconds) wait += 1000 * res.ThrottleSeconds;
                    res.ResponseTime = Date.now() - start;
                    if (res.ErrorCode !== PlatformErrorCodes.Success) throw new BungieAPIError<T>(res);
                    else return res;
                }));
        }, wait);
    });
}

export function manifestRequest(config: FetchConfig): Promise<any> {
    if (!__credentials__.BUNGIE_CLIENT_ID) throw new NotConfiguredError();
    const time = Date.now();
    let wait = 0;
    if (time - _lastCall < DELAY) {
        wait = DELAY - (time - _lastCall);
    }
    _lastCall = time + wait;
    const params = equalsParams(config);
    return new Promise((resolve) => {
        setTimeout(() => {
            const start = Date.now()
            const url = config.url + (params ? '?' + params.join('&') : '')
            let init = {
                method: config.method,
                body: config.body ? JSON.stringify(config.body) : null,
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-KEY': __credentials__.BUNGIE_API_KEY
                }
            }
            resolve(fetch(url, init).then((response) => {
                return response.json();
            }));
        }, wait);
    });
}

function equalsParams(config: FetchConfig): string[] | null {
    return !!config.params ? Object.keys(config.params)
        .filter(key => {
            return (key in config.params!)
                && config.params![key] !== undefined
                && config.params![key] !== null
        }).map(key => {
            return key + '=' + config.params![key];
        }) : null;
}