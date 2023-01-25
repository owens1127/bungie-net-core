

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function GetSanitizedPlatformDisplayNames(params) {
  return rateLimitedRequest(this.client.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/User/GetSanitizedPlatformDisplayNames/${params.membershipId}/`
  });
}