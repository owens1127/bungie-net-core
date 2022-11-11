

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function GetClanWeeklyRewardState(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/Clan/${params.groupId}/WeeklyRewardState/`
  });
}