var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { _credentials } from './credentials';
import { TokenRequestError } from '../errors/TokenRequestError';
import { NotConfiguredError } from '../errors/NotConfiguredError';
const TOKEN_URL = 'https://www.bungie.net/platform/app/oauth/token/';
export function getAccessTokenFromAuthCode(code) {
    return __awaiter(this, void 0, void 0, function* () {
        return fetchTokens(code, 'authorization_code', 'code');
    });
}
export function getAccessTokenFromRefreshToken(refreshToken) {
    return __awaiter(this, void 0, void 0, function* () {
        return fetchTokens(refreshToken, 'refresh_token', 'refresh_token');
    });
}
function fetchTokens(code, type, key) {
    return __awaiter(this, void 0, void 0, function* () {
        const clientId = _credentials().BUNGIE_CLIENT_ID;
        const secret = _credentials().BUNGIE_CLIENT_SECRET;
        let body;
        let headers;
        if (secret && clientId) {
            body = new URLSearchParams({
                grant_type: type,
                [key]: code,
                client_id: clientId,
                client_secret: secret
            });
            headers = {
                'Content-Type': 'application/x-www-form-urlencoded'
            };
        }
        else
            throw new NotConfiguredError();
        return fetch(TOKEN_URL, {
            method: 'POST',
            body,
            headers
        })
            .then(response => response.json())
            .then(handleTokenResponse);
    });
}
function handleTokenResponse(response) {
    const time = Date.now();
    if (response === null || response === void 0 ? void 0 : response.access_token) {
        const access = {
            value: response.access_token,
            type: 'access',
            created: time,
            expires: time + response.expires_in * 1000
        };
        const refresh = {
            value: response.refresh_token,
            type: 'refresh',
            created: time,
            expires: time + response.refresh_expires_in * 1000
        };
        return {
            bungieMembershipId: response.membership_id,
            access,
            refresh
        };
    }
    else {
        throw new TokenRequestError('No data or access token in response', response);
    }
}
