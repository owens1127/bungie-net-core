/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-net-core code generator program
 * Repository: {@link https://github.com/owensimpson/bungie-net-core}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
import { BungieNetResponse } from '../../interfaces/server-response';
import { AccessTokenObject } from '../../client';
import { ClanBannerSource } from '../../models';
/**
 * Returns the dictionary of values for the Clan Banner
 * @see {@link https://bungie-net.github.io/#Destiny2.GetClanBannerSource}
*/
export declare function getClanBannerSource(this: AccessTokenObject | void): Promise<BungieNetResponse<ClanBannerSource>>;
