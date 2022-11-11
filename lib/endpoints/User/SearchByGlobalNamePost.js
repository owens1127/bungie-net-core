

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function SearchByGlobalNamePost(params, body) {
  return rateLimitedRequest(this.access_token, {
    method: 'POST',
    url: `https://www.bungie.net/Platform/User/Search/GlobalName/${params.page}/`,
    body
  });
}