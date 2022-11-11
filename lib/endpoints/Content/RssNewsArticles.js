

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function RssNewsArticles(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/Content/Rss/NewsArticles/${params.pageToken}/`
  });
}