

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function AwaProvideAuthorizationResult(body) {
  return rateLimitedRequest(this.access_token, {
    method: 'POST',
    url: 'https://www.bungie.net/Platform/Destiny2/Awa/AwaProvideAuthorizationResult/',
    body
  });
}