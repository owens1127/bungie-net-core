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
import { ForumTopicsCategoryFiltersEnum } from '../../models';
import { CommunityContentSortMode } from '../../models';
import { PostSearchResponse } from '../../models';
/** @see {@link https://bungie-net.github.io/#CommunityContent.GetCommunityContent} */
export type GetCommunityContentParams = {
  /** The type of media to get */
  mediaFilter: ForumTopicsCategoryFiltersEnum;
  /** Zero based page */
  page: number;
  /** The sort mode. */
  sort: CommunityContentSortMode;
};

/**
 * Returns community content.
 * @see {@link https://bungie-net.github.io/#CommunityContent.GetCommunityContent}
 */
export async function getCommunityContent(
  params: GetCommunityContentParams,
  client: BungieClientProtocol
): Promise<BungieNetResponse<PostSearchResponse>> {
  return client.fetch<PostSearchResponse>({
    method: 'GET',
    url: `https://www.bungie.net/Platform/CommunityContent/Get/${params.sort}/${params.mediaFilter}/${params.page}/`
  });
}
