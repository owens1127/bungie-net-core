

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function GetGroupsForMember(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/GroupV2/User/${params.membershipType}/${params.membershipId}/${params.filter}/${params.groupType}/`
  });
}