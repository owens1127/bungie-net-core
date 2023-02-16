

import { rateLimitedRequest } from '../../util/rate-limiter.js';
import { BungieAPIError } from '../../errors/BungieAPIError.js';
export async function getAdminsAndFounderOfGroup(params) {
  const token = this?.client?.access_token ?? this?.access_token ?? null;
  try {
    const res = await rateLimitedRequest(token, {
      method: 'GET',
      url: `https://www.bungie.net/Platform/GroupV2/${params.groupId}/AdminsAndFounder/`,
      params: {
        currentpage: params.currentpage
      }
    });
    return res;
  } catch (err) {
    if (err instanceof BungieAPIError) err.stack = new Error().stack;
    throw err;
  }
}