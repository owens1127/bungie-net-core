

import { rateLimitedRequest } from '../../util/rate-limiter';
export function GroupSearch(body) {
  return rateLimitedRequest(this.access_token, {
    method: 'POST',
    url: 'https://www.bungie.net/Platform/GroupV2/Search/',
    body
  });
}