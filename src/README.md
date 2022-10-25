This is a work in progress Node wrapper for the Bungie API using commonJS.

# Installation
```shell
npm i oodestiny
```
# Example Usage
```javascript
const { configure, generateOAuthURL, Tokens, Client } = require("oodestiny");
require("dotenv").config();

// configure the library
configure(
    process.env.BUNGIE_API_KEY, 
    process.env.BUNGIE_CLIENT_ID, 
    process.env.BUNGIE_SECRET
);

// you should use something more secure/complex, this is an example
const state = (Math.random() * 999).toString();

// creates a url for users to click on to login with OAuth 2.0
const url = generateOAuthURL({
    redirectURL: 'google.com',
    state
});
console.log({url});

// it's good practice to verify the state parameter in your URL matches the state parameter you expected
const urlObj = new URL(url);
if (urlObj.searchParams.get('state') !== state) throw Error();

const code = urlObj.searchParams.get('code');

// one way to get the tokens is with an oauth code, you'll need to do this the first time
const tokens = await Tokens.getAccessTokenFromAuthCode(code);
console.log({tokens});

// if you have a stored refresh token, you can do this instead
const tokens2 = await Tokens.getAccessTokenFromRefreshToken(tokens.refresh_token.value);
console.log({tokens2});

// creates a new client
const client = new Client();

// authenticates the client with a users tokens
client.login(tokens.access_token.value);
```