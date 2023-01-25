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
import { InstancedImport } from '../../util/client.js';
import { PostSearchResponse } from '../../schemas/index.js';
/** @see {@link https://bungie-net.github.io/#Forum.GetPostAndParentAwaitingApproval} */
export declare type GetPostAndParentAwaitingApprovalParams = {
    childPostId: string;
    /** If this value is not null or empty, banned posts are requested to be returned */
    showbanned?: string;
};
/**
 * Returns the post specified and its immediate parent of posts that are awaiting
 * approval.
 * @see {@link https://bungie-net.github.io/#Forum.GetPostAndParentAwaitingApproval}
*/
export declare function GetPostAndParentAwaitingApproval(this: InstancedImport, params: GetPostAndParentAwaitingApprovalParams): Promise<BungieNetResponse<PostSearchResponse>>;
