

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function DeclineFriendRequest(params) {
  return rateLimitedRequest(this.client.access_token, {
    method: 'POST',
    url: `https://www.bungie.net/Platform/Social/Friends/Requests/Decline/${params.membershipId}/`
  });
}