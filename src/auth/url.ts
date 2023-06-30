import { getBungieEnv } from '../env';
import { NotConfiguredError } from '../errors/NotConfiguredError';

type CreateAuthURLOptions = {
  state?: string;
  redirect_uri?: string;
  reauth?: boolean;
  client_id?: string;
};

/**
 * Creates an authentication URL for users to click
 *
 * @param state An opaque value used by the client to maintain state between the request and the callback. The parameter should be used for preventing cross-site request forgery as described in section 10.12 of the OAuth 2.0 specification. {@link https://auth0.com/docs/protocols/state-parameters}
 * @param redirect_uri If it is present, it must be a case sensitive exact match with the value registered in the portal.
 * @param reauth Default's to false. Forces the user to re-authorize with Bungie
 * @param client_id Provided by the portal. If no value is present, defaults to `BUNGIE_CLIENT_ID` environment variable
 * @see {@link https://github.com/Bungie-net/api/wiki/OAuth-Documentation}
 */
export function generateOAuthURL({
  state,
  redirect_uri: redirectUri,
  reauth,
  client_id
}: CreateAuthURLOptions): URL {
  const clientId = client_id ?? getBungieEnv().BUNGIE_CLIENT_ID;
  if (!clientId) throw new NotConfiguredError(['BUNGIE_CLIENT_ID']);

  const url = new URL('https://www.bungie.net/en/OAuth/Authorize');
  url.searchParams.set('client_id', clientId);
  url.searchParams.set('response_type', 'code');
  if (state !== undefined) url.searchParams.set('state', state);
  if (reauth !== undefined) url.searchParams.set('reauth', reauth.toString());
  if (redirectUri !== undefined)
    url.searchParams.set('redirect_uri', redirectUri);

  return url;
}
