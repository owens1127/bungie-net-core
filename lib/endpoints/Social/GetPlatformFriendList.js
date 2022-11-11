

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function GetPlatformFriendList(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/Social/PlatformFriends/${params.friendPlatform}/${params.page}/`
  });
}