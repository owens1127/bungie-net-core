

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function IndividualGroupInviteCancel(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'POST',
    url: `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Members/IndividualInviteCancel/${params.membershipType}/${params.membershipId}/`
  });
}