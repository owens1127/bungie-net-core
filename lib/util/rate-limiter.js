function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
import { NotConfiguredError } from '../errors/NotConfiguredError.js';
import { __credentials__ } from './credentials.js';
import { BungieAPIError } from '../errors/BungieAPIError.js';
import { PlatformErrorCodes } from '../schemas/index.js';
const timeoutCodes = [PlatformErrorCodes.DestinyDirectBabelClientTimeout];
class QueueItem {
  constructor(url, init, resolve, reject) {
    _defineProperty(this, "url", void 0);
    _defineProperty(this, "init", void 0);
    _defineProperty(this, "reject", void 0);
    _defineProperty(this, "resolve", void 0);
    this.url = url;
    this.init = init;
    this.resolve = resolve;
    this.reject = reject;
  }
  async execute(retry) {
    const start = Date.now();
    let res;
    try {
      res = await fetch(this.url, this.init).then(response => response.json());
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
class ManifestQueueItem {
  constructor(url, init, resolve, reject) {
    _defineProperty(this, "url", void 0);
    _defineProperty(this, "init", void 0);
    _defineProperty(this, "reject", void 0);
    _defineProperty(this, "resolve", void 0);
    this.url = url;
    this.init = init;
    this.resolve = resolve;
    this.reject = reject;
  }
  async execute(retry) {
    let res;
    try {
      res = await fetch(this.url, this.init).then(response => response.json());
      this.resolve(res);
    } catch (e) {
      if (!retry) return this.execute(true);
      this.reject(e);
    }
    return 0;
  }
}
class RateLimitedQueue {
  constructor(rateLimit) {
    _defineProperty(this, "queue", void 0);
    _defineProperty(this, "rateLimit", void 0);
    _defineProperty(this, "size", void 0);
    _defineProperty(this, "timeout", void 0);
    this.rateLimit = rateLimit;
    this.queue = [];
    this.size = 0;
    this.timeout = 0;
  }
  add(item) {
    this.queue.push(item);
    this.size++;
    setTimeout(this.process.bind(this), this.rateLimit * this.size + this.timeout);
  }
  pop() {
    return this.queue.shift() ?? null;
  }
  process() {
    this.pop()?.execute().then(timeout => {
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
  if (!__credentials__.BUNGIE_CLIENT_ID) throw new NotConfiguredError();
  const params = equalsParams(config);
  const url = config.url + (params ? '?' + params.join('&') : '');
  const init = {
    method: config.method,
    body: config.body ? JSON.stringify(config.body) : null,
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': __credentials__.BUNGIE_API_KEY
    }
  };
  if (access_token) init.headers['Authorization'] = `Bearer ${access_token}`;
  return new Promise((resolve, reject) => {
    let queue;
    if (!url.match(/www\.bungie\.net\/Platform\/Destiny2\/Actions\/Items/)) {
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
function transferAction(url) {
  return !!url.match(/www\.bungie\.net\/Platform\/Destiny2\/Actions\/Items\/TransferItem/) || !!url.match(/www\.bungie\.net\/Platform\/Destiny2\/Actions\/Items\/PullFromPostmaster/) || !!url.match(/www\.bungie\.net\/Platform\/Destiny2\/Actions\/Items\/EquipItem/) || !!url.match(/www\.bungie\.net\/Platform\/Destiny2\/Actions\/Items\/EquipItems/);
}
function socketAction(url) {
  return !!url.match(/www\.bungie\.net\/Platform\/Destiny2\/Actions\/Items\/InsertSocketPlugFree/) || !!url.match(/www\.bungie\.net\/Platform\/Destiny2\/Actions\/Items\/InsertSocketPlug/);
}
export function manifestRequest(config) {
  if (!__credentials__.BUNGIE_CLIENT_ID) throw new NotConfiguredError();
  const params = equalsParams(config);
  const url = config.url + (params ? '?' + params.join('&') : '');
  let init = {
    method: config.method,
    body: config.body ? JSON.stringify(config.body) : null,
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': __credentials__.BUNGIE_API_KEY
    }
  };
  return new Promise((resolve, reject) => {
    manifestQueue.add(new ManifestQueueItem(url, init, resolve, reject));
  });
}
function equalsParams(config) {
  return !!config.params ? Object.keys(config.params).filter(key => {
    return key in config.params && config.params[key] !== undefined && config.params[key] !== null;
  }).map(key => {
    return key + '=' + config.params[key];
  }) : null;
}