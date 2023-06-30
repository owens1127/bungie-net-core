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
import { DestinyStatsGroupType } from '../../models';
import { BungieMembershipType } from '../../models';
import { DestinyActivityModeType } from '../../models';
import { PeriodType } from '../../models';
import { DestinyHistoricalStatsByPeriod } from '../../models';
/** @see {@link https://bungie-net.github.io/#Destiny2.GetHistoricalStats} */
export type GetHistoricalStatsParams = {
  /**
   * The id of the character to retrieve. You can omit this character ID or set it to
   * 0 to get aggregate stats across all characters.
   */
  characterId: string;
  /**
   * Last day to return when daily stats are requested. Use the format YYYY-MM-DD.
   * Currently, we cannot allow more than 31 days of daily data to be requested in a
   * single request.
   */
  dayend?: string;
  /**
   * First day to return when daily stats are requested. Use the format YYYY-MM-DD.
   * Currently, we cannot allow more than 31 days of daily data to be requested in a
   * single request.
   */
  daystart?: string;
  /** The Destiny membershipId of the user to retrieve. */
  destinyMembershipId: string;
  /**
   * Group of stats to include, otherwise only general stats are returned. Comma
   * separated list is allowed. Values: General, Weapons, Medals
   */
  groups?: DestinyStatsGroupType[];
  /** A valid non-BungieNet membership type. */
  membershipType: BungieMembershipType;
  /**
   * Game modes to return. See the documentation for DestinyActivityModeType for
   * valid values, and pass in string representation, comma delimited.
   */
  modes?: DestinyActivityModeType[];
  /**
   * Indicates a specific period type to return. Optional. May be: Daily, AllTime, or
   * Activity
   */
  periodType?: PeriodType;
};

/**
 * Gets historical stats for indicated character.
 * @see {@link https://bungie-net.github.io/#Destiny2.GetHistoricalStats}
 */
export async function getHistoricalStats(
  params: GetHistoricalStatsParams,
  client: BungieClientProtocol
): Promise<
  BungieNetResponse<{ [key: string]: DestinyHistoricalStatsByPeriod }>
> {
  return client.fetch<{ [key: string]: DestinyHistoricalStatsByPeriod }>({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/${params.membershipType}/Account/${params.destinyMembershipId}/Character/${params.characterId}/Stats/`,
    params: {
      dayend: params.dayend,
      daystart: params.daystart,
      groups: params.groups ? params.groups.join(',') : undefined,
      modes: params.modes ? params.modes.join(',') : undefined,
      periodType: params.periodType
    }
  });
}
