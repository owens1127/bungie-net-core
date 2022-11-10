

import { rateLimitedRequest } from '../../util/rate-limiter';
export function ReportOffensivePostGameCarnageReportPlayer(params, body) {
  return rateLimitedRequest(this.access_token, {
    method: 'POST',
    url: `https://stats.bungie.net/Platform/Destiny2/Stats/PostGameCarnageReport/${params.activityId}/Report/`,
    body
  });
}