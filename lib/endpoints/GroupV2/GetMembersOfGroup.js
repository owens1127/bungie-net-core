

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function GetMembersOfGroup(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Members/`,
    params: {
      currentpage: params.currentpage,
      memberType: params.memberType,
      nameSearch: params.nameSearch
    }
  });
}