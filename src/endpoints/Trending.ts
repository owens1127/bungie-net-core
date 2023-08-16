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

import { BungieClientProtocol } from './..';
import { BungieNetResponse } from '../interfaces/BungieNetResponse';
import { TrendingCategories } from '../models/Trending/TrendingCategories';
import { SearchResultOfTrendingEntry } from '../models/SearchResultOfTrendingEntry';
import { TrendingEntryType } from '../enums/Trending/TrendingEntryType';
import { TrendingDetail } from '../models/Trending/TrendingDetail';

/**
 * Returns trending items for Bungie.net, collapsed into the first page of items
 * per category. For pagination within a category, call GetTrendingCategory.
 * @see {@link https://bungie-net.github.io/#Trending.GetTrendingCategories}
 */
export async function getTrendingCategories(
  client: BungieClientProtocol
): Promise<BungieNetResponse<TrendingCategories>> {
  const url = new URL(`https://www.bungie.net/Platform/Trending/Categories/`);
  return client.fetch({ method: 'GET', url });
}

/**
 * Returns paginated lists of trending items for a category.
 * @see {@link https://bungie-net.github.io/#Trending.GetTrendingCategory}
 */
export async function getTrendingCategory(
  client: BungieClientProtocol,
  params: {
    /** The ID of the category for whom you want additional results. */
    categoryId: string;
    /** The page # of results to return. */
    pageNumber: number;
  }
): Promise<BungieNetResponse<SearchResultOfTrendingEntry>> {
  const url = new URL(
    `https://www.bungie.net/Platform/Trending/Categories/${params.categoryId}/${params.pageNumber}/`
  );
  return client.fetch({ method: 'GET', url });
}

/**
 * Returns the detailed results for a specific trending entry. Note that trending
 * entries are uniquely identified by a combination of *both* the TrendingEntryType
 * *and* the identifier: the identifier alone is not guaranteed to be globally
 * unique.
 * @see {@link https://bungie-net.github.io/#Trending.GetTrendingEntryDetail}
 */
export async function getTrendingEntryDetail(
  client: BungieClientProtocol,
  params: {
    /** The identifier for the entity to be returned. */
    identifier: string;
    /** The type of entity to be returned. */
    trendingEntryType: TrendingEntryType;
  }
): Promise<BungieNetResponse<TrendingDetail>> {
  const url = new URL(
    `https://www.bungie.net/Platform/Trending/Details/${params.trendingEntryType}/${params.identifier}/`
  );
  return client.fetch({ method: 'GET', url });
}
