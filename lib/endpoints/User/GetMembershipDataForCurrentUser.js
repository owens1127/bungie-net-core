

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function GetMembershipDataForCurrentUser() {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: 'https://www.bungie.net/Platform/User/GetMembershipsForCurrentUser/'
  });
}