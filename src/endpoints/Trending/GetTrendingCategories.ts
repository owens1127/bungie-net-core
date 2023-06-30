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
import { TrendingCategories } from '../../models';
/**
 * Returns trending items for Bungie.net, collapsed into the first page of items
 * per category. For pagination within a category, call GetTrendingCategory.
 * @see {@link https://bungie-net.github.io/#Trending.GetTrendingCategories}
 */
export async function getTrendingCategories(
  client: BungieClientProtocol
): Promise<BungieNetResponse<TrendingCategories>> {
  return client.fetch<TrendingCategories>({
    method: 'GET',
    url: 'https://www.bungie.net/Platform/Trending/Categories/'
  });
}
