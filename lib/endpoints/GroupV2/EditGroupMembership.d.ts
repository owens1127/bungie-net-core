/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.0
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
import { BungieNetResponse } from '../../util/server-response.js';
import { InstancedImport, AccessTokenObject } from '../../util/client.js';
import { BungieMembershipType } from '../../schemas/index.js';
import { RuntimeGroupMemberType } from '../../schemas/index.js';
/** @see {@link https://bungie-net.github.io/#GroupV2.EditGroupMembership} */
export declare type EditGroupMembershipParams = {
    /** ID of the group to which the member belongs. */
    groupId: string;
    /** Membership ID to modify. */
    membershipId: string;
    /** Membership type of the provide membership ID. */
    membershipType: BungieMembershipType;
    /** New membertype for the specified member. */
    memberType: RuntimeGroupMemberType;
};
/**
 * Edit the membership type of a given member. You must have suitable permissions
 * in the group to perform this operation.
 * @see {@link https://bungie-net.github.io/#GroupV2.EditGroupMembership}
*/
export declare function editGroupMembership(this: InstancedImport | AccessTokenObject | void, params: EditGroupMembershipParams): Promise<BungieNetResponse<number>>;
