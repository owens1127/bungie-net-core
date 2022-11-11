

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function AwaGetActionToken(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/Awa/GetActionToken/${params.correlationId}/`
  });
}