

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function GetLeaderboardsForCharacter(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/Stats/Leaderboards/${params.membershipType}/${params.destinyMembershipId}/${params.characterId}/`,
    params: {
      maxtop: params.maxtop,
      modes: params.modes,
      statid: params.statid
    }
  });
}