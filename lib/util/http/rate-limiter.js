import { NotConfiguredError } from '../../errors/NotConfiguredError';
import { _credentials } from '../credentials';
import { RateLimitedQueue } from './RateLimitedQueue';
import { StandardQueueItem } from './StandardQueueItem';
import { ManifestQueueItem } from './ManifestQueueItem';
const basicQueue = new RateLimitedQueue(50);
const transferQueue = new RateLimitedQueue(100);
const socketQueue = new RateLimitedQueue(100);
const manifestQueue = new RateLimitedQueue(100);
export function rateLimitedRequest(accessToken, config) {
    if (!_credentials().BUNGIE_CLIENT_ID || !_credentials().BUNGIE_API_KEY)
        throw new NotConfiguredError();
    const params = queryString(config);
    const url = config.url + (params ? '?' + params.join('&') : '');
    const init = {
        method: config.method,
        body: config.body ? JSON.stringify(config.body) : null,
        headers: {
            'Content-Type': 'application/json',
            'X-API-KEY': _credentials().BUNGIE_API_KEY
        }
    };
    if (accessToken)
        init.headers.Authorization = `Bearer ${accessToken}`;
    return new Promise((resolve, reject) => {
        let queue;
        if (!url.match(/www\.bungie\.net\/Platform\/Destiny2\/Actions\/Items/)) {
            queue = basicQueue;
        }
        else if (transferAction(url)) {
            queue = transferQueue;
        }
        else if (socketAction(url)) {
            queue = socketQueue;
        }
        else {
            queue = basicQueue;
        }
        queue.add(new StandardQueueItem(url, init, resolve, reject));
    });
}
function transferAction(url) {
    return (!!url.match(/www\.bungie\.net\/Platform\/Destiny2\/Actions\/Items\/TransferItem/) ||
        !!url.match(/www\.bungie\.net\/Platform\/Destiny2\/Actions\/Items\/PullFromPostmaster/) ||
        !!url.match(/www\.bungie\.net\/Platform\/Destiny2\/Actions\/Items\/EquipItem/) ||
        !!url.match(/www\.bungie\.net\/Platform\/Destiny2\/Actions\/Items\/EquipItems/));
}
function socketAction(url) {
    return (!!url.match(/www\.bungie\.net\/Platform\/Destiny2\/Actions\/Items\/InsertSocketPlugFree/) ||
        !!url.match(/www\.bungie\.net\/Platform\/Destiny2\/Actions\/Items\/InsertSocketPlug/));
}
export function manifestRequest(config) {
    if (!_credentials().BUNGIE_CLIENT_ID || !_credentials().BUNGIE_API_KEY)
        throw new NotConfiguredError();
    const params = queryString(config);
    const url = config.url + (params ? '?' + params.join('&') : '');
    const init = {
        method: config.method,
        body: config.body ? JSON.stringify(config.body) : null,
        headers: {
            'Content-Type': 'application/json',
            'X-API-KEY': _credentials().BUNGIE_API_KEY
        }
    };
    return new Promise((resolve, reject) => {
        manifestQueue.add(new ManifestQueueItem(url, init, resolve, reject));
    });
}
function queryString(config) {
    return config.params
        ? Object.entries(config.params)
            .filter(([_, value]) => value !== null && value !== void 0 ? value : false)
            .map(([key, value]) => `${key}=${value.toString()}`)
        : null;
}
