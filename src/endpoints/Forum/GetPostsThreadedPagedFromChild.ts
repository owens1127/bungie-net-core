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
import { ForumPostSortEnum } from '../../models';
import { PostSearchResponse } from '../../models';
/** @see {@link https://bungie-net.github.io/#Forum.GetPostsThreadedPagedFromChild} */
export type GetPostsThreadedPagedFromChildParams = {
  childPostId: string;
  page: number;
  pageSize: number;
  replySize: number;
  rootThreadMode: boolean;
  /** If this value is not null or empty, banned posts are requested to be returned */
  showbanned?: string;
  sortMode: ForumPostSortEnum;
};

/**
 * Returns a thread of posts starting at the topicId of the input childPostId,
 * optionally returning replies to those posts as well as the original parent.
 * @see {@link https://bungie-net.github.io/#Forum.GetPostsThreadedPagedFromChild}
 */
export async function getPostsThreadedPagedFromChild(
  params: GetPostsThreadedPagedFromChildParams,
  client: BungieClientProtocol
): Promise<BungieNetResponse<PostSearchResponse>> {
  return client.fetch<PostSearchResponse>({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Forum/GetPostsThreadedPagedFromChild/${params.childPostId}/${params.page}/${params.pageSize}/${params.replySize}/${params.rootThreadMode}/${params.sortMode}/`,
    params: {
      showbanned: params.showbanned
    }
  });
}
