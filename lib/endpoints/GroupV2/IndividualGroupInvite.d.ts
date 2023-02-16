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
import { InstancedImport, AccessTokenObject } from '../../util/client.js';
import { BungieMembershipType } from '../../schemas/index.js';
import { GroupApplicationRequest } from '../../schemas/index.js';
import { GroupApplicationResponse } from '../../schemas/index.js';
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
export declare function individualGroupInvite(this: InstancedImport | AccessTokenObject | void, params: IndividualGroupInviteParams, body: GroupApplicationRequest): Promise<BungieNetResponse<GroupApplicationResponse>>;
