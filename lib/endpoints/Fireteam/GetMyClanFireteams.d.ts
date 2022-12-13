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
import { FireteamPlatform } from '../../schemas/index.js';
import { SearchResultOfFireteamResponse } from '../../schemas/index.js';
/** @see {@link https://bungie-net.github.io/#Fireteam.GetMyClanFireteams} */
export declare type GetMyClanFireteamsParams = {
    /**
     * If true, filter by clan. Otherwise, ignore the clan and show all of the user's
     * fireteams.
    */
    groupFilter?: boolean;
    /**
     * The group id of the clan. (This parameter is ignored unless the optional query
     * parameter groupFilter is true).
    */
    groupId: string;
    /** If true, return fireteams that have been closed. */
    includeClosed: boolean;
    /** An optional language filter. */
    langFilter?: string;
    /** Deprecated parameter, ignored. */
    page: number;
    /** The platform filter. */
    platform: FireteamPlatform;
};
/**
 * Gets a listing of all fireteams that caller is an applicant, a member, or an
 * alternate of.
 * @see {@link https://bungie-net.github.io/#Fireteam.GetMyClanFireteams}
*/
export declare function GetMyClanFireteams(this: BungieClient, params: GetMyClanFireteamsParams): Promise<BungieNetResponse<SearchResultOfFireteamResponse>>;
