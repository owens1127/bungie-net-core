const credentials = require("./credentials");
const TokenRequestError = require("./errors/TokenRequestError");
const TOKEN_URL = 'https://www.bungie.net/platform/app/oauth/token/';
const fetch = require('node-fetch-commonjs');


/**
 * @typedef {Object} Token
 * @property {string} value
 * @property {'access' | 'refresh'} type
 * @property {Date} created
 * @property {Date} expires
 */

/**
 * @typedef {Object} BungieNetTokens
 * @property {string} bungieMembershipId
 * @property {Token} accessToken
 * @property {Token} refreshToken
 */

/**
 * @typedef {Object} TokenResponse
 * @property {string} membership_id
 * @property {string} access_token
 * @property {number} expires_in
 * @property {number} refresh_expires_in
 * @property {string} refresh_token
 */

/**
 * @param {string} code
 * @return {Promise<BungieNetTokens>}
 */
async function getAccessTokenFromAuthCode(code) {
    const clientId = credentials.BUNGIE_CLIENT_ID;
    const secret = credentials.BUNGIE_SECRET;
    const body = new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        client_id: clientId,
        client_secret: secret
    });
    return fetch(TOKEN_URL, {
        method: 'POST',
        body,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    })
        .then((response) => (response.json()))
        .then(handleTokenResponse);
}

/**
 *
 * @param {string} refreshToken
 * @return {Promise<BungieNetTokens>}
 */
 async function getAccessTokenFromRefreshToken(refreshToken) {
    const clientId = credentials.BUNGIE_CLIENT_ID;
    const secret = credentials.BUNGIE_SECRET;
    const body = new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
        client_id: clientId,
        client_secret: secret
    });

    return fetch(TOKEN_URL, {
        method: 'POST',
        body,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
    })
        .then((response) => (response.json()))
        // @ts-ignore
        .then(handleTokenResponse);
}

/**
 *
 * @param {TokenResponse} response
 * @return {BungieNetTokens}
 */
function handleTokenResponse(response) {
    if (response?.access_token) {
        const created = new Date();
        /** @type Token */
        const accessToken = {
            value: response.access_token,
            type: 'access',
            created,
            expires: new Date(Date.now() + (response.expires_in * 1000)),
        };
        /** @type Token */
        const refreshToken = {
            value: response.refresh_token,
            type: 'refresh',
            created,
            expires: new Date(Date.now() + (response.refresh_expires_in * 1000)),
        };

        return {
            bungieMembershipId: response.membership_id,
            accessToken,
            refreshToken
        };
    } else {
        throw new TokenRequestError('No data or access token in response', response);
    }
}

module.exports = {
    getAccessTokenFromAuthCode,
    getAccessTokenFromRefreshToken,
}