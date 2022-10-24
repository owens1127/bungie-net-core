import fetch from 'node-fetch';
import { getItem } from './bungie-net-config.js';
import { TokenRequestError } from './errors/TokenRequestError.js';

const TOKEN_URL = 'https://www.bungie.net/platform/app/oauth/token/';

/**
 * @typedef Token
 * @property {string} value
 * @property {'access' | 'refresh'} type
 * @property {Date} created
 * @property {Date} expires
 */

/**
 * @typedef TokenInfo
 * @property {string} bungieMembershipId
 * @property {Token} accessToken
 * @property {Token} [refreshToken]
 */

/**
 * @param {string} code
 * @return {Promise<TokenInfo>}
 */
export async function getAccessTokenFromCode(code) {
    const clientId = getItem('BUNGIE_CLIENT_ID');
    const secret = getItem('BUNGIE_SECRET');
    const body = new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        client_id: clientId,
        client_secret: secret
    });
    return Promise.resolve(
        fetch(TOKEN_URL, {
            method: 'POST',
            body,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
            .then((response) => (response.json()))
            .then(handleTokenResponse));
}

/**
 * @param {string} refreshToken
 * @return {Promise<TokenInfo>}
 */
export async function getAccessTokenFromRefreshToken(refreshToken) {
    const clientId = getItem('BUNGIE_CLIENT_ID');
    const secret = getItem('BUNGIE_SECRET');
    const body = new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
        client_id: clientId,
        client_secret: secret
    });

    return Promise.resolve(
        fetch(TOKEN_URL, {
            method: 'POST',
            body,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        })
            .then((response) => (response.json()))
            .then(handleTokenResponse));
}

/**
 * @param {Object} response
 * @return {TokenInfo}
 * @throws {TokenRequestError} if there are no provided tokens
 */
function handleTokenResponse(response) {
    if (response?.access_token) {
        const data = response;
        const created = new Date();
        const accessToken = {
            value: data.access_token,
            type: 'access',
            created,
            expires: new Date(Date.now() + (data.expires_in * 1000)),
        };

        const refreshToken = {
            value: data.refresh_token,
            type: 'refresh',
            created,
            expires: new Date(Date.now() + (data.refresh_expires_in * 1000)),
        };

        return {
            bungieMembershipId: data.membership_id,
            accessToken,
            refreshToken
        };
    } else {
        throw new TokenRequestError('No data or access token in response', response);
    }
}