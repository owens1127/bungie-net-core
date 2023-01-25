

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function GetForumTagSuggestions(params) {
  return rateLimitedRequest(this.client.access_token, {
    method: 'GET',
    url: 'https://www.bungie.net/Platform/Forum/GetForumTagSuggestions/',
    params: {
      partialtag: params.partialtag
    }
  });
}