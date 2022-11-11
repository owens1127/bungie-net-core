

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function GetActivityHistory(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/${params.membershipType}/Account/${params.destinyMembershipId}/Character/${params.characterId}/Stats/Activities/`,
    params: {
      count: params.count,
      mode: params.mode,
      page: params.page
    }
  });
}