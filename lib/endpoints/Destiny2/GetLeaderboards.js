

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function GetLeaderboards(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/${params.membershipType}/Account/${params.destinyMembershipId}/Stats/Leaderboards/`,
    params: {
      maxtop: params.maxtop,
      modes: params.modes,
      statid: params.statid
    }
  });
}