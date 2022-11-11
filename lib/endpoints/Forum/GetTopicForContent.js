

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function GetTopicForContent(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/Forum/GetTopicForContent/${params.contentId}/`
  });
}