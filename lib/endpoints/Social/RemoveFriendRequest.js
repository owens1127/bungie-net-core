

import { rateLimitedRequest } from '../../util/rate-limiter';
export function RemoveFriendRequest(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'POST',
    url: `https://www.bungie.net/Platform/Social/Friends/Requests/Remove/${params.membershipId}/`
  });
}