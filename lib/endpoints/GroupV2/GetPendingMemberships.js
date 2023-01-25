

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function GetPendingMemberships(params) {
  return rateLimitedRequest(this.client.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Members/Pending/`,
    params: {
      currentpage: params.currentpage
    }
  });
}