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

import { rateLimitedRequest } from '../../util/rate-limiter.js';
import { BungieNetResponse } from '../../util/server-response.js';
import { InstancedImport, AccessTokenObject } from '../../util/client.js';
import { BungieAPIError } from '../../errors/BungieAPIError.js';
import { GroupApplicationListRequest } from '../../schemas/index.js'
import { EntityActionResult } from '../../schemas/index.js'
/** @see {@link https://bungie-net.github.io/#GroupV2.ApprovePendingForList} */
export type ApprovePendingForListParams = {
  /** ID of the group. */
  groupId: string;
}

/**
 * Approve all of the pending users for the given group.
 * @see {@link https://bungie-net.github.io/#GroupV2.ApprovePendingForList}
*/
export async function approvePendingForList(this: InstancedImport | AccessTokenObject | void, params: ApprovePendingForListParams, body: GroupApplicationListRequest): Promise<BungieNetResponse<EntityActionResult[]>> {
const token = (this as InstancedImport)?.client?.access_token as string ?? (this as AccessTokenObject)?.access_token ?? null
  try {
    return await rateLimitedRequest<EntityActionResult[]>(token, {
      method: 'POST',
      url: `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Members/ApproveList/`    ,
      body
    });
  } catch (err) {
    if (err instanceof BungieAPIError) err.stack = new Error().stack
    throw err
  }
}
