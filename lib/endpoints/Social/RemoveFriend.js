

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function RemoveFriend(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'POST',
    url: `https://www.bungie.net/Platform/Social/Friends/Remove/${params.membershipId}/`
  });
}