const credentials = require("./credentials");
const TokenRequestError = require("../errors/TokenRequestError");
const TOKEN_URL = 'https://www.bungie.net/platform/app/oauth/token/';
const fetch = require('node-fetch');
export async function getAccessTokenFromAuthCode(code) {
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
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then(response => response.json()).then(handleTokenResponse);
}
export async function getAccessTokenFromRefreshToken(refreshToken) {
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
    }
  }).then(response => response.json()).then(handleTokenResponse);
}
function handleTokenResponse(response) {
  const time = Date.now();
  if (response?.access_token) {
    const access_token = {
      value: response.access_token,
      type: 'access',
      created: time,
      expires: time + response.expires_in * 1000
    };
    const refresh_token = {
      value: response.refresh_token,
      type: 'refresh',
      created: time,
      expires: time + response.refresh_expires_in * 1000
    };
    return {
      bungieMembershipId: response.membership_id,
      access_token,
      refresh_token
    };
  } else {
    throw new TokenRequestError('No data or access token in response', response);
  }
}