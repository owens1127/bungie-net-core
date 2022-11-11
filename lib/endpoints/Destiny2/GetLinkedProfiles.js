

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function GetLinkedProfiles(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/${params.membershipType}/Profile/${params.membershipId}/LinkedProfiles/`,
    params: {
      getAllMemberships: params.getAllMemberships
    }
  });
}