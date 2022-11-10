/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.16.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-typedef code generator program,
 * adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Do not edit these files manually.
 */
import { DestinyActivityModeType } from './Definitions/DestinyActivityModeType';
import { BungieMembershipType } from '../../BungieMembershipType';
/**
 * Summary information about the activity that was played.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.HistoricalStats.DestinyHistoricalStatsActivity}
*/
export interface DestinyHistoricalStatsActivity {
    /**
     * The unique hash identifier of the DestinyActivityDefinition that was played. If
     * I had this to do over, it'd be named activityHash. Too late now. Mapped to
     * DestinyActivityDefinition in the manifest.
    */
    readonly referenceId: number;
    /**
     * The unique hash identifier of the DestinyActivityDefinition that was played.
     * Mapped to DestinyActivityDefinition in the manifest.
    */
    readonly directorActivityHash: number;
    /**
     * The unique identifier for this *specific* match that was played.
     *
     * This value can be used to get additional data about this activity such as who
     * else was playing via the GetPostGameCarnageReport endpoint.
    */
    readonly instanceId: string;
    /** Indicates the most specific game mode of the activity that we could find. */
    readonly mode: DestinyActivityModeType;
    /**
     * The list of all Activity Modes to which this activity applies, including
     * aggregates. This will let you see, for example, whether the activity was both
     * Clash and part of the Trials of the Nine event.
    */
    readonly modes: DestinyActivityModeType[];
    /** Whether or not the match was a private match. */
    readonly isPrivate: boolean;
    /** The Membership Type indicating the platform on which this match was played. */
    readonly membershipType: BungieMembershipType;
}
