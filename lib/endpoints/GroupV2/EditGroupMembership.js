

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function EditGroupMembership(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'POST',
    url: `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Members/${params.membershipType}/${params.membershipId}/SetMembershipType/${params.memberType}/`
  });
}