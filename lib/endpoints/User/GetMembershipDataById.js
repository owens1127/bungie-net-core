

import { rateLimitedRequest } from '../../util/rate-limiter';
export function GetMembershipDataById(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/User/GetMembershipsById/${params.membershipId}/${params.membershipType}/`
  });
}