import { NotConfiguredError } from '../errors/NotConfiguredError';
import { _credentials } from '../util/credentials';

/**
 * @see {@link https://auth0.com/docs/protocols/state-parameters}
 */
type CreateAuthURLOptions = {
  redirectURL?: string;
  state?: string;
};

/**
 * Creates an authentication URL for users to click
 * @see {@link https://github.com/Bungie-net/api/wiki/OAuth-Documentation}
 */
export function generateOAuthURL(options: CreateAuthURLOptions): string {
  if (!_credentials().BUNGIE_CLIENT_ID) throw new NotConfiguredError();
  const stateString = options?.state ? `&state=${options.state}` : '';
  const redirectString = options?.redirectURL ? `&redirect_uri=${options.redirectURL}` : '';
  return (
    `https://www.bungie.net/en/OAuth/Authorize?client_id=${
      _credentials().BUNGIE_CLIENT_ID
    }&response_type=code` +
    redirectString +
    stateString
  );
}
