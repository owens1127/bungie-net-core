

import { rateLimitedRequest } from '../../util/rate-limiter';
export function GetGlobalAlerts(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: 'https://www.bungie.net/Platform/GlobalAlerts/',
    params: {
      includestreaming: params.includestreaming
    }
  });
}