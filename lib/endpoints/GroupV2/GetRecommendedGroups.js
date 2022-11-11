

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function GetRecommendedGroups(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'POST',
    url: `https://www.bungie.net/Platform/GroupV2/Recommended/${params.groupType}/${params.createDateRange}/`
  });
}