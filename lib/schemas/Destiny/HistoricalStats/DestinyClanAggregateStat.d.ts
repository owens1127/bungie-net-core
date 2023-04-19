/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.0
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
import { DestinyActivityModeType } from './Definitions/DestinyActivityModeType.js';
import { DestinyHistoricalStatsValue } from './DestinyHistoricalStatsValue.js';
/** @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.HistoricalStats.DestinyClanAggregateStat} */
export interface DestinyClanAggregateStat {
    /** The id of the mode of stats (allPvp, allPvE, etc) */
    readonly mode: DestinyActivityModeType;
    /** The id of the stat */
    readonly statId: string;
    /** Value of the stat for this player */
    readonly value: DestinyHistoricalStatsValue;
}
