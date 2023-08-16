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
import { FireteamDateRange } from '../enums/Fireteam/FireteamDateRange';
import { FireteamPlatform } from '../enums/Fireteam/FireteamPlatform';
import { FireteamPublicSearchOption } from '../enums/Fireteam/FireteamPublicSearchOption';
import { FireteamSlotSearch } from '../enums/Fireteam/FireteamSlotSearch';
import { addParam } from '../util';
import { SearchResultOfFireteamSummary } from '../models/SearchResultOfFireteamSummary';
import { SearchResultOfFireteamResponse } from '../models/SearchResultOfFireteamResponse';
import { FireteamResponse } from '../models/Fireteam/FireteamResponse';

/**
 * Gets a count of all active non-public fireteams for the specified clan. Maximum
 * value returned is 25.
 * @see {@link https://bungie-net.github.io/#Fireteam.GetActivePrivateClanFireteamCount}
 */
export async function getActivePrivateClanFireteamCount(
  client: BungieClientProtocol,
  params: {
    /** The group id of the clan. */
    groupId: string;
  }
): Promise<BungieNetResponse<number>> {
  const url = new URL(
    `https://www.bungie.net/Platform/Fireteam/Clan/${params.groupId}/ActiveCount/`
  );
  return client.fetch({ method: 'GET', url });
}

/**
 * Gets a listing of all of this clan's fireteams that are have available slots.
 * Caller is not checked for join criteria so caching is maximized.
 * @see {@link https://bungie-net.github.io/#Fireteam.GetAvailableClanFireteams}
 */
export async function getAvailableClanFireteams(
  client: BungieClientProtocol,
  params: {
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
  }
): Promise<BungieNetResponse<SearchResultOfFireteamSummary>> {
  const url = new URL(
    `https://www.bungie.net/Platform/Fireteam/Clan/${params.groupId}/Available/${params.platform}/${params.activityType}/${params.dateRange}/${params.slotFilter}/${params.publicOnly}/${params.page}/`
  );
  addParam(url, params['excludeImmediate'], 'excludeImmediate');
  addParam(url, params['langFilter'], 'langFilter');
  return client.fetch({ method: 'GET', url });
}

/**
 * Gets a listing of all public fireteams starting now with open slots. Caller is
 * not checked for join criteria so caching is maximized.
 * @see {@link https://bungie-net.github.io/#Fireteam.SearchPublicAvailableClanFireteams}
 */
export async function searchPublicAvailableClanFireteams(
  client: BungieClientProtocol,
  params: {
    /** The activity type to filter by. */
    activityType: number;
    /** The date range to grab available fireteams. */
    dateRange: FireteamDateRange;
    /**
     * If you wish the result to exclude immediate fireteams, set this to true.
     * Immediate-only can be forced using the dateRange enum.
     */
    excludeImmediate?: boolean;
    /** An optional language filter. */
    langFilter?: string;
    /** Zero based page */
    page: number;
    /** The platform filter. */
    platform: FireteamPlatform;
    /** Filters based on available slots */
    slotFilter: FireteamSlotSearch;
  }
): Promise<BungieNetResponse<SearchResultOfFireteamSummary>> {
  const url = new URL(
    `https://www.bungie.net/Platform/Fireteam/Search/Available/${params.platform}/${params.activityType}/${params.dateRange}/${params.slotFilter}/${params.page}/`
  );
  addParam(url, params['excludeImmediate'], 'excludeImmediate');
  addParam(url, params['langFilter'], 'langFilter');
  return client.fetch({ method: 'GET', url });
}

/**
 * Gets a listing of all fireteams that caller is an applicant, a member, or an
 * alternate of.
 * @see {@link https://bungie-net.github.io/#Fireteam.GetMyClanFireteams}
 */
export async function getMyClanFireteams(
  client: BungieClientProtocol,
  params: {
    /**
     * If true, filter by clan. Otherwise, ignore the clan and show all of the user's
     * fireteams.
     */
    groupFilter?: boolean;
    /**
     * The group id of the clan. (This parameter is ignored unless the optional query
     * parameter groupFilter is true).
     */
    groupId: string;
    /** If true, return fireteams that have been closed. */
    includeClosed: boolean;
    /** An optional language filter. */
    langFilter?: string;
    /** Deprecated parameter, ignored. */
    page: number;
    /** The platform filter. */
    platform: FireteamPlatform;
  }
): Promise<BungieNetResponse<SearchResultOfFireteamResponse>> {
  const url = new URL(
    `https://www.bungie.net/Platform/Fireteam/Clan/${params.groupId}/My/${params.platform}/${params.includeClosed}/${params.page}/`
  );
  addParam(url, params['groupFilter'], 'groupFilter');
  addParam(url, params['langFilter'], 'langFilter');
  return client.fetch({ method: 'GET', url });
}

/**
 * Gets a specific fireteam.
 * @see {@link https://bungie-net.github.io/#Fireteam.GetClanFireteam}
 */
export async function getClanFireteam(
  client: BungieClientProtocol,
  params: {
    /** The unique id of the fireteam. */
    fireteamId: string;
    /** The group id of the clan. */
    groupId: string;
  }
): Promise<BungieNetResponse<FireteamResponse>> {
  const url = new URL(
    `https://www.bungie.net/Platform/Fireteam/Clan/${params.groupId}/Summary/${params.fireteamId}/`
  );
  return client.fetch({ method: 'GET', url });
}
