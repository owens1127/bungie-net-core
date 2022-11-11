

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function GetBungieNetUserById(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/User/GetBungieNetUserById/${params.id}/`
  });
}