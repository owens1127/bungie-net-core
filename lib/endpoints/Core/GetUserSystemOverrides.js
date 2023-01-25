

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function GetUserSystemOverrides() {
  return rateLimitedRequest(this.client.access_token, {
    method: 'GET',
    url: 'https://www.bungie.net/Platform/UserSystemOverrides/'
  });
}