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
import { GroupNameSearchRequest } from '../../schemas/index.js';
import { GroupResponse } from '../../schemas/index.js';
/**
 * Get information about a specific group with the given name and type. The POST
 * version.
 * @see {@link https://bungie-net.github.io/#GroupV2.GetGroupByNameV2}
*/
export declare function GetGroupByNameV2(this: BungieClient, body: GroupNameSearchRequest): Promise<BungieNetResponse<GroupResponse>>;
