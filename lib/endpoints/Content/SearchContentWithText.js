

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function SearchContentWithText(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/Content/Search/${params.locale}/`,
    params: {
      ctype: params.ctype,
      currentpage: params.currentpage,
      head: params.head,
      searchtext: params.searchtext,
      source: params.source,
      tag: params.tag
    }
  });
}