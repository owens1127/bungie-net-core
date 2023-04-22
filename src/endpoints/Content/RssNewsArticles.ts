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
import { NewsArticleRssResponse } from '../../models';
/** @see {@link https://bungie-net.github.io/#Content.RssNewsArticles} */
export type RssNewsArticlesParams = {
  /** Optionally filter response to only include news items in a certain category. */
  categoryfilter?: string;
  /** Optionally include full content body for each news item. */
  includebody?: boolean;
  /** Zero-based pagination token for paging through result sets. */
  pageToken: string;
};

/**
 * Returns a JSON string response that is the RSS feed for news articles.
 * @see {@link https://bungie-net.github.io/#Content.RssNewsArticles}
 */
export async function rssNewsArticles(
  this: AccessTokenObject | void,
  params: RssNewsArticlesParams
): Promise<BungieNetResponse<NewsArticleRssResponse>> {
  const token = (this as AccessTokenObject)?.access_token ?? undefined;
  try {
    return await rateLimitedRequest<NewsArticleRssResponse>(token, {
      method: 'GET',
      url: `https://www.bungie.net/Platform/Content/Rss/NewsArticles/${params.pageToken}/`,
      params: {
        categoryfilter: params.categoryfilter,
        includebody: params.includebody
      }
    });
  } catch (err) {
    if (err instanceof BungieAPIError) err.stack = new Error().stack;
    throw err;
  }
}
