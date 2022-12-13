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
import { DestinyActivityModeType } from './Definitions/DestinyActivityModeType';
import { DestinyHistoricalStatsValue } from './DestinyHistoricalStatsValue';
/** @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.HistoricalStats.DestinyClanAggregateStat} */
export interface DestinyClanAggregateStat {
    /** The id of the mode of stats (allPvp, allPvE, etc) */
    readonly mode: DestinyActivityModeType;
    /** The id of the stat */
    readonly statId: string;
    /** Value of the stat for this player */
    readonly value: DestinyHistoricalStatsValue;
}
