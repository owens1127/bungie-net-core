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
import { BungieCredentialType } from '../../schemas';
/** @see {@link https://bungie-net.github.io/#User.GetSanitizedPlatformDisplayNames} */
export declare type GetSanitizedPlatformDisplayNamesParams = {
    /** The requested membership id to load. */
    membershipId: string;
};
/**
 * Gets a list of all display names linked to this membership id but sanitized (
 * profanity filtered). Obeys all visibility rules of calling user and is heavily
 * cached.
 * @see {@link https://bungie-net.github.io/#User.GetSanitizedPlatformDisplayNames}
*/
export declare function GetSanitizedPlatformDisplayNames(this: BungieClient, params: GetSanitizedPlatformDisplayNamesParams): Promise<BungieNetResponse<{
    [key in BungieCredentialType]: string;
}>>;
