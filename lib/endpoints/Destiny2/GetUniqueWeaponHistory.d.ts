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
import { BungieMembershipType } from '../../schemas/index.js';
import { DestinyHistoricalWeaponStatsData } from '../../schemas/index.js';
/** @see {@link https://bungie-net.github.io/#Destiny2.GetUniqueWeaponHistory} */
export declare type GetUniqueWeaponHistoryParams = {
    /** The id of the character to retrieve. */
    characterId: string;
    /** The Destiny membershipId of the user to retrieve. */
    destinyMembershipId: string;
    /** A valid non-BungieNet membership type. */
    membershipType: BungieMembershipType;
};
/**
 * Gets details about unique weapon usage, including all exotic weapons.
 * @see {@link https://bungie-net.github.io/#Destiny2.GetUniqueWeaponHistory}
*/
export declare function GetUniqueWeaponHistory(this: InstancedImport, params: GetUniqueWeaponHistoryParams): Promise<BungieNetResponse<DestinyHistoricalWeaponStatsData>>;
