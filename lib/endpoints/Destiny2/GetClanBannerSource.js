

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function GetClanBannerSource() {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: 'https://www.bungie.net/Platform/Destiny2/Clan/ClanBannerDictionary/'
  });
}