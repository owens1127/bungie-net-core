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
import { BungieMembershipType } from '../../schemas/index.js'
import { GroupApplicationRequest } from '../../schemas/index.js'
/** @see {@link https://bungie-net.github.io/#GroupV2.ApprovePending} */
export type ApprovePendingParams = {
  /** ID of the group. */
  groupId: string;
  /** The membership id being approved. */
  membershipId: string;
  /** Membership type of the supplied membership ID. */
  membershipType: BungieMembershipType;
}

/**
 * Approve the given membershipId to join the group/clan as long as they have
 * applied.
 * @see {@link https://bungie-net.github.io/#GroupV2.ApprovePending}
*/
export async function approvePending(this: InstancedImport | AccessTokenObject | void, params: ApprovePendingParams, body: GroupApplicationRequest): Promise<BungieNetResponse<boolean>> {
const token = (this as InstancedImport)?.client?.access_token as string ?? (this as AccessTokenObject)?.access_token ?? null
  try {
    return await rateLimitedRequest<boolean>(token, {
      method: 'POST',
      url: `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Members/Approve/${params.membershipType}/${params.membershipId}/`    ,
      body
    });
  } catch (err) {
    if (err instanceof BungieAPIError) err.stack = new Error().stack
    throw err
  }
}
