

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function GetPotentialGroupsForMember(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/GroupV2/User/Potential/${params.membershipType}/${params.membershipId}/${params.filter}/${params.groupType}/`
  });
}