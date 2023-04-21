/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.8
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
//

import { rateLimitedRequest } from '../../util/http/rate-limiter';
import { BungieNetResponse } from '../../util/server-response';
import { AccessTokenObject } from '../../util/client';
import { BungieAPIError } from '../../errors/BungieAPIError';
import { DestinyHistoricalStatsDefinition } from '../../schemas';
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
