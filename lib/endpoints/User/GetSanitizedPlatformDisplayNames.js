

import { rateLimitedRequest } from '../../util/rate-limiter';
export function GetSanitizedPlatformDisplayNames(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/User/GetSanitizedPlatformDisplayNames/${params.membershipId}/`
  });
}