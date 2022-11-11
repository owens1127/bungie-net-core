

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function GetApplicationApiUsage(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/App/ApiUsage/${params.applicationId}/`,
    params: {
      end: params.end,
      start: params.start
    }
  });
}