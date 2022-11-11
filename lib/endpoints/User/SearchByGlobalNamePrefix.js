

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function SearchByGlobalNamePrefix(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/User/Search/Prefix/${params.displayNamePrefix}/${params.page}/`
  });
}