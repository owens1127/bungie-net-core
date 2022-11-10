

import { rateLimitedRequest } from '../../util/rate-limiter';
export function SearchContentByTagAndType(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/Content/SearchContentByTagAndType/${params.tag}/${params.type}/${params.locale}/`,
    params: {
      currentpage: params.currentpage,
      head: params.head,
      itemsperpage: params.itemsperpage
    }
  });
}