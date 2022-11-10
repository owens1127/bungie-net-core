

import { rateLimitedRequest } from '../../util/rate-limiter';
export function GetTrendingCategory(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/Trending/Categories/${params.categoryId}/${params.pageNumber}/`
  });
}