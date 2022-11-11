

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function AcceptFriendRequest(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'POST',
    url: `https://www.bungie.net/Platform/Social/Friends/Requests/Accept/${params.membershipId}/`
  });
}