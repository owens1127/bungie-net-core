

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function GetPostGameCarnageReport(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: `https://stats.bungie.net/Platform/Destiny2/Stats/PostGameCarnageReport/${params.activityId}/`
  });
}