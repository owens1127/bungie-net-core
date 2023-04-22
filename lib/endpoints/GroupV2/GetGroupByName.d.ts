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
import { GroupType } from '../../models';
import { GroupResponse } from '../../models';
/** @see {@link https://bungie-net.github.io/#GroupV2.GetGroupByName} */
export type GetGroupByNameParams = {
    /** Exact name of the group to find. */
    groupName: string;
    /** Type of group to find. */
    groupType: GroupType;
};
/**
 * Get information about a specific group with the given name and type.
 * @see {@link https://bungie-net.github.io/#GroupV2.GetGroupByName}
*/
export declare function getGroupByName(this: AccessTokenObject | void, params: GetGroupByNameParams): Promise<BungieNetResponse<GroupResponse>>;
