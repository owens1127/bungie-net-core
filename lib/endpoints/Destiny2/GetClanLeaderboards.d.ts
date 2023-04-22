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
import { DestinyLeaderboard } from '../../models';
/** @see {@link https://bungie-net.github.io/#Destiny2.GetClanLeaderboards} */
export type GetClanLeaderboardsParams = {
    /** Group ID of the clan whose leaderboards you wish to fetch. */
    groupId: string;
    /**
     * Maximum number of top players to return. Use a large number to get entire
     * leaderboard.
    */
    maxtop?: number;
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
 * destinyMembershipId as the focus. PREVIEW: This endpoint is still in beta, and
 * may experience rough edges. The schema is in final form, but there may be bugs
 * that prevent desirable operation.
 * @see {@link https://bungie-net.github.io/#Destiny2.GetClanLeaderboards}
*/
export declare function getClanLeaderboards(this: AccessTokenObject | void, params: GetClanLeaderboardsParams): Promise<BungieNetResponse<{
    [key: string]: {
        [key: string]: DestinyLeaderboard;
    };
}>>;
