

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function GetPoll(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/Forum/Poll/${params.topicId}/`
  });
}