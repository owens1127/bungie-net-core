

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function GetClanFireteam(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/Fireteam/Clan/${params.groupId}/Summary/${params.fireteamId}/`
  });
}