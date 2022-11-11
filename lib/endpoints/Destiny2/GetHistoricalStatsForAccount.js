

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function GetHistoricalStatsForAccount(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/${params.membershipType}/Account/${params.destinyMembershipId}/Stats/`,
    params: {
      groups: params.groups ? params.groups.join(',') : undefined
    }
  });
}