

import { rateLimitedRequest } from '../../util/rate-limiter';
export function GetDestinyEntityDefinition(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/Manifest/${params.entityType}/${params.hashIdentifier}/`
  });
}