/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.5
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
import { BungieNetResponse } from '../../util/server-response';
import { AccessTokenObject } from '../../util/client';
import { DestinyReportOffensePgcrRequest } from '../../schemas';
/** @see {@link https://bungie-net.github.io/#Destiny2.ReportOffensivePostGameCarnageReportPlayer} */
export declare type ReportOffensivePostGameCarnageReportPlayerParams = {
    /** The ID of the activity where you ran into the brigand that you're reporting. */
    activityId: string;
};
/**
 * Report a player that you met in an activity that was engaging in ToS-violating
 * activities. Both you and the offending player must have played in the activityId
 * passed in. Please use this judiciously and only when you have strong suspicions
 * of violation, pretty please.
 * @see {@link https://bungie-net.github.io/#Destiny2.ReportOffensivePostGameCarnageReportPlayer}
*/
export declare function reportOffensivePostGameCarnageReportPlayer(this: AccessTokenObject | void, params: ReportOffensivePostGameCarnageReportPlayerParams, body: DestinyReportOffensePgcrRequest): Promise<BungieNetResponse<number>>;
