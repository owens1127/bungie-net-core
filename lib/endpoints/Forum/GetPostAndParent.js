

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function GetPostAndParent(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/Forum/GetPostAndParent/${params.childPostId}/`,
    params: {
      showbanned: params.showbanned
    }
  });
}