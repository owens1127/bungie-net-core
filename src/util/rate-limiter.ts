import { NotConfiguredError } from '../errors/NotConfiguredError';
import { _credentials } from './credentials';
import { BungieAPIError } from '../errors/BungieAPIError';
import { BungieNetResponse } from './server-response';
import { PlatformErrorCodes } from '../schemas';

const timeoutCodes = [PlatformErrorCodes.DestinyDirectBabelClientTimeout];

abstract class AQueueItem {
  readonly url: string;
  readonly init: RequestInit;

  constructor(url: string, init: RequestInit) {
    this.url = url;
    this.init = init;
  }

  abstract execute(retry?: boolean): Promise<number | void>;
}

class StandardQueueItem<T> extends AQueueItem {
  readonly resolve: (value: BungieNetResponse<T>) => void;
  readonly reject: (value: Error) => void;

  constructor(
    url: string,
    init: RequestInit,
    resolve: (value: BungieNetResponse<T>) => void,
    reject: (value: Error) => void
  ) {
    super(url, init);
    this.resolve = resolve;
    this.reject = reject;
  }

  async execute(retry?: boolean): Promise<number> {
    const start = Date.now();
    let res: BungieNetResponse<T>;
    try {
      res = await fetch(this.url, this.init).then(response => response.json() as Promise<BungieNetResponse<T>>);
    } catch (e) {
      this.reject(e as Error);
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

class ManifestQueueItem extends AQueueItem {
  readonly resolve: (value: {}) => void;
  readonly reject: (value: Error) => void;

  constructor(url: string, init: RequestInit, resolve: (value: {}) => void, reject: (value: Error) => void) {
    super(url, init);
    this.resolve = resolve;
    this.reject = reject;
  }

  async execute(retry?: boolean): Promise<void> {
    let res: {};
    try {
      res = await fetch(this.url, this.init).then(response => response.json() as {});
      this.resolve(res);
    } catch (e) {
      if (!retry) return this.execute(true);
      this.reject(e as Error);
    }
  }
}

class RateLimitedQueue<I extends AQueueItem> {
  private queue: I[];
  private rateLimit: number;
  private size: number;
  private timeout: number;

  constructor(rateLimit: number) {
    this.rateLimit = rateLimit;
    this.queue = [];
    this.size = 0;
    this.timeout = 0;
  }

  async add(item: I): Promise<void> {
    this.queue.push(item);
    this.size++;
    await new Promise(resolve => setTimeout(resolve, this.rateLimit * this.size + this.timeout));
    this.process();
  }

  private pop(): I | null {
    return this.queue.shift() ?? null;
  }

  private process() {
    this.pop()
      ?.execute()
      .then(timeout => {
        if (typeof timeout === 'number') this.timeout = timeout;
        this.size--;
      });
  }
}

const basicQueue = new RateLimitedQueue<StandardQueueItem<any>>(50);
const transferQueue = new RateLimitedQueue<StandardQueueItem<any>>(100);
const socketQueue = new RateLimitedQueue<StandardQueueItem<any>>(100);
const manifestQueue = new RateLimitedQueue<ManifestQueueItem>(100);

export type FetchConfig = {
  url: string;
  method: string;
  params?: { [key: string]: any };
  body?: any;
};

export function rateLimitedRequest<T>(
  access_token: string | undefined,
  config: FetchConfig
): Promise<BungieNetResponse<T>> {
  if (!_credentials().BUNGIE_CLIENT_ID || !_credentials().BUNGIE_API_KEY) throw new NotConfiguredError();

  const params = queryString(config);
  const url = config.url + (params ? '?' + params.join('&') : '');
  const init = {
    method: config.method,
    body: config.body ? JSON.stringify(config.body) : null,
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': _credentials().BUNGIE_API_KEY
    } as Record<string, string>
  };

  if (access_token) init.headers['Authorization'] = `Bearer ${access_token}`;

  return new Promise((resolve, reject) => {
    let queue: RateLimitedQueue<StandardQueueItem<any>>;
    if (!url.match(/www\.bungie\.net\/Platform\/Destiny2\/Actions\/Items/)) {
      queue = basicQueue;
    } else if (transferAction(url)) {
      queue = transferQueue;
    } else if (socketAction(url)) {
      queue = socketQueue;
    } else {
      queue = basicQueue;
    }
    queue.add(new StandardQueueItem(url, init, resolve, reject));
  });
}

function transferAction(url: string): boolean {
  return (
    !!url.match(/www\.bungie\.net\/Platform\/Destiny2\/Actions\/Items\/TransferItem/) ||
    !!url.match(/www\.bungie\.net\/Platform\/Destiny2\/Actions\/Items\/PullFromPostmaster/) ||
    !!url.match(/www\.bungie\.net\/Platform\/Destiny2\/Actions\/Items\/EquipItem/) ||
    !!url.match(/www\.bungie\.net\/Platform\/Destiny2\/Actions\/Items\/EquipItems/)
  );
}

function socketAction(url: string): boolean {
  return (
    !!url.match(/www\.bungie\.net\/Platform\/Destiny2\/Actions\/Items\/InsertSocketPlugFree/) ||
    !!url.match(/www\.bungie\.net\/Platform\/Destiny2\/Actions\/Items\/InsertSocketPlug/)
  );
}

export function manifestRequest(config: FetchConfig): Promise<any> {
  if (!_credentials().BUNGIE_CLIENT_ID || !_credentials().BUNGIE_API_KEY) throw new NotConfiguredError();
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

function queryString(config: FetchConfig): string[] | null {
  return config.params
    ? Object.entries(config.params)
        .filter(([_, value]) => value ?? false)
        .map(([key, value]) => `${key}=${value.toString()}`)
    : null;
}
