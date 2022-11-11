import { __credentials__ } from "./credentials.js";
import { TokenRequestError } from "../errors/TokenRequestError.js";
import fetch from 'node-fetch';
const TOKEN_URL = 'https://www.bungie.net/platform/app/oauth/token/';
export async function getAccessTokenFromAuthCode(code) {
  const clientId = __credentials__.BUNGIE_CLIENT_ID;
  const secret = __credentials__.BUNGIE_SECRET;
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
  const clientId = __credentials__.BUNGIE_CLIENT_ID;
  const secret = __credentials__.BUNGIE_SECRET;
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
  } else {
    throw new TokenRequestError('No data or access token in response', response);
  }
}