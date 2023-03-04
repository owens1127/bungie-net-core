import { __credentials__ } from './credentials.js';
import { TokenRequestError } from '../errors/TokenRequestError.js';
import { NotConfiguredError } from '../errors/NotConfiguredError';
const TOKEN_URL = 'https://www.bungie.net/platform/app/oauth/token/';

export type Token = {
    value: string;
    type: 'access' | 'refresh';
    created: number;
    expires: number;
};

export type BungieNetTokens = {
    bungieMembershipId: string;
    access: Token;
    refresh: Token;
};

export type TokenResponse = {
    membership_id: string;
    access_token: string;
    expires_in: number;
    refresh_token: string;
    refresh_expires_in: number;
};

export async function getAccessTokenFromAuthCode(
    code: string
): Promise<BungieNetTokens> {
    return fetchTokens(code, 'authorization_code', 'code');
}

export async function getAccessTokenFromRefreshToken(
    refreshToken: string
): Promise<BungieNetTokens> {
    return fetchTokens(refreshToken, 'refresh_token', 'refresh_token');
}

async function fetchTokens(code, type, key) {
    const clientId = __credentials__().BUNGIE_CLIENT_ID;
    const secret = __credentials__().BUNGIE_CLIENT_SECRET;
    let body, headers;
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
    } else throw new NotConfiguredError();
    return fetch(TOKEN_URL, {
        method: 'POST',
        body,
        headers
    })
        .then(response => response.json())
        .then(handleTokenResponse);
}

function handleTokenResponse(response: TokenResponse): BungieNetTokens {
    const time = Date.now();
    if (response?.access_token) {
        /** @type Token */
        const access: Token = {
            value: response.access_token,
            type: 'access',
            created: time,
            expires: time + response.expires_in * 1000
        };
        const refresh: Token = {
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
    } else {
        throw new TokenRequestError(
            'No data or access token in response',
            response
        );
    }
}
