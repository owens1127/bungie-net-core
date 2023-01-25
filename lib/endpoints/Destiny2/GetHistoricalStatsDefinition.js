

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function GetHistoricalStatsDefinition() {
  return rateLimitedRequest(this.client.access_token, {
    method: 'GET',
    url: 'https://www.bungie.net/Platform/Destiny2/Stats/Definition/'
  });
}