

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function GetAvailableLocales() {
  return rateLimitedRequest(this.client.access_token, {
    method: 'GET',
    url: 'https://www.bungie.net/Platform/GetAvailableLocales/'
  });
}