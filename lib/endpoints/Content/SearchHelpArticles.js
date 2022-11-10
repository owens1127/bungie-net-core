

import { rateLimitedRequest } from '../../util/rate-limiter';
export function SearchHelpArticles(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/Content/SearchHelpArticles/${params.searchtext}/${params.size}/`
  });
}