

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function EditGroup(params, body) {
  return rateLimitedRequest(this.client.access_token, {
    method: 'POST',
    url: `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Edit/`,
    body
  });
}