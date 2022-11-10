

import { rateLimitedRequest } from '../../util/rate-limiter';
export function GetCommunityContent(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/CommunityContent/Get/${params.sort}/${params.mediaFilter}/${params.page}/`
  });
}