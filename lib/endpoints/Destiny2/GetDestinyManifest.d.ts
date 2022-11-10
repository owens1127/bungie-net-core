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
import { DestinyManifest } from '../../schemas';
/**
 * Returns the current version of the manifest as a json object.
 * @see {@link https://bungie-net.github.io/#Destiny2.GetDestinyManifest}
*/
export declare function GetDestinyManifest(this: BungieClient): Promise<BungieNetResponse<DestinyManifest>>;
