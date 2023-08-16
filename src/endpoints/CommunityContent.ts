/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-net-core code generator program
 * Repository: {@link https://github.com/owensimpson/bungie-net-core}
 * Do not edit these files manually.
 */
//

import { ForumTopicsCategoryFiltersEnum } from '../enums/Forum/ForumTopicsCategoryFiltersEnum';
import { CommunityContentSortMode } from '../enums/Forum/CommunityContentSortMode';
import { BungieClientProtocol } from './..';
import { BungieNetResponse } from '../interfaces/BungieNetResponse';
import { PostSearchResponse } from '../models/Forum/PostSearchResponse';

/**
 * Returns community content.
 * @see {@link https://bungie-net.github.io/#CommunityContent.GetCommunityContent}
 */
export async function getCommunityContent(
  params: {
    /** The type of media to get */
    mediaFilter: ForumTopicsCategoryFiltersEnum;
    /** Zero based page */
    page: number;
    /** The sort mode. */
    sort: CommunityContentSortMode;
  },
  client: BungieClientProtocol
): Promise<BungieNetResponse<PostSearchResponse>> {
  const url = new URL(
    `https://www.bungie.net/Platform/CommunityContent/Get/${params.sort}/${params.mediaFilter}/${params.page}/`
  );
  return client.fetch({ method: 'GET', url });
}