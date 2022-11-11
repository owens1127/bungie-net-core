

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function GetGroupByNameV2(body) {
  return rateLimitedRequest(this.access_token, {
    method: 'POST',
    url: 'https://www.bungie.net/Platform/GroupV2/NameV2/',
    body
  });
}