const NotConfiguredError = require('./errors/NotConfiguredError.js');
const credentials = require('./credentials.js');
const BungieAPIError = require('./errors/BungieAPIError.js');

const DELAY = 100;
let _lastCall = 0;

/**
 * @typedef {Object} FetchConfig
 * @property {string} url
 * @property {string} method
 * @property {Object?} params
 * @property {Object?} body
 */

/**
 *
 * @param {FetchConfig} config
 * @param {BungieNetTokens?} access_token
 */
function rateLimitedRequest(config, access_token) {
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
    return new Promise((resolve) => {
        setTimeout(() => {
            const start = Date.now()
            const url = config.url + (params ? '?' + params : '')
            let init = {
                method: config.method,
                body: config.body ? JSON.stringify(config.body) : null,
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-KEY': credentials.BUNGIE_API_KEY
                }
            }
            if (access_token) {
                init.headers['Authorization'] = access_token;
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
                    if (res.ErrorCode !== 1) {
                        return Promise.reject(new BungieAPIError(res));
                    } else {
                        return res;
                    }
                }));
        }, wait);
    });
}
module.exports = rateLimitedRequest;
