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
import { ClanBanner } from '../../schemas/index.js';
/** @see {@link https://bungie-net.github.io/#GroupV2.EditClanBanner} */
export declare type EditClanBannerParams = {
    /** Group ID of the group to edit. */
    groupId: string;
};
/**
 * Edit an existing group's clan banner. You must have suitable permissions in the
 * group to perform this operation. All fields are required.
 * @see {@link https://bungie-net.github.io/#GroupV2.EditClanBanner}
*/
export declare function editClanBanner(this: InstancedImport | AccessTokenObject | void, params: EditClanBannerParams, body: ClanBanner): Promise<BungieNetResponse<number>>;
