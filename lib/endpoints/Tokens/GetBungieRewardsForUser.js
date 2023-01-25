

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function GetBungieRewardsForUser(params) {
  return rateLimitedRequest(this.client.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/Tokens/Rewards/GetRewardsForUser/${params.membershipId}/`
  });
}