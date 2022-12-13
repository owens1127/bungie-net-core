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
import { BungieMembershipType } from '../../schemas/index.js';
import { ExactSearchRequest } from '../../schemas/index.js';
import { UserInfoCard } from '../../schemas/index.js';
/** @see {@link https://bungie-net.github.io/#Destiny2.SearchDestinyPlayerByBungieName} */
export declare type SearchDestinyPlayerByBungieNameParams = {
    /**
     * A valid non-BungieNet membership type, or All. Indicates which memberships to
     * return. You probably want this set to All.
    */
    membershipType: BungieMembershipType;
};
/**
 * Returns a list of Destiny memberships given a global Bungie Display Name. This
 * method will hide overridden memberships due to cross save.
 * @see {@link https://bungie-net.github.io/#Destiny2.SearchDestinyPlayerByBungieName}
*/
export declare function SearchDestinyPlayerByBungieName(this: BungieClient, params: SearchDestinyPlayerByBungieNameParams, body: ExactSearchRequest): Promise<BungieNetResponse<UserInfoCard[]>>;
