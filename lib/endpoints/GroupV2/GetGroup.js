

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function GetGroup(params) {
  return rateLimitedRequest(this.client.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/GroupV2/${params.groupId}/`
  });
}