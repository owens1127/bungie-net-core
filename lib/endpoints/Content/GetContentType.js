

import { rateLimitedRequest } from '../../util/rate-limiter';
export function GetContentType(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/Content/GetContentType/${params.type}/`
  });
}