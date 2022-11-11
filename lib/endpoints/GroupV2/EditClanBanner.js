

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function EditClanBanner(params, body) {
  return rateLimitedRequest(this.access_token, {
    method: 'POST',
    url: `https://www.bungie.net/Platform/GroupV2/${params.groupId}/EditClanBanner/`,
    body
  });
}