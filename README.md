# bungie-net-core

This is a Typescript wrapper for the Bungie API. It is mostly for personal use, but if you find any bugs please report them.

## Installation

```shell
npm i bungie-net-core
```

## Example Usage

```typescript
import { BungieClient } from 'bungie-net-core';
import { generateOAuthURL, Tokens } from 'bungie-net-core/auth';

// You can configure the library with your Bungie API credentials,
// using the following enviroment variables:

// -> BUNGIE_API_KEY,
// -> BUNGIE_CLIENT_ID,
// -> BUNGIE_CLIENT_SECRET

// dotenv is a good way to do this
dotenv.config();

// creates a new client, easy-peasy way for accessing basic queries
const client = new BasicBungieClient();
// All endpoints are available as imports
// See the bungie website for all the possible endpoints you can hit :D
const manifest = await getDestinyManifest(client);
```

Here are some more examples

```typescript
import {
  BungieMembershipType,
  DestinyActivityModeType
} from 'bungie-net-core/models';
import { getActivityHistory } from 'bungie-net-core/endpoints/Destiny2';

const res = await getActivityHistory(
  {
    characterId: '2305843009468984093',
    count: 1,
    destinyMembershipId: '4611686018488107374',
    membershipType: BungieMembershipType.TigerSteam,
    mode: DestinyActivityModeType.Raid,
    page: 0
  },
  client
);
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

// it's good practice to verify the state parameter in your URL matches the state parameter you expected
const urlObj = new URL(url);
if (urlObj.searchParams.get('state') !=== state) throw Error();

const code = urlObj.searchParams.get('code');

// one way to get the tokens is with an oauth code, you'll need to execute this the first time
const tokens = await getAccessTokenFromAuthCode(code);

// if you have a stored refresh token, you can execute this instead. Refresh tokens expire after 90 days
const tokens2 = await getAccessTokenFromRefreshToken(tokens.refresh.value);

// authenticate the client we created earlier!
// You can also pass the token into the client constructor if you prefer that
client.setToken(tokens2.access.value);
```

Don't be afraid to create your own implementation of the client. We all want to handle errors and tokens differently. Simple implement the protocol.

```typescript
import { BungieClientProtocol } from 'bungie-net-core/lib/client';

class MyBungieClient implements BungieClientProtocol {
  fetch(config) {
    // define the logic for how you want to handle a request
    // You can assign custom headers, handle retry logic, etc
  }
}
```
