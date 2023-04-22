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
import { BungieNetResponse } from '../../interfaces/server-response';
import { AccessTokenObject } from '../../client';
/** @see {@link https://bungie-net.github.io/#Fireteam.GetActivePrivateClanFireteamCount} */
export type GetActivePrivateClanFireteamCountParams = {
    /** The group id of the clan. */
    groupId: string;
};
/**
 * Gets a count of all active non-public fireteams for the specified clan. Maximum
 * value returned is 25.
 * @see {@link https://bungie-net.github.io/#Fireteam.GetActivePrivateClanFireteamCount}
*/
export declare function getActivePrivateClanFireteamCount(this: AccessTokenObject | void, params: GetActivePrivateClanFireteamCountParams): Promise<BungieNetResponse<number>>;
