

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function GetMyClanFireteams(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/Fireteam/Clan/${params.groupId}/My/${params.platform}/${params.includeClosed}/${params.page}/`,
    params: {
      groupFilter: params.groupFilter,
      langFilter: params.langFilter
    }
  });
}