

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function GetPartnerOfferSkuHistory(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/Tokens/Partner/History/${params.partnerApplicationId}/${params.targetBnetMembershipId}/`
  });
}