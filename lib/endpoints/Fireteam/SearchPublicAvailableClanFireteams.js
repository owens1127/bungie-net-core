

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function SearchPublicAvailableClanFireteams(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/Fireteam/Search/Available/${params.platform}/${params.activityType}/${params.dateRange}/${params.slotFilter}/${params.page}/`,
    params: {
      langFilter: params.langFilter
    }
  });
}