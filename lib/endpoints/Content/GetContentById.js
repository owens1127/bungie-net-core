

import { rateLimitedRequest } from '../../util/rate-limiter';
export function GetContentById(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/Content/GetContentById/${params.id}/${params.locale}/`,
    params: {
      head: params.head
    }
  });
}