

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function GetMembershipFromHardLinkedCredential(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/User/GetMembershipFromHardLinkedCredential/${params.crType}/${params.credential}/`
  });
}