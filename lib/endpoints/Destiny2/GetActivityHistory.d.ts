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
import { InstancedImport } from '../../util/client.js';
import { BungieMembershipType } from '../../schemas/index.js';
import { DestinyActivityModeType } from '../../schemas/index.js';
import { DestinyActivityHistoryResults } from '../../schemas/index.js';
/** @see {@link https://bungie-net.github.io/#Destiny2.GetActivityHistory} */
export declare type GetActivityHistoryParams = {
    /** The id of the character to retrieve. */
    characterId: string;
    /** Number of rows to return */
    count?: number;
    /** The Destiny membershipId of the user to retrieve. */
    destinyMembershipId: string;
    /** A valid non-BungieNet membership type. */
    membershipType: BungieMembershipType;
    /**
     * A filter for the activity mode to be returned. None returns all activities. See
     * the documentation for DestinyActivityModeType for valid values, and pass in
     * string representation.
    */
    mode?: DestinyActivityModeType;
    /** Page number to return, starting with 0. */
    page?: number;
};
/**
 * Gets activity history stats for indicated character.
 * @see {@link https://bungie-net.github.io/#Destiny2.GetActivityHistory}
*/
export declare function GetActivityHistory(this: InstancedImport, params: GetActivityHistoryParams): Promise<BungieNetResponse<DestinyActivityHistoryResults>>;
