

import { rateLimitedRequest } from '../../util/rate-limiter';
export function ClaimPartnerOffer(body) {
  return rateLimitedRequest(this.access_token, {
    method: 'POST',
    url: 'https://www.bungie.net/Platform/Tokens/Partner/ClaimOffer/',
    body
  });
}