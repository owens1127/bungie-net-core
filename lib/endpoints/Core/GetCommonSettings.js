

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function GetCommonSettings() {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: 'https://www.bungie.net/Platform/Settings/'
  });
}