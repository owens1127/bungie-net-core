

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function GroupSearch(body) {
  return rateLimitedRequest(this.access_token, {
    method: 'POST',
    url: 'https://www.bungie.net/Platform/GroupV2/Search/',
    body
  });
}