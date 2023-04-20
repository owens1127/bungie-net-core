"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.manifestRequest = manifestRequest;
exports.rateLimitedRequest = rateLimitedRequest;
var _NotConfiguredError = require("../../errors/NotConfiguredError");
var _credentials2 = require("../credentials");
var _RateLimitedQueue = require("./RateLimitedQueue");
var _StandardQueueItem = require("./StandardQueueItem");
var _ManifestQueueItem = require("./ManifestQueueItem");
const basicQueue = new _RateLimitedQueue.RateLimitedQueue(50);
const transferQueue = new _RateLimitedQueue.RateLimitedQueue(100);
const socketQueue = new _RateLimitedQueue.RateLimitedQueue(100);
const manifestQueue = new _RateLimitedQueue.RateLimitedQueue(100);
function rateLimitedRequest(accessToken, config) {
  if (!(0, _credentials2._credentials)().BUNGIE_CLIENT_ID || !(0, _credentials2._credentials)().BUNGIE_API_KEY) throw new _NotConfiguredError.NotConfiguredError();
  const params = queryString(config);
  const url = config.url + (params ? '?' + params.join('&') : '');
  const init = {
    method: config.method,
    body: config.body ? JSON.stringify(config.body) : null,
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': (0, _credentials2._credentials)().BUNGIE_API_KEY
    }
  };
  if (accessToken) init.headers.Authorization = `Bearer ${accessToken}`;
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
    queue.add(new _StandardQueueItem.StandardQueueItem(url, init, resolve, reject));
  });
}
function transferAction(url) {
  return !!url.match(/www\.bungie\.net\/Platform\/Destiny2\/Actions\/Items\/TransferItem/) || !!url.match(/www\.bungie\.net\/Platform\/Destiny2\/Actions\/Items\/PullFromPostmaster/) || !!url.match(/www\.bungie\.net\/Platform\/Destiny2\/Actions\/Items\/EquipItem/) || !!url.match(/www\.bungie\.net\/Platform\/Destiny2\/Actions\/Items\/EquipItems/);
}
function socketAction(url) {
  return !!url.match(/www\.bungie\.net\/Platform\/Destiny2\/Actions\/Items\/InsertSocketPlugFree/) || !!url.match(/www\.bungie\.net\/Platform\/Destiny2\/Actions\/Items\/InsertSocketPlug/);
}
function manifestRequest(config) {
  if (!(0, _credentials2._credentials)().BUNGIE_CLIENT_ID || !(0, _credentials2._credentials)().BUNGIE_API_KEY) throw new _NotConfiguredError.NotConfiguredError();
  const params = queryString(config);
  const url = config.url + (params ? '?' + params.join('&') : '');
  const init = {
    method: config.method,
    body: config.body ? JSON.stringify(config.body) : null,
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': (0, _credentials2._credentials)().BUNGIE_API_KEY
    }
  };
  return new Promise((resolve, reject) => {
    manifestQueue.add(new _ManifestQueueItem.ManifestQueueItem(url, init, resolve, reject));
  });
}
function queryString(config) {
  return config.params ? Object.entries(config.params).filter(([_, value]) => value !== null && value !== void 0 ? value : false).map(([key, value]) => `${key}=${value.toString()}`) : null;
}