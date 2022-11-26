import { NotConfiguredError } from '../errors/NotConfiguredError.js';
import { __credentials__ } from './credentials.js'
import { BungieAPIError } from '../errors/BungieAPIError.js';
import { BungieNetResponse } from './server-response.js';
import fetch from 'node-fetch';
import { PlatformErrorCodes } from '../schemas/index.js';

const timeoutCodes = [
    PlatformErrorCodes.DestinyDirectBabelClientTimeout
]

class QueueItem<T> {
    protected readonly url: string
    protected readonly init: { body, method, headers }
    protected readonly resolve: (value: (BungieNetResponse<T>)) => Promise<void>;
    protected readonly reject: (value: (Error)) => void;

    constructor(url, init, resolve, reject) {
        this.url = url;
        this.init = init;
        this.resolve = resolve;
        this.reject = reject;
    }

    async execute(retry?: boolean): Promise<number> {
        const start = Date.now();
        return fetch(this.url, this.init)
            .then((response) => response.json() as Promise<BungieNetResponse<T>>)
            .then((res: BungieNetResponse<T>) => {
                res.ResponseTime = Date.now() - start;
                if (res.ErrorCode === PlatformErrorCodes.Success) {
                    this.resolve(res);
                } else if (!retry && timeoutCodes.includes(res.ErrorCode)) {
                    return this.execute(true)
                } else {
                    this.reject(new BungieAPIError<T>(res));
                }
                return res.ThrottleSeconds * 1000;
            })
    }

}

class ManifestQueueItem<T> extends QueueItem<never> {
    constructor(url, init, resolve, reject) {
        super(url, init, resolve, reject);
    }

    async execute(retry?: boolean): Promise<number> {
        return fetch(this.url, this.init)
            .then((response) => response.json()
                // @ts-ignore
                .then((res) => this.resolve(res))
                .catch((e => this.reject(e))))
            .then(() => 0)
    }

}

class RateLimitedQueue {
    private queue: QueueItem<any>[];
    private rateLimit: number;
    private size: number;
    private timeout: number;

    constructor(rateLimit: number) {
        this.rateLimit = rateLimit;
        this.queue = [];
        this.size = 0;
        this.timeout = 0;
    }

    add(item: QueueItem<any>): void {
        this.queue.push(item);
        this.size++;
        setTimeout(this.process.bind(this), this.rateLimit * this.size + this.timeout);
    }

    private pop(): QueueItem<any> | null {
        return this.queue.shift() ?? null;
    }

    private process() {
        this.pop()?.execute().then(timeout => {
            this.timeout = timeout;
            this.size--
            // TODO: should handle this if it happens
        }).catch(console.error);
    }
}

const basicQueue = new RateLimitedQueue(50);
const transferQueue = new RateLimitedQueue(100);
const socketQueue = new RateLimitedQueue(100);
const manifestQueue = new RateLimitedQueue(100);

export type FetchConfig = {
    url: string;
    method: string,
    params?: {},
    body?: {},
}

export function rateLimitedRequest<T>(access_token: string | undefined,
    config: FetchConfig): Promise<BungieNetResponse<T>> {
    if (!__credentials__.BUNGIE_CLIENT_ID) throw new NotConfiguredError();

    const params = equalsParams(config);
    const url = config.url + (params ? '?' + params.join('&') : '')
    const init = {
        method: config.method,
        body: config.body ? JSON.stringify(config.body) : null,
        headers: {
            'Content-Type': 'application/json',
            'X-API-KEY': __credentials__.BUNGIE_API_KEY
        }
    }

    if (access_token) init.headers['Authorization'] = `Bearer ${access_token}`;

    return new Promise((resolve, reject) => {
        let queue: RateLimitedQueue;
        if (!url.match(/www\.bungie\.net\/Platform\/Destiny2\/Actions\/Items/)) {
            queue = basicQueue;
        } else if (transferAction(url)) {
            queue = transferQueue;
        } else if (socketAction(url)) {
            queue = socketQueue
        } else {
            queue = basicQueue;
        }
        queue.add(new QueueItem(url, init, resolve, reject));
    });
}

function transferAction(url: string): boolean {
    return !!url.match(/www\.bungie\.net\/Platform\/Destiny2\/Actions\/Items\/TransferItem/)
        || !!url.match(
            /www\.bungie\.net\/Platform\/Destiny2\/Actions\/Items\/PullFromPostmaster/)
        || !!url.match(/www\.bungie\.net\/Platform\/Destiny2\/Actions\/Items\/EquipItem/)
        || !!url.match(/www\.bungie\.net\/Platform\/Destiny2\/Actions\/Items\/EquipItems/)
}

function socketAction(url: string): boolean {
    return !!url.match(
            /www\.bungie\.net\/Platform\/Destiny2\/Actions\/Items\/InsertSocketPlugFree/)
        || !!url.match(
            /www\.bungie\.net\/Platform\/Destiny2\/Actions\/Items\/InsertSocketPlug/)
}

export function manifestRequest(config: FetchConfig): Promise<any> {
    if (!__credentials__.BUNGIE_CLIENT_ID) throw new NotConfiguredError();
    const params = equalsParams(config);
    const url = config.url + (params ? '?' + params.join('&') : '')
    let init = {
        method: config.method,
        body: config.body ? JSON.stringify(config.body) : null,
        headers: {
            'Content-Type': 'application/json',
            'X-API-KEY': __credentials__.BUNGIE_API_KEY
        }
    }

    return new Promise((resolve, reject) => {
        manifestQueue.add(new ManifestQueueItem(url, init, resolve, reject));
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