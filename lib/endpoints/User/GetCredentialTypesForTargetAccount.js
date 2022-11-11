

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function GetCredentialTypesForTargetAccount(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/User/GetCredentialTypesForTargetAccount/${params.membershipId}/`
  });
}