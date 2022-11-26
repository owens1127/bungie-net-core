This is a work in progress Node wrapper for the Bungie API, specifically the in-game Destiny 2 functionality. It is currently a work in progress and not ready for release.

Example usage
```javascript
import { configure, generateOAuthURL, Tokens, BungieClient } from 'oodestiny';

/**
 * for back-end applications, these values should be retrieved from environmental variables
 * for front-end applications, these values could be retrieved in a number of different ways
 */
configure(
    process.env.BUNGIE_API_KEY,
    process.env.BUNGIE_CLIENT_ID,
    process.env.BUNGIE_SECRET
);

// you should use something more secure/complex, this is an example
const state = (Math.random() * 323582).toString();

// creates a url for users to click on to login with OAuth 2.0
const url = generateOAuthURL({
    redirectURL: 'google.com',
    state
});
console.log({url});

// it's good practice to verify the state parameter in your URL matches the state parameter you expected
const urlObj = new URL(url);
if (urlObj.searchParams.get('state') !== state) throw Error();

const code = urlObj.searchParams.get('code')

// one way to get the tokens is with an oauth code, you'll need to execute this the first time
// const tokens = await Schemas.getAccessTokenFromAuthCode(code)

// if you have a stored refresh token, you can execute this instead
const tokens = await Tokens.getAccessTokenFromRefreshToken(process.env.BUNGIE_NEWO_REFRESH)
console.log({tokens});

// creates a new client
const client = new BungieClient(tokens);

// authenticates the client with a users tokens
client.login(tokens);
```