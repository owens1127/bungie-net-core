import { NotConfiguredError } from '../errors/NotConfiguredError';
import { BungieCredentials, getBungieEnv } from '../env';
import { TokenRequestError } from '../errors/TokenRequestError';

export type BungieToken = {
  value: string;
  type: 'access' | 'refresh';
  created: number;
  expires: number;
};

export type BungieTokens = {
  bungieMembershipId: string;
  access: BungieToken;
  refresh: BungieToken;
};

export type BungieTokensResponse = {
  membership_id: string;
  access_token: string;
  expires_in: number;
  refresh_token: string;
  refresh_expires_in: number;
};

export type OAuthBungieCredentials = {
  BUNGIE_CLIENT_ID?: string;
  BUNGIE_CLIENT_SECRET?: string;
};

export async function getAccessTokenFromAuthCode(
  code: string,
  credentials?: OAuthBungieCredentials
): Promise<BungieTokens> {
  return fetchTokens({
    code: code,
    key: 'authorization_code',
    grantType: 'code',
    credentials
  });
}

export async function getAccessTokenFromRefreshToken(
  refreshToken: string,
  credentials?: OAuthBungieCredentials
): Promise<BungieTokens> {
  return fetchTokens({
    code: refreshToken,
    key: 'refresh_token',
    grantType: 'refresh_token',
    credentials
  });
}

type FetchTokenParams = {
  grantType: string;
  key: string;
  code: string;
  credentials?: OAuthBungieCredentials;
};
async function fetchTokens({
  grantType,
  key,
  code,
  credentials
}: FetchTokenParams): Promise<BungieTokens> {
  const env = getBungieEnv();
  const clientId = credentials?.BUNGIE_CLIENT_ID ?? env.BUNGIE_CLIENT_ID;
  const secret = credentials?.BUNGIE_CLIENT_SECRET ?? env.BUNGIE_CLIENT_SECRET;
  if (!clientId || !secret) {
    const vars = new Array<keyof BungieCredentials>();
    !clientId ? vars.push('BUNGIE_CLIENT_ID') : undefined;
    !secret ? vars.push('BUNGIE_CLIENT_SECRET') : undefined;
    throw new NotConfiguredError(vars);
  }

  const url = 'https://www.bungie.net/platform/app/oauth/token/';

  const body = new URLSearchParams({
    grant_type: grantType,
    [key]: code,
    client_id: clientId,
    client_secret: secret
  });
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
  };
  const tokenFetch = fetch(url, {
    method: 'POST',
    body,
    headers
  });

  const res = await tokenFetch;
  if (res.ok) {
    try {
      const tokens: BungieTokensResponse = await res.json();
      return handleTokenResponse(tokens);
    } catch (e) {
      throw new TokenRequestError('Error parsing tokens', e);
    }
  } else {
    throw new TokenRequestError('Error fetching tokens', res);
  }
}

function handleTokenResponse(tokens: BungieTokensResponse): BungieTokens {
  const now = Date.now();
  if (tokens?.access_token) {
    const access: BungieToken = {
      value: tokens.access_token,
      type: 'access',
      created: now,
      expires: now + tokens.expires_in * 1000
    };
    const refresh: BungieToken = {
      value: tokens.refresh_token,
      type: 'refresh',
      created: now,
      expires: now + tokens.refresh_expires_in * 1000
    };

    return {
      bungieMembershipId: tokens.membership_id,
      access,
      refresh
    };
  } else {
    throw new TokenRequestError('No data or access token in response', tokens);
  }
}
