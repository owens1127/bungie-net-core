

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function GetClanAggregateStats(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/Stats/AggregateClanStats/${params.groupId}/`,
    params: {
      modes: params.modes
    }
  });
}