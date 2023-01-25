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
import { InstancedImport } from '../../util/client.js';
import { DestinyComponentType } from '../../schemas/index.js';
import { BungieMembershipType } from '../../schemas/index.js';
import { DestinyCharacterResponse } from '../../schemas/index.js';
/** @see {@link https://bungie-net.github.io/#Destiny2.GetCharacter} */
export declare type GetCharacterParams = {
    /** ID of the character. */
    characterId: string;
    /**
     * A comma separated list of components to return (as strings or numeric values).
     * See the DestinyComponentType enum for valid components to request. You must
     * request at least one component to receive results.
    */
    components: DestinyComponentType[];
    /** Destiny membership ID. */
    destinyMembershipId: string;
    /** A valid non-BungieNet membership type. */
    membershipType: BungieMembershipType;
};
/**
 * Returns character information for the supplied character.
 * @see {@link https://bungie-net.github.io/#Destiny2.GetCharacter}
*/
export declare function GetCharacter(this: InstancedImport, params: GetCharacterParams): Promise<BungieNetResponse<DestinyCharacterResponse>>;
