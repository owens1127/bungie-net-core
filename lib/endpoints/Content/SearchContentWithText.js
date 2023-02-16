

import { rateLimitedRequest } from '../../util/rate-limiter.js';
import { BungieAPIError } from '../../errors/BungieAPIError.js';
export async function searchContentWithText(params) {
  const token = this?.client?.access_token ?? this?.access_token ?? null;
  try {
    const res = await rateLimitedRequest(token, {
      method: 'GET',
      url: `https://www.bungie.net/Platform/Content/Search/${params.locale}/`,
      params: {
        ctype: params.ctype,
        currentpage: params.currentpage,
        head: params.head,
        searchtext: params.searchtext,
        source: params.source,
        tag: params.tag
      }
    });
    return res;
  } catch (err) {
    if (err instanceof BungieAPIError) err.stack = new Error().stack;
    throw err;
  }
}