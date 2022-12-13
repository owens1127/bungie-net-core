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
import { BungieClient } from '../../util/client.js';
import { PartnerRewardHistoryResponse } from '../../schemas/index.js';
/** @see {@link https://bungie-net.github.io/#Tokens.GetPartnerRewardHistory} */
export declare type GetPartnerRewardHistoryParams = {
    /** The partner application identifier. */
    partnerApplicationId: number;
    /** The bungie.net user to return reward history for. */
    targetBnetMembershipId: string;
};
/**
 * Returns the partner rewards history of the targeted user, both partner offers
 * and Twitch drops.
 * @see {@link https://bungie-net.github.io/#Tokens.GetPartnerRewardHistory}
*/
export declare function GetPartnerRewardHistory(this: BungieClient, params: GetPartnerRewardHistoryParams): Promise<BungieNetResponse<PartnerRewardHistoryResponse>>;
