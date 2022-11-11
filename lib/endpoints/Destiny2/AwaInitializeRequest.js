

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function AwaInitializeRequest(body) {
  return rateLimitedRequest(this.access_token, {
    method: 'POST',
    url: 'https://www.bungie.net/Platform/Destiny2/Awa/Initialize/',
    body
  });
}