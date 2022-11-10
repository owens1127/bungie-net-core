

import { rateLimitedRequest } from '../../util/rate-limiter';
export function GetItem(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/${params.membershipType}/Profile/${params.destinyMembershipId}/Item/${params.itemInstanceId}/`,
    params: {
      components: params.components ? params.components.join(',') : undefined
    }
  });
}