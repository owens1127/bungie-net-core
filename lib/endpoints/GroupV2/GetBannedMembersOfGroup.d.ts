/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.5
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
import { BungieNetResponse } from '../../util/server-response';
import { AccessTokenObject } from '../../util/client';
import { SearchResultOfGroupBan } from '../../schemas';
/** @see {@link https://bungie-net.github.io/#GroupV2.GetBannedMembersOfGroup} */
export declare type GetBannedMembersOfGroupParams = {
    /** Page number (starting with 1). Each page has a fixed size of 50 entries. */
    currentpage: number;
    /** Group ID whose banned members you are fetching */
    groupId: string;
};
/**
 * Get the list of banned members in a given group. Only accessible to group Admins
 * and above. Not applicable to all groups. Check group features.
 * @see {@link https://bungie-net.github.io/#GroupV2.GetBannedMembersOfGroup}
*/
export declare function getBannedMembersOfGroup(this: AccessTokenObject | void, params: GetBannedMembersOfGroupParams): Promise<BungieNetResponse<SearchResultOfGroupBan>>;
