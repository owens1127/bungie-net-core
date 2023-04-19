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
import { RuntimeGroupMemberType } from '../../schemas/index.js'
import { SearchResultOfGroupMember } from '../../schemas/index.js'
/** @see {@link https://bungie-net.github.io/#GroupV2.GetMembersOfGroup} */
export type GetMembersOfGroupParams = {
  /** Page number (starting with 1). Each page has a fixed size of 50 items per page. */
  currentpage: number;
  /** The ID of the group. */
  groupId: string;
  /** Filter out other member types. Use None for all members. */
  memberType?: RuntimeGroupMemberType;
  /**
   * The name fragment upon which a search should be executed for members with
   * matching display or unique names.
  */
  nameSearch?: string;
}

/**
 * Get the list of members in a given group.
 * @see {@link https://bungie-net.github.io/#GroupV2.GetMembersOfGroup}
*/
export async function getMembersOfGroup(this: InstancedImport | AccessTokenObject | void, params: GetMembersOfGroupParams): Promise<BungieNetResponse<SearchResultOfGroupMember>> {
const token = (this as InstancedImport)?.client?.access_token as string ?? (this as AccessTokenObject)?.access_token ?? null
  try {
    return await rateLimitedRequest<SearchResultOfGroupMember>(token, {
      method: 'GET',
      url: `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Members/`  ,
      params: {
        currentpage: params.currentpage,
        memberType: params.memberType,
        nameSearch: params.nameSearch
      }  
    });
  } catch (err) {
    if (err instanceof BungieAPIError) err.stack = new Error().stack
    throw err
  }
}
