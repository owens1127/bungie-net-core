

import { rateLimitedRequest } from '../../util/rate-limiter.js';
export function GetDestinyEntityDefinition(params) {
  return rateLimitedRequest(this.client.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/Manifest/${params.entityType}/${params.hashIdentifier}/`
  });
}