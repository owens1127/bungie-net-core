import { getItem, setItem } from './lib_old/bungie-net-config.js';
import { NotConfiguredError } from './lib_old/errors/NotConfiguredError.js';

/**
 * @typedef {Object} ConfigureOptions
 * @property {string} BUNGIE_API_KEY
 * @property {string} BUNGIE_CLIENT_ID
 * @property {string?} BUNGIE_SECRET
 */

/**
 * Configures the program to your specified credentials.
 * @param {ConfigureOptions} options
 * @see {@link https://www.bungie.net/en/Application} for more details
 */
export function configure(options) {
    if (!options.BUNGIE_API_KEY || !options.BUNGIE_CLIENT_ID || !options.BUNGIE_SECRET) {
        throw new TypeError(
            'Must enter a valid API Key, Client Id, and Client Secret');
    }
    setItem('BUNGIE_API_KEY', options.BUNGIE_API_KEY)
    setItem('BUNGIE_CLIENT_ID', options.BUNGIE_CLIENT_ID)
    setItem('BUNGIE_SECRET', options.BUNGIE_SECRET)
    setItem('HAS_CREDENTIALS', true)
}

const permitted = () => getItem('HAS_CREDENTIALS');

/**
 * @typedef {Object} createAuthURLOptions
 * @property {string} redirectURL The redirect URL to send the user to. If it is present, it must
 *     be a case sensitive exact match with the value registered in the portal.
 * @property {string} state  An opaque value used by the client to maintain state between the
 *     request and the callback. The parameter should be used for preventing cross-site request
 *     forgery as described in section 10.12 of the OAuth 2.0 specification.
 *     {@link https://auth0.com/docs/protocols/state-parameters}
 */
/**
 * Creates an authentication URL for users to click
 * @param {createAuthURLOptions} options
 * @return {string}
 * @see {@link https://github.com/Bungie-net/api/wiki/OAuth-Documentation}
 */
export function createBungieNetOAuthURL(options) {
    if (!permitted()) throw new NotConfiguredError();
    const stateString = options?.state ? `&state=${options.state}` : '';
    const redirectString = options?.redirectURL ? `&redirect_uri=${options.redirectURL}` : '';
    return `https://www.bungie.net/en/OAuth/Authorize?client_id=${getItem(
        'BUNGIE_CLIENT_ID')}&response_type=code` + redirectString + stateString;
}

export { getAccessTokenFromRefreshToken, getAccessTokenFromCode } from './lib_old/tokens.js';

export { DestinyAPIClient as Client } from './lib_old/structures/Client.js';

export { updateManifest } from './lib_old/manifest-util.js';