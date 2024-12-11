/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-net-core code generator program
 * Repository: {@link https://github.com/owens1127/bungie-net-core}
 * Do not edit these files manually.
 */
//

import { NewsArticleRssItem } from './NewsArticleRssItem';

/** @see {@link https://bungie-net.github.io/#/components/schemas/Content.NewsArticleRssResponse} */

export interface NewsArticleRssResponse {
  readonly CurrentPaginationToken: number;
  readonly NextPaginationToken?: number;
  readonly ResultCountThisPage: number;
  readonly NewsArticles: NewsArticleRssItem[];
  readonly CategoryFilter: string;
  readonly PagerAction: string;
}
