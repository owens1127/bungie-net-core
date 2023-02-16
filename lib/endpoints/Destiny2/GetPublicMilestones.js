

import { rateLimitedRequest } from '../../util/rate-limiter.js';
import { BungieAPIError } from '../../errors/BungieAPIError.js';
export async function getPublicMilestones() {
  const token = this?.client?.access_token ?? this?.access_token ?? null;
  try {
    const res = await rateLimitedRequest(token, {
      method: 'GET',
      url: 'https://www.bungie.net/Platform/Destiny2/Milestones/'
    });
    return res;
  } catch (err) {
    if (err instanceof BungieAPIError) err.stack = new Error().stack;
    throw err;
  }
}