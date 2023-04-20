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
import { BungieMembershipType } from '../../schemas';
import { GroupMemberLeaveResult } from '../../schemas';
/** @see {@link https://bungie-net.github.io/#GroupV2.KickMember} */
export type KickMemberParams = {
  /** Group ID to kick the user from. */
  groupId: string;
  /** Membership ID to kick. */
  membershipId: string;
  /** Membership type of the provided membership ID. */
  membershipType: BungieMembershipType;
};

/**
 * Kick a member from the given group, forcing them to reapply if they wish to re-
 * join the group. You must have suitable permissions in the group to perform this
 * operation.
 * @see {@link https://bungie-net.github.io/#GroupV2.KickMember}
 */
export async function kickMember(
  this: InstancedImport | AccessTokenObject | void,
  params: KickMemberParams
): Promise<BungieNetResponse<GroupMemberLeaveResult>> {
  const token =
    ((this as InstancedImport)?.client?.access_token as string) ?? (this as AccessTokenObject)?.access_token ?? null;
  try {
    return await rateLimitedRequest<GroupMemberLeaveResult>(token, {
      method: 'POST',
      url: `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Members/${params.membershipType}/${params.membershipId}/Kick/`
    });
  } catch (err) {
    if (err instanceof BungieAPIError) err.stack = new Error().stack;
    throw err;
  }
}
