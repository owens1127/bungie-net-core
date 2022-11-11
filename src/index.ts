import { NotConfiguredError } from './errors/NotConfiguredError.js';
import { __credentials__ } from './util/credentials.js'
import { BungieClient } from './util/client.js';
import * as TokensImport from './util/tokens.js';
import * as ManifestImport from './manifest/index.js';
import * as SchemaImport from './schemas/index.js';

/**
 * @see {@link https://www.bungie.net/en/Application} for more details
 */
export function configure(bungie_api_key: string, bungie_client_id: string, bungie_secret: string) {
    if (!bungie_api_key || !bungie_client_id || !bungie_secret) {
        throw new TypeError('Must enter a valid API Key, Client Id, and Client Secret');
    }
    __credentials__.BUNGIE_API_KEY = bungie_api_key;
    __credentials__.BUNGIE_CLIENT_ID = bungie_client_id;
    __credentials__.BUNGIE_SECRET = bungie_secret;
}


/**
 * @see {@link https://auth0.com/docs/protocols/state-parameters}
 */
type CreateAuthURLOptions = {
    redirectURL?: string,
    state?: string
}

/**
 * Creates an authentication URL for users to click
 * @see {@link https://github.com/Bungie-net/api/wiki/OAuth-Documentation}
 */
export function generateOAuthURL(options: CreateAuthURLOptions): string {
    if (!__credentials__.BUNGIE_CLIENT_ID) throw new NotConfiguredError();
    const stateString = options?.state ? `&state=${options.state}` : '';
    const redirectString = options?.redirectURL ? `&redirect_uri=${options.redirectURL}` : '';
    return `https://www.bungie.net/en/OAuth/Authorize?client_id=${__credentials__.BUNGIE_CLIENT_ID}&response_type=code`
        + redirectString + stateString;
}

export { BungieClient } from './util/client.js';
export const Tokens = TokensImport;
export const Manifest = ManifestImport;
export const Schema = SchemaImport;