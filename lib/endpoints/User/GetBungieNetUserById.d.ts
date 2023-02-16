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
import { GeneralUser } from '../../schemas/index.js';
/** @see {@link https://bungie-net.github.io/#User.GetBungieNetUserById} */
export declare type GetBungieNetUserByIdParams = {
    /** The requested Bungie.net membership id. */
    id: string;
};
/**
 * Loads a bungienet user by membership id.
 * @see {@link https://bungie-net.github.io/#User.GetBungieNetUserById}
*/
export declare function getBungieNetUserById(this: InstancedImport | AccessTokenObject | void, params: GetBungieNetUserByIdParams): Promise<BungieNetResponse<GeneralUser>>;
