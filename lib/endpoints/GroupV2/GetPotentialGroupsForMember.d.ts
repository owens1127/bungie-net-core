/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.8
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
import { BungieNetResponse } from '../../util/server-response';
import { AccessTokenObject } from '../../util/client';
import { GroupPotentialMemberStatus } from '../../schemas';
import { GroupType } from '../../schemas';
import { BungieMembershipType } from '../../schemas';
import { GroupPotentialMembershipSearchResponse } from '../../schemas';
/** @see {@link https://bungie-net.github.io/#GroupV2.GetPotentialGroupsForMember} */
export declare type GetPotentialGroupsForMemberParams = {
    /** Filter apply to list of potential joined groups. */
    filter: GroupPotentialMemberStatus;
    /** Type of group the supplied member applied. */
    groupType: GroupType;
    /** Membership ID to for which to find applied groups. */
    membershipId: string;
    /** Membership type of the supplied membership ID. */
    membershipType: BungieMembershipType;
};
/**
 * Get information about the groups that a given member has applied to or been
 * invited to.
 * @see {@link https://bungie-net.github.io/#GroupV2.GetPotentialGroupsForMember}
*/
export declare function getPotentialGroupsForMember(this: AccessTokenObject | void, params: GetPotentialGroupsForMemberParams): Promise<BungieNetResponse<GroupPotentialMembershipSearchResponse>>;
