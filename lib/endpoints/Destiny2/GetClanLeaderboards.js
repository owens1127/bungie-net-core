

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function GetClanLeaderboards(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/Stats/Leaderboards/Clans/${params.groupId}/`,
    params: {
      maxtop: params.maxtop,
      modes: params.modes,
      statid: params.statid
    }
  });
}