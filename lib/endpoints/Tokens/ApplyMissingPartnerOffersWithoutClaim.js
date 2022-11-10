

import { rateLimitedRequest } from '../../util/rate-limiter';
export function ApplyMissingPartnerOffersWithoutClaim(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'POST',
    url: `https://www.bungie.net/Platform/Tokens/Partner/ApplyMissingOffers/${params.partnerApplicationId}/${params.targetBnetMembershipId}/`
  });
}