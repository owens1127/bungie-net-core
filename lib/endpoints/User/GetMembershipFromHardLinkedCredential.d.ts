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
import { BungieCredentialType } from '../../schemas/index.js';
import { HardLinkedUserMembership } from '../../schemas/index.js';
/** @see {@link https://bungie-net.github.io/#User.GetMembershipFromHardLinkedCredential} */
export declare type GetMembershipFromHardLinkedCredentialParams = {
    /** The credential to look up. Must be a valid SteamID64. */
    credential: string;
    /** The credential type. 'SteamId' is the only valid value at present. */
    crType: BungieCredentialType;
};
/**
 * Gets any hard linked membership given a credential. Only works for credentials
 * that are public (just SteamID64 right now). Cross Save aware.
 * @see {@link https://bungie-net.github.io/#User.GetMembershipFromHardLinkedCredential}
*/
export declare function GetMembershipFromHardLinkedCredential(this: BungieClient, params: GetMembershipFromHardLinkedCredentialParams): Promise<BungieNetResponse<HardLinkedUserMembership>>;
