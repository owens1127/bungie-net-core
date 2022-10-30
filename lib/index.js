const {NotConfiguredError} = require("./errors/NotConfiguredError");
const credentials = require("./credentials");
const BungieClient = require("./client");

/**
 * Configures the program to your specified credentials.
 * @param {string} bungie_api_key
 * @param {string} bungie_client_id
 * @param {string} bungie_secret
 * @return {void}
 * @see {@link https://www.bungie.net/en/Application} for more details
 */
function configure(bungie_api_key, bungie_client_id, bungie_secret) {
    if (!(bungie_api_key || bungie_client_id || bungie_secret)) {
        throw new TypeError('Must enter a valid API Key, Client Id, and Client Secret');
    }
    const credentials = require("./credentials");
    credentials.BUNGIE_API_KEY = bungie_api_key;
    credentials.BUNGIE_CLIENT_ID = bungie_client_id;
    credentials.BUNGIE_SECRET = bungie_secret;
}

/**
 * @typedef CreateAuthURLOptions
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
    /**
     * @type {typeof BungieClient}
     */
    Client: require('./client.js'),
    Tokens: require('./tokens'),
    Schema: require('./schemas'),
    Responses: require('./responses'),
    Manifest: require('./manifest'),
    Endpoints: require('./endpoints'),
    generateOAuthURL,
    configure,
}