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
import { DestinyInsertPlugsFreeActionRequest } from '../../models';
import { DestinyItemChangeResponse } from '../../models';
/**
 * Insert a 'free' plug into an item's socket. This does not require 'Advanced
 * Write Action' authorization and is available to 3rd-party apps, but will only
 * work on 'free and reversible' socket actions (Perks, Armor Mods, Shaders,
 * Ornaments, etc.). You must have a valid Destiny Account, and the character must
 * either be in a social space, in orbit, or offline.
 *
 * Wait at least 0.5s between actions.
 * @see {@link https://bungie-net.github.io/#Destiny2.InsertSocketPlugFree}
*/
export declare function insertSocketPlugFree(this: AccessTokenObject | void, body: DestinyInsertPlugsFreeActionRequest): Promise<BungieNetResponse<DestinyItemChangeResponse>>;
