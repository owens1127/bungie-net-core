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
import { GroupDateRange } from '../../models';
import { GroupType } from '../../models';
import { GroupV2Card } from '../../models';
/** @see {@link https://bungie-net.github.io/#GroupV2.GetRecommendedGroups} */
export type GetRecommendedGroupsParams = {
  /** Requested range in which to pull recommended groups */
  createDateRange: GroupDateRange;
  /** Type of groups requested */
  groupType: GroupType;
};

/**
 * Gets groups recommended for you based on the groups to whom those you follow
 * belong.
 * @see {@link https://bungie-net.github.io/#GroupV2.GetRecommendedGroups}
 */
export async function getRecommendedGroups(
  this: AccessTokenObject | void,
  params: GetRecommendedGroupsParams
): Promise<BungieNetResponse<GroupV2Card[]>> {
  const token = (this as AccessTokenObject)?.access_token ?? undefined;
  try {
    return await rateLimitedRequest<GroupV2Card[]>(token, {
      method: 'POST',
      url: `https://www.bungie.net/Platform/GroupV2/Recommended/${params.groupType}/${params.createDateRange}/`
    });
  } catch (err) {
    if (err instanceof BungieAPIError) err.stack = new Error().stack;
    throw err;
  }
}
