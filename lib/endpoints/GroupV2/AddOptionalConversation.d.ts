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
import { GroupOptionalConversationAddRequest } from '../../schemas/index.js';
/** @see {@link https://bungie-net.github.io/#GroupV2.AddOptionalConversation} */
export declare type AddOptionalConversationParams = {
    /** Group ID of the group to edit. */
    groupId: string;
};
/**
 * Add a new optional conversation/chat channel. Requires admin permissions to the
 * group.
 * @see {@link https://bungie-net.github.io/#GroupV2.AddOptionalConversation}
*/
export declare function addOptionalConversation(this: InstancedImport | AccessTokenObject | void, params: AddOptionalConversationParams, body: GroupOptionalConversationAddRequest): Promise<BungieNetResponse<string>>;
