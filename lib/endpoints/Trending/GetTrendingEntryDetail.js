

import { rateLimitedRequest } from '../../util/rate-limiter';
export function GetTrendingEntryDetail(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/Trending/Details/${params.trendingEntryType}/${params.identifier}/`
  });
}