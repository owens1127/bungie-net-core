"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAccessTokenFromRefreshToken = exports.getAccessTokenFromAuthCode = void 0;
var credentials_1 = require("./credentials");
var TokenRequestError_1 = require("../errors/TokenRequestError");
var NotConfiguredError_1 = require("../errors/NotConfiguredError");
var TOKEN_URL = 'https://www.bungie.net/platform/app/oauth/token/';
function getAccessTokenFromAuthCode(code) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, fetchTokens(code, 'authorization_code', 'code')];
        });
    });
}
exports.getAccessTokenFromAuthCode = getAccessTokenFromAuthCode;
function getAccessTokenFromRefreshToken(refreshToken) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, fetchTokens(refreshToken, 'refresh_token', 'refresh_token')];
        });
    });
}
exports.getAccessTokenFromRefreshToken = getAccessTokenFromRefreshToken;
function fetchTokens(code, type, key) {
    return __awaiter(this, void 0, void 0, function () {
        var clientId, secret, body, headers;
        var _a;
        return __generator(this, function (_b) {
            clientId = (0, credentials_1._credentials)().BUNGIE_CLIENT_ID;
            secret = (0, credentials_1._credentials)().BUNGIE_CLIENT_SECRET;
            if (secret && clientId) {
                body = new URLSearchParams((_a = {
                        grant_type: type
                    },
                    _a[key] = code,
                    _a.client_id = clientId,
                    _a.client_secret = secret,
                    _a));
                headers = {
                    'Content-Type': 'application/x-www-form-urlencoded'
                };
            }
            else
                throw new NotConfiguredError_1.NotConfiguredError();
            return [2 /*return*/, fetch(TOKEN_URL, {
                    method: 'POST',
                    body: body,
                    headers: headers
                })
                    .then(function (response) { return response.json(); })
                    .then(handleTokenResponse)];
        });
    });
}
function handleTokenResponse(response) {
    var time = Date.now();
    if (response === null || response === void 0 ? void 0 : response.access_token) {
        var access = {
            value: response.access_token,
            type: 'access',
            created: time,
            expires: time + response.expires_in * 1000
        };
        var refresh = {
            value: response.refresh_token,
            type: 'refresh',
            created: time,
            expires: time + response.refresh_expires_in * 1000
        };
        return {
            bungieMembershipId: response.membership_id,
            access: access,
            refresh: refresh
        };
    }
    else {
        throw new TokenRequestError_1.TokenRequestError('No data or access token in response', response);
    }
}
