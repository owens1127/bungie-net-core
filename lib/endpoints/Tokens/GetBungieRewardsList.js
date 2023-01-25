

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function GetBungieRewardsList() {
  return rateLimitedRequest(this.client.access_token, {
    method: 'GET',
    url: 'https://www.bungie.net/Platform/Tokens/Rewards/BungieRewards/'
  });
}