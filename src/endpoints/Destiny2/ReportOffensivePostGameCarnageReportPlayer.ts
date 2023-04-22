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
import { DestinyReportOffensePgcrRequest } from '../../models';
/** @see {@link https://bungie-net.github.io/#Destiny2.ReportOffensivePostGameCarnageReportPlayer} */
export type ReportOffensivePostGameCarnageReportPlayerParams = {
  /** The ID of the activity where you ran into the brigand that you're reporting. */
  activityId: string;
};

/**
 * Report a player that you met in an activity that was engaging in ToS-violating
 * activities. Both you and the offending player must have played in the activityId
 * passed in. Please use this judiciously and only when you have strong suspicions
 * of violation, pretty please.
 * @see {@link https://bungie-net.github.io/#Destiny2.ReportOffensivePostGameCarnageReportPlayer}
 */
export async function reportOffensivePostGameCarnageReportPlayer(
  this: AccessTokenObject | void,
  params: ReportOffensivePostGameCarnageReportPlayerParams,
  body: DestinyReportOffensePgcrRequest
): Promise<BungieNetResponse<number>> {
  const token = (this as AccessTokenObject)?.access_token ?? undefined;
  try {
    return await rateLimitedRequest<number>(token, {
      method: 'POST',
      url: `https://stats.bungie.net/Platform/Destiny2/Stats/PostGameCarnageReport/${params.activityId}/Report/`,
      body
    });
  } catch (err) {
    if (err instanceof BungieAPIError) err.stack = new Error().stack;
    throw err;
  }
}
