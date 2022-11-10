

import { rateLimitedRequest } from '../../util/rate-limiter';
export function GetBungieRewardsForUser(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/Tokens/Rewards/GetRewardsForUser/${params.membershipId}/`
  });
}