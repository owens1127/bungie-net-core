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
import { BungieNetResponse } from '../../util/server-response';
import { BungieClient } from '../../util/client';
import { PlatformFriendType } from '../../schemas';
import { PlatformFriendResponse } from '../../schemas';
/** @see {@link https://bungie-net.github.io/#Social.GetPlatformFriendList} */
export declare type GetPlatformFriendListParams = {
    /** The platform friend type. */
    friendPlatform: PlatformFriendType;
    /** The zero based page to return. Page size is 100. */
    page: string;
};
/**
 * Gets the platform friend of the requested type, with additional information if
 * they have Bungie accounts. Must have a recent login session with said platform.
 * @see {@link https://bungie-net.github.io/#Social.GetPlatformFriendList}
*/
export declare function GetPlatformFriendList(this: BungieClient, params: GetPlatformFriendListParams): Promise<BungieNetResponse<PlatformFriendResponse>>;
