const {NotConfiguredError} = require("../lib_old/errors/NotConfiguredError");
const credentials = require("./credentials");

/**
 * @typedef {object} Credentials
 * @property {string} BUNGIE_API_KEY
 * @property {string} BUNGIE_CLIENT_ID
 * @property {string} BUNGIE_SECRET
 */

/**
 * Configures the program to your specified credentials.
 * @param {Credentials} options
 * @return {void}
 * @see {@link https://www.bungie.net/en/Application} for more details
 */
function configure(options) {
    if (!options.BUNGIE_API_KEY || !options.BUNGIE_CLIENT_ID || !options.BUNGIE_SECRET) {
        throw new TypeError(
            'Must enter a valid API Key, Client Id, and Client Secret');
    }
    const credentials = require("./credentials");
    credentials.BUNGIE_API_KEY = options.BUNGIE_API_KEY;
    credentials.BUNGIE_CLIENT_ID = options.BUNGIE_CLIENT_ID;
    credentials.BUNGIE_SECRET = options.BUNGIE_SECRET;
}

/**
 * @typedef {CreateAuthURLOptions} Credentials
 * @property {string?} redirectURL
 * @property {string?} state
 * @see {@link https://auth0.com/docs/protocols/state-parameters}
 */

/**
 * Creates an authentication URL for users to click
 * @param {CreateAuthURLOptions} options
 * @return {string}
 * @see {@link https://github.com/Bungie-net/api/wiki/OAuth-Documentation}
 */
function generateOAuthURL(options) {
    if (!credentials.BUNGIE_CLIENT_ID) throw new NotConfiguredError();
    const stateString = options?.state ? `&state=${options.state}` : '';
    const redirectString = options?.redirectURL ? `&redirect_uri=${options.redirectURL}` : '';
    return `https://www.bungie.net/en/OAuth/Authorize?client_id=${credentials.BUNGIE_CLIENT_ID}&response_type=code` + redirectString + stateString;
}

module.exports = {
    Client: require("./client"),
    Tokens: require("./tokens"),
    generateOAuthURL,
    configure,
}