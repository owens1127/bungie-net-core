

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function GetUniqueWeaponHistory(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/${params.membershipType}/Account/${params.destinyMembershipId}/Character/${params.characterId}/Stats/UniqueWeapons/`
  });
}