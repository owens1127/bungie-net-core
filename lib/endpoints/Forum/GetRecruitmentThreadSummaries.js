

import { rateLimitedRequest } from '../../util/rate-limiter';
export function GetRecruitmentThreadSummaries(body) {
  return rateLimitedRequest(this.access_token, {
    method: 'POST',
    url: 'https://www.bungie.net/Platform/Forum/Recruit/Summaries/',
    body
  });
}