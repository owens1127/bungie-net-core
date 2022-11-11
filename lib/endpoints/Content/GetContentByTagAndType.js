

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function GetContentByTagAndType(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/Content/GetContentByTagAndType/${params.tag}/${params.type}/${params.locale}/`,
    params: {
      head: params.head
    }
  });
}