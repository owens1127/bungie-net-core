import { NotConfiguredError } from '../errors/NotConfiguredError';
import { __credentials__ } from './credentials';
import { BungieAPIError } from '../errors/BungieAPIError';
import { BungieNetResponse } from './server-response';
import { PlatformErrorCodes } from '../schemas';

const timeoutCodes = [PlatformErrorCodes.DestinyDirectBabelClientTimeout];

interface QueueItemType {
    readonly url: string;
    readonly init: { body; method; headers };
    readonly reject: (value: Error) => void;
    execute(retry?: boolean): Promise<number>;
}

class QueueItem<T> implements QueueItemType {
    readonly url: string;
    readonly init: { body; method; headers };
    readonly reject: (value: Error) => void;
    readonly resolve: (value: BungieNetResponse<T>) => void;

    constructor(url, init, resolve, reject) {
        this.url = url;
        this.init = init;
        this.resolve = resolve;
        this.reject = reject;
    }

    async execute(retry?: boolean): Promise<number> {
        const start = Date.now();
        let res: BungieNetResponse<T>;
        try {
            res = await fetch(this.url, this.init).then(
                response => response.json() as Promise<BungieNetResponse<T>>
            );
        } catch (e) {
            this.reject(e);
            return 0;
        }
        res.ResponseTime = Date.now() - start;
        if (res.ErrorCode === PlatformErrorCodes.Success) {
            this.resolve(res);
        } else if (!retry && timeoutCodes.includes(res.ErrorCode)) {
            return this.execute(true);
        } else {
            this.reject(new BungieAPIError(res));
        }
        return res.ThrottleSeconds * 1000;
    }
}

class ManifestQueueItem implements QueueItemType {
    readonly url: string;
    readonly init: { body; method; headers };
    readonly reject: (value: Error) => void;
    readonly resolve: (value: {}) => void;

    constructor(url, init, resolve, reject) {
        this.url = url;
        this.init = init;
        this.resolve = resolve;
        this.reject = reject;
    }

    async execute(retry?: boolean): Promise<number> {
        let res: {};
        try {
            res = await fetch(this.url, this.init).then(
                response => response.json() as {}
            );
            this.resolve(res);
        } catch (e) {
            if (!retry) return this.execute(true);
            this.reject(e);
        }
        return 0;
    }
}

class RateLimitedQueue {
    private queue: QueueItemType[];
    private rateLimit: number;
    private size: number;
    private timeout: number;

    constructor(rateLimit: number) {
        this.rateLimit = rateLimit;
        this.queue = [];
        this.size = 0;
        this.timeout = 0;
    }

    add(item: QueueItemType): void {
        this.queue.push(item);
        this.size++;
        setTimeout(
            this.process.bind(this),
            this.rateLimit * this.size + this.timeout
        );
    }

    private pop(): QueueItemType | null {
        return this.queue.shift() ?? null;
    }

    private process() {
        this.pop()
            ?.execute()
            .then(timeout => {
                this.timeout = timeout;
                this.size--;
            });
    }
}

const basicQueue = new RateLimitedQueue(50);
const transferQueue = new RateLimitedQueue(100);
const socketQueue = new RateLimitedQueue(100);
const manifestQueue = new RateLimitedQueue(100);

export type FetchConfig = {
    url: string;
    method: string;
    params?: {};
    body?: {};
};

export function rateLimitedRequest<T>(
    access_token: string | undefined,
    config: FetchConfig
): Promise<BungieNetResponse<T>> {
    if (
        !__credentials__().BUNGIE_CLIENT_ID ||
        !__credentials__().BUNGIE_API_KEY
    )
        throw new NotConfiguredError();

    const params = equalsParams(config);
    const url = config.url + (params ? '?' + params.join('&') : '');
    const init = {
        method: config.method,
        body: config.body ? JSON.stringify(config.body) : null,
        headers: {
            'Content-Type': 'application/json',
            'X-API-KEY': __credentials__().BUNGIE_API_KEY
        }
    };

    if (access_token) init.headers['Authorization'] = `Bearer ${access_token}`;

    return new Promise((resolve, reject) => {
        let queue: RateLimitedQueue;
        if (
            !url.match(/www\.bungie\.net\/Platform\/Destiny2\/Actions\/Items/)
        ) {
            queue = basicQueue;
        } else if (transferAction(url)) {
            queue = transferQueue;
        } else if (socketAction(url)) {
            queue = socketQueue;
        } else {
            queue = basicQueue;
        }
        queue.add(new QueueItem(url, init, resolve, reject));
    });
}

function transferAction(url: string): boolean {
    return (
        !!url.match(
            /www\.bungie\.net\/Platform\/Destiny2\/Actions\/Items\/TransferItem/
        ) ||
        !!url.match(
            /www\.bungie\.net\/Platform\/Destiny2\/Actions\/Items\/PullFromPostmaster/
        ) ||
        !!url.match(
            /www\.bungie\.net\/Platform\/Destiny2\/Actions\/Items\/EquipItem/
        ) ||
        !!url.match(
            /www\.bungie\.net\/Platform\/Destiny2\/Actions\/Items\/EquipItems/
        )
    );
}

function socketAction(url: string): boolean {
    return (
        !!url.match(
            /www\.bungie\.net\/Platform\/Destiny2\/Actions\/Items\/InsertSocketPlugFree/
        ) ||
        !!url.match(
            /www\.bungie\.net\/Platform\/Destiny2\/Actions\/Items\/InsertSocketPlug/
        )
    );
}

export function manifestRequest(config: FetchConfig): Promise<any> {
    if (
        !__credentials__().BUNGIE_CLIENT_ID ||
        !__credentials__().BUNGIE_API_KEY
    )
        throw new NotConfiguredError();
    const params = equalsParams(config);
    const url = config.url + (params ? '?' + params.join('&') : '');
    let init = {
        method: config.method,
        body: config.body ? JSON.stringify(config.body) : null,
        headers: {
            'Content-Type': 'application/json',
            'X-API-KEY': __credentials__().BUNGIE_API_KEY
        }
    };

    return new Promise((resolve, reject) => {
        manifestQueue.add(new ManifestQueueItem(url, init, resolve, reject));
    });
}

function equalsParams(config: FetchConfig): string[] | null {
    return !!config.params
        ? Object.keys(config.params)
              .filter(key => {
                  return (
                      key in config.params! &&
                      config.params![key] !== undefined &&
                      config.params![key] !== null
                  );
              })
              .map(key => {
                  return key + '=' + config.params![key];
              })
        : null;
}
