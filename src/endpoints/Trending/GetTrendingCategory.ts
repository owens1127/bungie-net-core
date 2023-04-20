/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.5
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
//

import { rateLimitedRequest } from '../../util/http/rate-limiter';
import { BungieNetResponse } from '../../util/server-response';
import { AccessTokenObject } from '../../util/client';
import { BungieAPIError } from '../../errors/BungieAPIError';
import { SearchResultOfTrendingEntry } from '../../schemas';
/** @see {@link https://bungie-net.github.io/#Trending.GetTrendingCategory} */
export type GetTrendingCategoryParams = {
  /** The ID of the category for whom you want additional results. */
  categoryId: string;
  /** The page # of results to return. */
  pageNumber: number;
};

/**
 * Returns paginated lists of trending items for a category.
 * @see {@link https://bungie-net.github.io/#Trending.GetTrendingCategory}
 */
export async function getTrendingCategory(
  this: AccessTokenObject | void,
  params: GetTrendingCategoryParams
): Promise<BungieNetResponse<SearchResultOfTrendingEntry>> {
  const token = (this as AccessTokenObject)?.access_token ?? undefined;
  try {
    return await rateLimitedRequest<SearchResultOfTrendingEntry>(token, {
      method: 'GET',
      url: `https://www.bungie.net/Platform/Trending/Categories/${params.categoryId}/${params.pageNumber}/`
    });
  } catch (err) {
    if (err instanceof BungieAPIError) err.stack = new Error().stack;
    throw err;
  }
}
