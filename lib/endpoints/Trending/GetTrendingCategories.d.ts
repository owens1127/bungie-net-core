/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.17.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-typedef code generator program,
 * adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Do not edit these files manually.
 */
import { BungieNetResponse } from '../../util/server-response.js';
import { InstancedImport } from '../../util/client.js';
import { TrendingCategories } from '../../schemas/index.js';
/**
 * Returns trending items for Bungie.net, collapsed into the first page of items
 * per category. For pagination within a category, call GetTrendingCategory.
 * @see {@link https://bungie-net.github.io/#Trending.GetTrendingCategories}
*/
export declare function GetTrendingCategories(this: InstancedImport): Promise<BungieNetResponse<TrendingCategories>>;
