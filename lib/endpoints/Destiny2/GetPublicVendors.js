

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function GetPublicVendors(params) {
  return rateLimitedRequest(this.client.access_token, {
    method: 'GET',
    url: 'https://www.bungie.net/Platform/Destiny2/Vendors/',
    params: {
      components: params.components ? params.components.join(',') : undefined
    }
  });
}