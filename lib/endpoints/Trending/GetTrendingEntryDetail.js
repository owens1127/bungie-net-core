

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function GetTrendingEntryDetail(params) {
  return rateLimitedRequest(this.client.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/Trending/Details/${params.trendingEntryType}/${params.identifier}/`
  });
}