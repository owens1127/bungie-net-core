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
/** @see {@link https://bungie-net.github.io/#Fireteam.GetActivePrivateClanFireteamCount} */
export declare type GetActivePrivateClanFireteamCountParams = {
    /** The group id of the clan. */
    groupId: string;
};
/**
 * Gets a count of all active non-public fireteams for the specified clan. Maximum
 * value returned is 25.
 * @see {@link https://bungie-net.github.io/#Fireteam.GetActivePrivateClanFireteamCount}
*/
export declare function GetActivePrivateClanFireteamCount(this: BungieClient, params: GetActivePrivateClanFireteamCountParams): Promise<BungieNetResponse<number>>;
