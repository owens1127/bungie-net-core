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
import { FireteamDateRange } from '../../models';
import { FireteamPlatform } from '../../models';
import { FireteamPublicSearchOption } from '../../models';
import { FireteamSlotSearch } from '../../models';
import { SearchResultOfFireteamSummary } from '../../models';
/** @see {@link https://bungie-net.github.io/#Fireteam.GetAvailableClanFireteams} */
export type GetAvailableClanFireteamsParams = {
  /** The activity type to filter by. */
  activityType: number;
  /** The date range to grab available fireteams. */
  dateRange: FireteamDateRange;
  /**
   * If you wish the result to exclude immediate fireteams, set this to true.
   * Immediate-only can be forced using the dateRange enum.
   */
  excludeImmediate?: boolean;
  /** The group id of the clan. */
  groupId: string;
  /** An optional language filter. */
  langFilter?: string;
  /** Zero based page */
  page: number;
  /** The platform filter. */
  platform: FireteamPlatform;
  /** Determines public/private filtering. */
  publicOnly: FireteamPublicSearchOption;
  /** Filters based on available slots */
  slotFilter: FireteamSlotSearch;
};

/**
 * Gets a listing of all of this clan's fireteams that are have available slots.
 * Caller is not checked for join criteria so caching is maximized.
 * @see {@link https://bungie-net.github.io/#Fireteam.GetAvailableClanFireteams}
 */
export async function getAvailableClanFireteams(
  params: GetAvailableClanFireteamsParams,
  client: BungieClientProtocol
): Promise<BungieNetResponse<SearchResultOfFireteamSummary>> {
  return client.fetch<SearchResultOfFireteamSummary>({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Fireteam/Clan/${params.groupId}/Available/${params.platform}/${params.activityType}/${params.dateRange}/${params.slotFilter}/${params.publicOnly}/${params.page}/`,
    params: {
      excludeImmediate: params.excludeImmediate,
      langFilter: params.langFilter
    }
  });
}
