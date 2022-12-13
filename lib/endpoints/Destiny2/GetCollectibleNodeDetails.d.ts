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
import { DestinyComponentType } from '../../schemas/index.js';
import { BungieMembershipType } from '../../schemas/index.js';
import { DestinyCollectibleNodeDetailResponse } from '../../schemas/index.js';
/** @see {@link https://bungie-net.github.io/#Destiny2.GetCollectibleNodeDetails} */
export declare type GetCollectibleNodeDetailsParams = {
    /**
     * The Destiny Character ID of the character for whom we're getting collectible
     * detail info.
    */
    characterId: string;
    /**
     * The hash identifier of the Presentation Node for whom we should return
     * collectible details. Details will only be returned for collectibles that are
     * direct descendants of this node.
    */
    collectiblePresentationNodeHash: number;
    /**
     * A comma separated list of components to return (as strings or numeric values).
     * See the DestinyComponentType enum for valid components to request. You must
     * request at least one component to receive results.
    */
    components: DestinyComponentType[];
    /** Destiny membership ID of another user. You may be denied. */
    destinyMembershipId: string;
    /** A valid non-BungieNet membership type. */
    membershipType: BungieMembershipType;
};
/**
 * Given a Presentation Node that has Collectibles as direct descendants, this will
 * return item details about those descendants in the context of the requesting
 * character.
 * @see {@link https://bungie-net.github.io/#Destiny2.GetCollectibleNodeDetails}
*/
export declare function GetCollectibleNodeDetails(this: BungieClient, params: GetCollectibleNodeDetailsParams): Promise<BungieNetResponse<DestinyCollectibleNodeDetailResponse>>;
