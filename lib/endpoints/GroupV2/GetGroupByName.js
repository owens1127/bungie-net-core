

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function GetGroupByName(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/GroupV2/Name/${params.groupName}/${params.groupType}/`
  });
}