# oodestiny

This is a Typescript wrapper for the Bungie API. It is mostly for personal use, but if you find any bugs please report them.

## Installation

```shell
npm i oodestiny
```

## Example Usage

```javascript
import { generateOAuthURL, Tokens, Client } from 'oodestiny';

// You MUST configure the library with your Bungie API credentials,
// using the following enviroment variables:

// -> BUNGIE_API_KEY,
// -> BUNGIE_CLIENT_ID,
// -> BUNGIE_CLIENT_SECRET

// dotenv is a good way to do this
dotenv.config();

// creates a new client, easy-peasy way for accessing basic queries
const client = new Client();
// All endpoints are available as fields of the client
// See the bungie website for all the possible endpoints you can hit :D
const manifest = await client.Destiny2.getDestinyManifest();
```

If you want to make a simple query without a client, you can do directly import the endpoints as of version 1.7.0

```javascript
import { BungieMembershipType, DestinyActivityModeType } from 'oodestiny/schemas'
import { getActivityHistory } from 'oodestiny/endpoints/Destiny2';

const res = await getActivityHistory({
    characterId: "2305843009468984093",
    count: 1,
    destinyMembershipId: "4611686018488107374",
    membershipType: BungieMembershipType.TigerSteam,
    mode: DestinyActivityModeType.Raid,
    page: 0
})

// you could also bind an acccess_token to the call
const res = await getActivityHistory.bind({ access_token: "nads7yfdafnd" })({ ... })

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
console.log({ url });

// it's good practice to verify the state parameter in your URL matches the state parameter you expected
const urlObj = new URL(url);
if (urlObj.searchParams.get('state') !== state) throw Error();

const code = urlObj.searchParams.get('code');

// one way to get the tokens is with an oauth code, you'll need to execute this the first time
const tokens = await Tokens.getAccessTokenFromAuthCode(code);
console.log({ tokens });

// if you have a stored refresh token, you can execute this instead, you will execute this more often then not
const tokens2 = await Tokens.getAccessTokenFromRefreshToken(tokens.refresh.value);
console.log({ tokens2 });

// authenticate the client we created earlier!
// You can also pass the token into the client constructor if you prefer that
client.login(tokens2.access.value);
```
