

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function SearchDestinyEntities(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/Armory/Search/${params.type}/${params.searchTerm}/`,
    params: {
      page: params.page
    }
  });
}