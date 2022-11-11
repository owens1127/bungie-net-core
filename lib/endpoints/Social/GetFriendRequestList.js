

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function GetFriendRequestList() {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: 'https://www.bungie.net/Platform/Social/Friends/Requests/'
  });
}