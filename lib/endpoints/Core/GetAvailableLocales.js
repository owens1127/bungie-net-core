

import { rateLimitedRequest } from '../../util/rate-limiter';
export function GetAvailableLocales() {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: 'https://www.bungie.net/Platform/GetAvailableLocales/'
  });
}