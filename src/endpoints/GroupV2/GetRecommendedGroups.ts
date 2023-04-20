/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.0
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
//

import { rateLimitedRequest } from '../../util/rate-limiter';
import { BungieNetResponse } from '../../util/server-response';
import { InstancedImport, AccessTokenObject } from '../../util/client';
import { BungieAPIError } from '../../errors/BungieAPIError';
import { GroupDateRange } from '../../schemas';
import { GroupType } from '../../schemas';
import { GroupV2Card } from '../../schemas';
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
  this: InstancedImport | AccessTokenObject | void,
  params: GetRecommendedGroupsParams
): Promise<BungieNetResponse<GroupV2Card[]>> {
  const token =
    ((this as InstancedImport)?.client?.access_token as string) ?? (this as AccessTokenObject)?.access_token ?? null;
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