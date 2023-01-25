

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function GetCommunityContent(params) {
  return rateLimitedRequest(this.client.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/CommunityContent/Get/${params.sort}/${params.mediaFilter}/${params.page}/`
  });
}