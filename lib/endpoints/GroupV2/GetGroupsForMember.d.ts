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
import { GroupsForMemberFilter } from '../../schemas';
import { GroupType } from '../../schemas';
import { BungieMembershipType } from '../../schemas';
import { GetGroupsForMemberResponse } from '../../schemas';
/** @see {@link https://bungie-net.github.io/#GroupV2.GetGroupsForMember} */
export declare type GetGroupsForMemberParams = {
    /** Filter apply to list of joined groups. */
    filter: GroupsForMemberFilter;
    /** Type of group the supplied member founded. */
    groupType: GroupType;
    /** Membership ID to for which to find founded groups. */
    membershipId: string;
    /** Membership type of the supplied membership ID. */
    membershipType: BungieMembershipType;
};
/**
 * Get information about the groups that a given member has joined.
 * @see {@link https://bungie-net.github.io/#GroupV2.GetGroupsForMember}
*/
export declare function getGroupsForMember(this: AccessTokenObject | void, params: GetGroupsForMemberParams): Promise<BungieNetResponse<GetGroupsForMemberResponse>>;
