

import { rateLimitedRequest } from '../../util/rate-limiter.js';
import { BungieAPIError } from '../../errors/BungieAPIError.js';
export async function getFriendList() {
  const token = this?.client?.access_token ?? this?.access_token ?? null;
  try {
    const res = await rateLimitedRequest(token, {
      method: 'GET',
      url: 'https://www.bungie.net/Platform/Social/Friends/'
    });
    return res;
  } catch (err) {
    if (err instanceof BungieAPIError) err.stack = new Error().stack;
    throw err;
  }
}