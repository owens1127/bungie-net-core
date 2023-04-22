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
import { UserMembershipData } from '../../models';
/**
 * Returns a list of accounts associated with signed in user. This is useful for
 * OAuth implementations that do not give you access to the token response.
 * @see {@link https://bungie-net.github.io/#User.GetMembershipDataForCurrentUser}
*/
export declare function getMembershipDataForCurrentUser(this: AccessTokenObject | void): Promise<BungieNetResponse<UserMembershipData>>;
