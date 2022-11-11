

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function AbdicateFoundership(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'POST',
    url: `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Admin/AbdicateFoundership/${params.membershipType}/${params.founderIdNew}/`
  });
}