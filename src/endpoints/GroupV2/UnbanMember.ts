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
import { BungieMembershipType } from '../../models';
/** @see {@link https://bungie-net.github.io/#GroupV2.UnbanMember} */
export type UnbanMemberParams = {
  groupId: string;
  /** Membership ID of the member to unban from the group */
  membershipId: string;
  /** Membership type of the provided membership ID. */
  membershipType: BungieMembershipType;
};

/**
 * Unbans the requested member, allowing them to re-apply for membership.
 * @see {@link https://bungie-net.github.io/#GroupV2.UnbanMember}
 */
export async function unbanMember(
  this: AccessTokenObject | void,
  params: UnbanMemberParams
): Promise<BungieNetResponse<number>> {
  const token = (this as AccessTokenObject)?.access_token ?? undefined;
  try {
    return await rateLimitedRequest<number>(token, {
      method: 'POST',
      url: `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Members/${params.membershipType}/${params.membershipId}/Unban/`
    });
  } catch (err) {
    if (err instanceof BungieAPIError) err.stack = new Error().stack;
    throw err;
  }
}
