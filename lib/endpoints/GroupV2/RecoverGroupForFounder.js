

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function RecoverGroupForFounder(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/GroupV2/Recover/${params.membershipType}/${params.membershipId}/${params.groupType}/`
  });
}