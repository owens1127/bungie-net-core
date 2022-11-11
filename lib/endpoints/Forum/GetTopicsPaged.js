

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function GetTopicsPaged(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/Forum/GetTopicsPaged/${params.page}/${params.pageSize}/${params.group}/${params.sort}/${params.quickDate}/${params.categoryFilter}/`,
    params: {
      locales: params.locales,
      tagstring: params.tagstring
    }
  });
}