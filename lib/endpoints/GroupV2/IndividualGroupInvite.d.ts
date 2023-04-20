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
import { BungieMembershipType } from '../../schemas';
import { GroupApplicationRequest } from '../../schemas';
import { GroupApplicationResponse } from '../../schemas';
/** @see {@link https://bungie-net.github.io/#GroupV2.IndividualGroupInvite} */
export declare type IndividualGroupInviteParams = {
    /** ID of the group you would like to join. */
    groupId: string;
    /** Membership id of the account being invited. */
    membershipId: string;
    /** MembershipType of the account being invited. */
    membershipType: BungieMembershipType;
};
/**
 * Invite a user to join this group.
 * @see {@link https://bungie-net.github.io/#GroupV2.IndividualGroupInvite}
*/
export declare function individualGroupInvite(this: AccessTokenObject | void, params: IndividualGroupInviteParams, body: GroupApplicationRequest): Promise<BungieNetResponse<GroupApplicationResponse>>;
