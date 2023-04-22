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
import { SearchResultOfGroupMemberApplication } from '../../models';
/** @see {@link https://bungie-net.github.io/#GroupV2.GetInvitedIndividuals} */
export type GetInvitedIndividualsParams = {
  /** Page number (starting with 1). Each page has a fixed size of 50 items per page. */
  currentpage: number;
  /** ID of the group. */
  groupId: string;
};

/**
 * Get the list of users who have been invited into the group.
 * @see {@link https://bungie-net.github.io/#GroupV2.GetInvitedIndividuals}
 */
export async function getInvitedIndividuals(
  this: AccessTokenObject | void,
  params: GetInvitedIndividualsParams
): Promise<BungieNetResponse<SearchResultOfGroupMemberApplication>> {
  const token = (this as AccessTokenObject)?.access_token ?? undefined;
  try {
    return await rateLimitedRequest<SearchResultOfGroupMemberApplication>(token, {
      method: 'GET',
      url: `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Members/InvitedIndividuals/`,
      params: {
        currentpage: params.currentpage
      }
    });
  } catch (err) {
    if (err instanceof BungieAPIError) err.stack = new Error().stack;
    throw err;
  }
}
