

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function GetTrendingCategory(params) {
  return rateLimitedRequest(this.client.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/Trending/Categories/${params.categoryId}/${params.pageNumber}/`
  });
}