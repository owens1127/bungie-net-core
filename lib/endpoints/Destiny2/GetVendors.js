

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function GetVendors(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/${params.membershipType}/Profile/${params.destinyMembershipId}/Character/${params.characterId}/Vendors/`,
    params: {
      components: params.components ? params.components.join(',') : undefined,
      filter: params.filter
    }
  });
}