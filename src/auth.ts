import { BungieClientProtocol } from './client';

export type CreateAuthURLOptions = {
  client_id: string;
  state?: string;
  redirect_uri?: string;
  reauth?: boolean;
};

/**
 * Creates an authentication URL for users to click
 *
 * @param state An opaque value used by the client to maintain state between the request and the callback. The parameter should be used for preventing cross-site request forgery as described in section 10.12 of the OAuth 2.0 specification. {@link https://auth0.com/docs/protocols/state-parameters}
 * @param redirect_uri If it is present, it must be a case sensitive exact match with the value registered in the portal.
 * @param reauth Default's to false. Forces the user to re-authorize with Bungie
 * @param client_id Provided by the portal
 * @see {@link https://github.com/Bungie-net/api/wiki/OAuth-Documentation}
 */
export function createOAuthURL({
  state,
  redirect_uri: redirectUri,
  reauth,
  client_id
}: CreateAuthURLOptions): URL {
  const url = new URL('https://www.bungie.net/en/OAuth/Authorize');
  url.searchParams.set('client_id', client_id);
  url.searchParams.set('response_type', 'code');
  if (state !== undefined) url.searchParams.set('state', state);
  if (reauth !== undefined) url.searchParams.set('reauth', reauth.toString());
  if (redirectUri !== undefined)
    url.searchParams.set('redirect_uri', redirectUri);

  return url;
}

export type BungieTokensResponse = {
  membership_id: string;
  access_token: string;
  expires_in: number;
  refresh_token: string;
  refresh_expires_in: number;
};

export async function authorize(
  code: string,
  credentials: {
    clientId: string;
    client_secret: string;
  },
  client: BungieClientProtocol
): Promise<BungieTokensResponse> {
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    url: new URL('https://www.bungie.net/platform/app/oauth/token/'),
    method: 'POST',
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      client_id: credentials.clientId,
      client_secret: credentials.client_secret
    })
  };
  return client.fetch<BungieTokensResponse>(config);
}

export async function refreshAuthorization(
  token: string,
  credentials: {
    clientId: string;
    client_secret: string;
  },
  client: BungieClientProtocol
): Promise<BungieTokensResponse> {
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    url: new URL('https://www.bungie.net/platform/app/oauth/token/'),
    method: 'POST',
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: token,
      client_id: credentials.clientId,
      client_secret: credentials.client_secret
    })
  };
  return client.fetch<BungieTokensResponse>(config);
}
