

import { rateLimitedRequest } from '../../util/rate-limiter';
export function GetMembershipDataForCurrentUser() {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: 'https://www.bungie.net/Platform/User/GetMembershipsForCurrentUser/'
  });
}