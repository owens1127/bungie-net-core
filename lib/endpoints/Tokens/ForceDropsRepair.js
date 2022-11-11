

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function ForceDropsRepair() {
  return rateLimitedRequest(this.access_token, {
    method: 'POST',
    url: 'https://www.bungie.net/Platform/Tokens/Partner/ForceDropsRepair/'
  });
}