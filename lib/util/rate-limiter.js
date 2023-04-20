import { NotConfiguredError } from '../errors/NotConfiguredError';
import { _credentials } from './credentials';
import { BungieAPIError } from '../errors/BungieAPIError';
import { PlatformErrorCodes } from '../schemas';
const timeoutCodes = [PlatformErrorCodes.DestinyDirectBabelClientTimeout];
class AQueueItem {
    url;
    init;
    constructor(url, init) {
        this.url = url;
        this.init = init;
    }
}
class StandardQueueItem extends AQueueItem {
    resolve;
    reject;
    constructor(url, init, resolve, reject) {
        super(url, init);
        this.resolve = resolve;
        this.reject = reject;
    }
    async execute(retry) {
        const start = Date.now();
        let res;
        try {
            res = await fetch(this.url, this.init).then(response => response.json());
        }
        catch (e) {
            this.reject(e);
            return 0;
        }
        res.ResponseTime = Date.now() - start;
        if (res.ErrorCode === PlatformErrorCodes.Success) {
            this.resolve(res);
        }
        else if (!retry && timeoutCodes.includes(res.ErrorCode)) {
            return this.execute(true);
        }
        else {
            this.reject(new BungieAPIError(res));
        }
        return res.ThrottleSeconds * 1000;
    }
}
class ManifestQueueItem extends AQueueItem {
    resolve;
    reject;
    constructor(url, init, resolve, reject) {
        super(url, init);
        this.resolve = resolve;
        this.reject = reject;
    }
    async execute(retry) {
        let res;
        try {
            res = await fetch(this.url, this.init).then(response => response.json());
            this.resolve(res);
        }
        catch (e) {
            if (!retry)
                return this.execute(true);
            this.reject(e);
        }
    }
}
class RateLimitedQueue {
    queue;
    rateLimit;
    size;
    timeout;
    constructor(rateLimit) {
        this.rateLimit = rateLimit;
        this.queue = [];
        this.size = 0;
        this.timeout = 0;
    }
    async add(item) {
        this.queue.push(item);
        this.size++;
        await new Promise(resolve => setTimeout(resolve, this.rateLimit * this.size + this.timeout));
        this.process();
    }
    pop() {
        return this.queue.shift() ?? null;
    }
    process() {
        this.pop()
            ?.execute()
            .then(timeout => {
            if (typeof timeout === 'number')
                this.timeout = timeout;
            this.size--;
        });
    }
}
const basicQueue = new RateLimitedQueue(50);
const transferQueue = new RateLimitedQueue(100);
const socketQueue = new RateLimitedQueue(100);
const manifestQueue = new RateLimitedQueue(100);
export function rateLimitedRequest(access_token, config) {
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
    if (access_token)
        init.headers['Authorization'] = `Bearer ${access_token}`;
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
    let init = {
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
            .filter(([_, value]) => value ?? false)
            .map(([key, value]) => `${key}=${value.toString()}`)
        : null;
}
