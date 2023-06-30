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
import { UserSearchPrefixRequest } from '../../models';
import { UserSearchResponse } from '../../models';
/** @see {@link https://bungie-net.github.io/#User.SearchByGlobalNamePost} */
export type SearchByGlobalNamePostParams = {
  /** The zero-based page of results you desire. */
  page: number;
};

/**
 * Given the prefix of a global display name, returns all users who share that name.
 * @see {@link https://bungie-net.github.io/#User.SearchByGlobalNamePost}
 */
export async function searchByGlobalNamePost(
  params: SearchByGlobalNamePostParams,
  body: UserSearchPrefixRequest,
  client: BungieClientProtocol
): Promise<BungieNetResponse<UserSearchResponse>> {
  return client.fetch<UserSearchResponse>({
    method: 'POST',
    url: `https://www.bungie.net/Platform/User/Search/GlobalName/${params.page}/`,
    body
  });
}
