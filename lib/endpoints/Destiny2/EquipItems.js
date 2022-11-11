

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function EquipItems(body) {
  return rateLimitedRequest(this.access_token, {
    method: 'POST',
    url: 'https://www.bungie.net/Platform/Destiny2/Actions/Items/EquipItems/',
    body
  });
}