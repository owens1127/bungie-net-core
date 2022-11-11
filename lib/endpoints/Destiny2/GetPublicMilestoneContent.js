

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function GetPublicMilestoneContent(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/Milestones/${params.milestoneHash}/Content/`
  });
}