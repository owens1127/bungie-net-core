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
import { UserSearchResponse } from '../../schemas/index.js';
/** @see {@link https://bungie-net.github.io/#User.SearchByGlobalNamePrefix} */
export declare type SearchByGlobalNamePrefixParams = {
    /** The display name prefix you're looking for. */
    displayNamePrefix: string;
    /** The zero-based page of results you desire. */
    page: number;
};
/**
 * [OBSOLETE] Do not use this to search users, use SearchByGlobalNamePost instead.
 * @see {@link https://bungie-net.github.io/#User.SearchByGlobalNamePrefix}
*/
export declare function SearchByGlobalNamePrefix(this: InstancedImport, params: SearchByGlobalNamePrefixParams): Promise<BungieNetResponse<UserSearchResponse>>;
