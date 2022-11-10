

import { rateLimitedRequest } from '../../util/rate-limiter';
export function GetActivePrivateClanFireteamCount(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/Fireteam/Clan/${params.groupId}/ActiveCount/`
  });
}