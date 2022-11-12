import { NotConfiguredError } from '../errors/NotConfiguredError.js';
import { __credentials__ } from './credentials.js';
import { BungieAPIError } from "../errors/BungieAPIError.js";
import fetch from 'node-fetch';
const DELAY = 100;
let _lastCall = 0;

export function rateLimitedRequest(access_token, config) {
  if (!__credentials__.BUNGIE_CLIENT_ID) throw new NotConfiguredError();
  const time = Date.now();
  let wait = 0;
  if (time - _lastCall < DELAY) {
    wait = DELAY - (time - _lastCall);
  }
  _lastCall = time + wait;
  const params = equalsParams(config);
  return new Promise(resolve => {
    setTimeout(() => {
      const start = Date.now();
      const url = config.url + (params ? '?' + params.join('&') : '');
      let init = {
        method: config.method,
        body: config.body ? JSON.stringify(config.body) : null,
        headers: {
          'Content-Type': 'application/json',
          'X-API-KEY': __credentials__.BUNGIE_API_KEY
        }
      };
      if (access_token) {
        init.headers['Authorization'] = 'Bearer ' + access_token;
      }
      resolve(fetch(url, init).then(response => {
        return response.json();
      }).then(res => {
        if (res.ErrorCode !== 1) {
          return Promise.reject(new BungieAPIError(res));
        } else {
          return res;
        }
      }));
    }, wait);
  });
}
export function manifestRequest(config) {
  if (!__credentials__.BUNGIE_CLIENT_ID) throw new NotConfiguredError();
  const time = Date.now();
  let wait = 0;
  if (time - _lastCall < DELAY) {
    wait = DELAY - (time - _lastCall);
  }
  _lastCall = time + wait;
  const params = equalsParams(config);
  return new Promise(resolve => {
    setTimeout(() => {
      const start = Date.now();
      const url = config.url + (params ? '?' + params.join('&') : '');
      let init = {
        method: config.method,
        body: config.body ? JSON.stringify(config.body) : null,
        headers: {
          'Content-Type': 'application/json',
          'X-API-KEY': __credentials__.BUNGIE_API_KEY
        }
      };
      resolve(fetch(url, init).then(response => {
        return response.json();
      }));
    }, wait);
  });
}
function equalsParams(config) {
  return !!config.params ? Object.keys(config.params).filter(key => {
    return key in config.params && config.params[key] !== undefined && config.params[key] !== null;
  }).map(key => {
    return key + '=' + config.params[key];
  }) : null;
}