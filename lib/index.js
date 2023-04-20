import { NotConfiguredError } from './errors/NotConfiguredError';
import { _credentials } from './util/credentials';
import * as TokensImport from './util/tokens';
import * as ManifestImport from './manifest/index';
import * as SchemaImport from './schemas/index';
/**
 * Creates an authentication URL for users to click
 * @see {@link https://github.com/Bungie-net/api/wiki/OAuth-Documentation}
 */
export function generateOAuthURL(options) {
    if (!_credentials().BUNGIE_CLIENT_ID)
        throw new NotConfiguredError();
    const stateString = (options === null || options === void 0 ? void 0 : options.state) ? `&state=${options.state}` : '';
    const redirectString = (options === null || options === void 0 ? void 0 : options.redirectURL) ? `&redirect_uri=${options.redirectURL}` : '';
    return (`https://www.bungie.net/en/OAuth/Authorize?client_id=${_credentials().BUNGIE_CLIENT_ID}&response_type=code` +
        redirectString +
        stateString);
}
export { BungieClient } from './util/client';
export const Tokens = TokensImport;
export const Manifest = ManifestImport;
export const Schema = SchemaImport;
