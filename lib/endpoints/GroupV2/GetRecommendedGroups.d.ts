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
import { GroupDateRange } from '../../schemas/index.js';
import { GroupType } from '../../schemas/index.js';
import { GroupV2Card } from '../../schemas/index.js';
/** @see {@link https://bungie-net.github.io/#GroupV2.GetRecommendedGroups} */
export declare type GetRecommendedGroupsParams = {
    /** Requested range in which to pull recommended groups */
    createDateRange: GroupDateRange;
    /** Type of groups requested */
    groupType: GroupType;
};
/**
 * Gets groups recommended for you based on the groups to whom those you follow
 * belong.
 * @see {@link https://bungie-net.github.io/#GroupV2.GetRecommendedGroups}
*/
export declare function GetRecommendedGroups(this: InstancedImport, params: GetRecommendedGroupsParams): Promise<BungieNetResponse<GroupV2Card[]>>;
