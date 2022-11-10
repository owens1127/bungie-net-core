

import { rateLimitedRequest } from '../../util/rate-limiter';
export function GetInvitedIndividuals(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Members/InvitedIndividuals/`
  });
}