

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function GetAvailableClanFireteams(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/Fireteam/Clan/${params.groupId}/Available/${params.platform}/${params.activityType}/${params.dateRange}/${params.slotFilter}/${params.publicOnly}/${params.page}/`,
    params: {
      langFilter: params.langFilter
    }
  });
}