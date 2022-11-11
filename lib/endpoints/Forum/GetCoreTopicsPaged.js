

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function GetCoreTopicsPaged(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/Forum/GetCoreTopicsPaged/${params.page}/${params.sort}/${params.quickDate}/${params.categoryFilter}/`,
    params: {
      locales: params.locales
    }
  });
}