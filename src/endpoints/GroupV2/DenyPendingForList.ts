/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.5
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
import { GroupApplicationListRequest } from '../../schemas';
import { EntityActionResult } from '../../schemas';
/** @see {@link https://bungie-net.github.io/#GroupV2.DenyPendingForList} */
export type DenyPendingForListParams = {
  /** ID of the group. */
  groupId: string;
};

/**
 * Deny all of the pending users for the given group that match the passed-in .
 * @see {@link https://bungie-net.github.io/#GroupV2.DenyPendingForList}
 */
export async function denyPendingForList(
  this: AccessTokenObject | void,
  params: DenyPendingForListParams,
  body: GroupApplicationListRequest
): Promise<BungieNetResponse<EntityActionResult[]>> {
  const token = (this as AccessTokenObject)?.access_token ?? undefined;
  try {
    return await rateLimitedRequest<EntityActionResult[]>(token, {
      method: 'POST',
      url: `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Members/DenyList/`,
      body
    });
  } catch (err) {
    if (err instanceof BungieAPIError) err.stack = new Error().stack;
    throw err;
  }
}
