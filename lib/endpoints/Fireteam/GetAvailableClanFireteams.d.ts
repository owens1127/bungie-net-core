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
import { BungieClient } from '../../util/client.js';
import { FireteamDateRange } from '../../schemas/index.js';
import { FireteamPlatform } from '../../schemas/index.js';
import { FireteamPublicSearchOption } from '../../schemas/index.js';
import { FireteamSlotSearch } from '../../schemas/index.js';
import { SearchResultOfFireteamSummary } from '../../schemas/index.js';
/** @see {@link https://bungie-net.github.io/#Fireteam.GetAvailableClanFireteams} */
export declare type GetAvailableClanFireteamsParams = {
    /** The activity type to filter by. */
    activityType: number;
    /** The date range to grab available fireteams. */
    dateRange: FireteamDateRange;
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
export declare function GetAvailableClanFireteams(this: BungieClient, params: GetAvailableClanFireteamsParams): Promise<BungieNetResponse<SearchResultOfFireteamSummary>>;
