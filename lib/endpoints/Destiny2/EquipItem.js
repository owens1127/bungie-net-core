

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function EquipItem(body) {
  return rateLimitedRequest(this.access_token, {
    method: 'POST',
    url: 'https://www.bungie.net/Platform/Destiny2/Actions/Items/EquipItem/',
    body
  });
}