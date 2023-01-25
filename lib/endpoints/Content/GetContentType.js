

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function GetContentType(params) {
  return rateLimitedRequest(this.client.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/Content/GetContentType/${params.type}/`
  });
}