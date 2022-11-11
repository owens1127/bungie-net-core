

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function BanMember(params, body) {
  return rateLimitedRequest(this.access_token, {
    method: 'POST',
    url: `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Members/${params.membershipType}/${params.membershipId}/Ban/`,
    body
  });
}