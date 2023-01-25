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
import { DestinyLeaderboard } from '../../schemas/index.js';
/** @see {@link https://bungie-net.github.io/#Destiny2.GetLeaderboards} */
export declare type GetLeaderboardsParams = {
    /** The Destiny membershipId of the user to retrieve. */
    destinyMembershipId: string;
    /**
     * Maximum number of top players to return. Use a large number to get entire
     * leaderboard.
    */
    maxtop?: number;
    /** A valid non-BungieNet membership type. */
    membershipType: BungieMembershipType;
    /**
     * List of game modes for which to get leaderboards. See the documentation for
     * DestinyActivityModeType for valid values, and pass in string representation,
     * comma delimited.
    */
    modes?: string;
    /** ID of stat to return rather than returning all Leaderboard stats. */
    statid?: string;
};
/**
 * Gets leaderboards with the signed in user's friends and the supplied
 * destinyMembershipId as the focus. PREVIEW: This endpoint has not yet been
 * implemented. It is being returned for a preview of future functionality, and for
 * public comment/suggestion/preparation.
 * @see {@link https://bungie-net.github.io/#Destiny2.GetLeaderboards}
*/
export declare function GetLeaderboards(this: InstancedImport, params: GetLeaderboardsParams): Promise<BungieNetResponse<{
    [key: string]: {
        [key: string]: DestinyLeaderboard;
    };
}>>;
