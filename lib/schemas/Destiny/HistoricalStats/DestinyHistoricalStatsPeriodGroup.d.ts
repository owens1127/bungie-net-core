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
import { DestinyHistoricalStatsActivity } from './DestinyHistoricalStatsActivity.js';
import { DestinyHistoricalStatsValue } from './DestinyHistoricalStatsValue.js';
/** @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.HistoricalStats.DestinyHistoricalStatsPeriodGroup} */
export interface DestinyHistoricalStatsPeriodGroup {
    /**
     * Period for the group. If the stat periodType is day, then this will have a
     * specific day. If the type is monthly, then this value will be the first day of
     * the applicable month. This value is not set when the periodType is 'all time'.
    */
    readonly period: string;
    /** If the period group is for a specific activity, this property will be set. */
    readonly activityDetails: DestinyHistoricalStatsActivity;
    /** Collection of stats for the period. */
    readonly values: {
        [key: string]: DestinyHistoricalStatsValue;
    };
}
