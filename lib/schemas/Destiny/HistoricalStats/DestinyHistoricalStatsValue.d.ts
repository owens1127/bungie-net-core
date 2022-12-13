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
import { DestinyHistoricalStatsValuePair } from './DestinyHistoricalStatsValuePair';
/** @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.HistoricalStats.DestinyHistoricalStatsValue} */
export interface DestinyHistoricalStatsValue {
    /** Unique ID for this stat */
    readonly statId: string;
    /** Basic stat value. */
    readonly basic: DestinyHistoricalStatsValuePair;
    /** Per game average for the statistic, if applicable */
    readonly pga: DestinyHistoricalStatsValuePair;
    /** Weighted value of the stat if a weight greater than 1 has been assigned. */
    readonly weighted: DestinyHistoricalStatsValuePair;
    /**
     * When a stat represents the best, most, longest, fastest or some other personal
     * best, the actual activity ID where that personal best was established is
     * available on this property.
    */
    readonly activityId?: string;
}
