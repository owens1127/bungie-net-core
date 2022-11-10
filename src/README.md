# oodestiny
This is a work in progress Node wrapper for the Bungie API. Don't expect it to be fully functional all the time ;D

## Installation
```shell
npm i oodestiny
```
## Example Usage
```javascript
import { configure, generateOAuthURL, Tokens, Client } from 'oodestiny';

// 
// configure the library with your Bungie API credentials
configure(
    process.env.BUNGIE_API_KEY, 
    process.env.BUNGIE_CLIENT_ID, 
    process.env.BUNGIE_SECRET
);

// creates a new client, easy-peasy way for accessing basic queries
const client = new Client();
// All endpoints are available as fields of the client
// See the bungie website for all the possible endpoints you can hit :D
const manifest = await client.Destiny2.GetDestinyManifest()

```
Of course, to access the full potential of the API, you will need OAuth access.
```javascript
// Let's generate our OAuth url!
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

// if you have a stored refresh token, you can do this instead, you will do this more often then not
const tokens2 = await Tokens.getAccessTokenFromRefreshToken(tokens.refresh.value);
console.log({tokens2});

// authenticate the client we created earlier! 
// You can also pass the token into the client constructor if you prefer that
client.login(tokens2.access.value);
```