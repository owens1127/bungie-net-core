

import { rateLimitedRequest } from '../../util/rate-limiter.js';
import { BungieAPIError } from '../../errors/BungieAPIError.js';
export async function pullFromPostmaster(body) {
  const token = this?.client?.access_token ?? this?.access_token ?? null;
  try {
    const res = await rateLimitedRequest(token, {
      method: 'POST',
      url: 'https://www.bungie.net/Platform/Destiny2/Actions/Items/PullFromPostmaster/',
      body
    });
    return res;
  } catch (err) {
    if (err instanceof BungieAPIError) err.stack = new Error().stack;
    throw err;
  }
}