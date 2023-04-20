"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.manifestRequest = exports.rateLimitedRequest = void 0;
var NotConfiguredError_1 = require("../../errors/NotConfiguredError");
var credentials_1 = require("../credentials");
var RateLimitedQueue_1 = require("./RateLimitedQueue");
var StandardQueueItem_1 = require("./StandardQueueItem");
var ManifestQueueItem_1 = require("./ManifestQueueItem");
var basicQueue = new RateLimitedQueue_1.RateLimitedQueue(50);
var transferQueue = new RateLimitedQueue_1.RateLimitedQueue(100);
var socketQueue = new RateLimitedQueue_1.RateLimitedQueue(100);
var manifestQueue = new RateLimitedQueue_1.RateLimitedQueue(100);
function rateLimitedRequest(accessToken, config) {
    if (!(0, credentials_1._credentials)().BUNGIE_CLIENT_ID || !(0, credentials_1._credentials)().BUNGIE_API_KEY)
        throw new NotConfiguredError_1.NotConfiguredError();
    var params = queryString(config);
    var url = config.url + (params ? '?' + params.join('&') : '');
    var init = {
        method: config.method,
        body: config.body ? JSON.stringify(config.body) : null,
        headers: {
            'Content-Type': 'application/json',
            'X-API-KEY': (0, credentials_1._credentials)().BUNGIE_API_KEY
        }
    };
    if (accessToken)
        init.headers.Authorization = "Bearer ".concat(accessToken);
    return new Promise(function (resolve, reject) {
        var queue;
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
        queue.add(new StandardQueueItem_1.StandardQueueItem(url, init, resolve, reject));
    });
}
exports.rateLimitedRequest = rateLimitedRequest;
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
function manifestRequest(config) {
    if (!(0, credentials_1._credentials)().BUNGIE_CLIENT_ID || !(0, credentials_1._credentials)().BUNGIE_API_KEY)
        throw new NotConfiguredError_1.NotConfiguredError();
    var params = queryString(config);
    var url = config.url + (params ? '?' + params.join('&') : '');
    var init = {
        method: config.method,
        body: config.body ? JSON.stringify(config.body) : null,
        headers: {
            'Content-Type': 'application/json',
            'X-API-KEY': (0, credentials_1._credentials)().BUNGIE_API_KEY
        }
    };
    return new Promise(function (resolve, reject) {
        manifestQueue.add(new ManifestQueueItem_1.ManifestQueueItem(url, init, resolve, reject));
    });
}
exports.manifestRequest = manifestRequest;
function queryString(config) {
    return config.params
        ? Object.entries(config.params)
            .filter(function (_a) {
            var _ = _a[0], value = _a[1];
            return value !== null && value !== void 0 ? value : false;
        })
            .map(function (_a) {
            var key = _a[0], value = _a[1];
            return "".concat(key, "=").concat(value.toString());
        })
        : null;
}
