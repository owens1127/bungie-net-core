import { NotConfiguredError } from './errors/NotConfiguredError.js';
import { _credentials } from './util/credentials.js';
import * as TokensImport from './util/tokens.js';
import * as ManifestImport from './manifest/index.js';
import * as SchemaImport from './schemas/index.js';
/**
 * Creates an authentication URL for users to click
 * @see {@link https://github.com/Bungie-net/api/wiki/OAuth-Documentation}
 */
export function generateOAuthURL(options) {
    if (!_credentials().BUNGIE_CLIENT_ID)
        throw new NotConfiguredError();
    const stateString = options?.state ? `&state=${options.state}` : '';
    const redirectString = options?.redirectURL ? `&redirect_uri=${options.redirectURL}` : '';
    return (`https://www.bungie.net/en/OAuth/Authorize?client_id=${_credentials().BUNGIE_CLIENT_ID}&response_type=code` +
        redirectString +
        stateString);
}
export { BungieClient } from './util/client.js';
export const Tokens = TokensImport;
export const Manifest = ManifestImport;
export const Schema = SchemaImport;
