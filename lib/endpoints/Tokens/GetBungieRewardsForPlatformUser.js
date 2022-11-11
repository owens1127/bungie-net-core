

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function GetBungieRewardsForPlatformUser(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/Tokens/Rewards/GetRewardsForPlatformUser/${params.membershipId}/${params.membershipType}/`
  });
}