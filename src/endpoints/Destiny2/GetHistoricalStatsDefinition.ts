/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-net-core code generator program
 * Repository: {@link https://github.com/owensimpson/bungie-net-core}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
//

import { rateLimitedRequest } from '../../util/http/rate-limiter';
import { BungieNetResponse } from '../../interfaces/server-response';
import { AccessTokenObject } from '../../client';
import { BungieAPIError } from '../../errors/BungieAPIError';
import { DestinyHistoricalStatsDefinition } from '../../models';
/**
 * Gets historical stats definitions.
 * @see {@link https://bungie-net.github.io/#Destiny2.GetHistoricalStatsDefinition}
 */
export async function getHistoricalStatsDefinition(
  this: AccessTokenObject | void
): Promise<BungieNetResponse<{ [key: string]: DestinyHistoricalStatsDefinition }>> {
  const token = (this as AccessTokenObject)?.access_token ?? undefined;
  try {
    return await rateLimitedRequest<{ [key: string]: DestinyHistoricalStatsDefinition }>(token, {
      method: 'GET',
      url: 'https://www.bungie.net/Platform/Destiny2/Stats/Definition/'
    });
  } catch (err) {
    if (err instanceof BungieAPIError) err.stack = new Error().stack;
    throw err;
  }
}
