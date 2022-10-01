import fetch from 'node-fetch';
import { getItem } from './bungie-net-config.js';
import { DestinyAPIClient } from './structures/Client.js';
import { BungieAPIError } from './errors/BungieAPIError.js';

const API_KEY = () => getItem('BUNGIE_API_KEY');

const DELAY = 100
let lastCall = 0;

/**
 * @type import('bungie-api-typedef/http.d.ts').HttpClient
 * @param {import('bungie-api-typedef/http.d.ts').HttpClientConfig} config
 * @this DestinyAPIClient
 * @return {Promise<any>}
 */
export async function rateLimitedRequest(config) {
    const time = Date.now();
    let wait = 0;
    if (time - lastCall < DELAY) {
        wait = DELAY - (time - lastCall);
    }
    lastCall = time + wait;
    const params = config.params ? Object.keys(config.params).map(key => {
        return (config.params[key] !== undefined) ? key + '=' + config.params[key] : '';
    }).join('&') : null;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const start = Date.now()
            const url = config.url + (params ? '?' + params : '')
            resolve(fetch(url, {
                method: config.method,
                body: config.body ? JSON.stringify(config.body) : null,
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-KEY': API_KEY(),
                    'Authorization': 'Bearer ' + this.tokens.accessToken.value
                }
            }).then((response) => {
                console.log({
                    method: config.method,
                    url,
                    status: response.status,
                    response_time: Date.now() - start
                })
                return response.json()
            })
                .then(res => {
                    if (res.ErrorCode !== 1) {
                        return Promise.reject(new BungieAPIError(res));
                    } else {
                        return res;
                    }
                }));
        }, wait);
    });
}
