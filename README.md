# bungie-net-core

This is a Typescript wrapper for the Bungie API. It is mostly for personal use, but if you find any bugs please report them.

## Installation

```shell
npm i bungie-net-core
```

## Example Usage

```typescript
import { BungieClientProtocol } from 'bungie-net-core';
import { getProfile } from 'bungie-net-core/services/Destiny2';
import { BungieMembershipType, DestinyComponentType, PlatformErrorCodes } from 'bungie-net-core/enums';

class BungieClient implements BungieClientProtocol {
  // while not required, sometimes you will need an access_token for priviledged routes
  private access_token: undefined | string;

  // this method is required
  async fetch<T>(config: BungieFetchConfig): Promise<T> {
    const apiKey = process.env.BUNGIE_API_KEY!;

    const headers: Record<string, string> = {
      ...config.headers,
      // we must provide the API key in the headers
      'X-API-KEY': apiKey
    };

    // attach the acces_token if we have it as a Bearer token
    if (this.access_token) {
      headers['Authorization'] = `Bearer ${this.access_token}`;
    }

    const payload = {
      method: config.method,
      body: config.body,
      headers
    };

    const res = await fetch(config.url, payload);
    const data = await res.json();
    if (!res.ok) {
      throw data
    }
    return data as T;
  }

const client = new BungieClient();

getProfile(client, {
  components: [DestinyComponentType.CharacterInventories],
  destinyMembershipId: '4611741274194011',
  membershipType: BungieMembershipType.TigerPsn
});
```
