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
import { DestinyReportOffensePgcrRequest } from '../../schemas/index.js';
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
export declare function ReportOffensivePostGameCarnageReportPlayer(this: BungieClient, params: ReportOffensivePostGameCarnageReportPlayerParams, body: DestinyReportOffensePgcrRequest): Promise<BungieNetResponse<number>>;
