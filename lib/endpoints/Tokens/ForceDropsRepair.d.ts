/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.16.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-typedef code generator program,
 * adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Do not edit these files manually.
 */
import { BungieNetResponse } from '../../util/server-response';
import { BungieClient } from '../../util/client';
/**
 * Twitch Drops self-repair function - scans twitch for drops not marked as
 * fulfilled and resyncs them.
 * @see {@link https://bungie-net.github.io/#Tokens.ForceDropsRepair}
*/
export declare function ForceDropsRepair(this: BungieClient): Promise<BungieNetResponse<boolean>>;
