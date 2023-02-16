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
import { InstancedImport, AccessTokenObject } from '../../util/client.js';
import { DestinyItemStateRequest } from '../../schemas/index.js';
/**
 * Set the Tracking State for an instanced item, if that item is a Quest or Bounty.
 * You must have a valid Destiny Account. Yeah, it's an item.
 *
 * Wait at least 1s between actions.
 * @see {@link https://bungie-net.github.io/#Destiny2.SetQuestTrackedState}
*/
export declare function setQuestTrackedState(this: InstancedImport | AccessTokenObject | void, body: DestinyItemStateRequest): Promise<BungieNetResponse<number>>;
