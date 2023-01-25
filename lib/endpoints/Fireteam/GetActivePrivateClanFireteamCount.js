

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function GetActivePrivateClanFireteamCount(params) {
  return rateLimitedRequest(this.client.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/Fireteam/Clan/${params.groupId}/ActiveCount/`
  });
}