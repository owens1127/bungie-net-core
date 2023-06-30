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

import { BungieClientProtocol } from '../../client';
import { BungieNetResponse } from '../../interfaces/BungieNetResponse';
import { SearchResultOfGroupBan } from '../../models';
/** @see {@link https://bungie-net.github.io/#GroupV2.GetBannedMembersOfGroup} */
export type GetBannedMembersOfGroupParams = {
  /** Page number (starting with 1). Each page has a fixed size of 50 entries. */
  currentpage: number;
  /** Group ID whose banned members you are fetching */
  groupId: string;
};

/**
 * Get the list of banned members in a given group. Only accessible to group Admins
 * and above. Not applicable to all groups. Check group features.
 * @see {@link https://bungie-net.github.io/#GroupV2.GetBannedMembersOfGroup}
 */
export async function getBannedMembersOfGroup(
  params: GetBannedMembersOfGroupParams,
  client: BungieClientProtocol
): Promise<BungieNetResponse<SearchResultOfGroupBan>> {
  return client.fetch<SearchResultOfGroupBan>({
    method: 'GET',
    url: `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Banned/`,
    params: {
      currentpage: params.currentpage
    }
  });
}
