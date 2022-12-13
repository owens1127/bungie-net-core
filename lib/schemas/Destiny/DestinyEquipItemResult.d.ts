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
import { PlatformErrorCodes } from '../Exceptions/PlatformErrorCodes';
/**
 * The results of an Equipping operation performed through the Destiny API.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.DestinyEquipItemResult}
*/
export interface DestinyEquipItemResult {
    /**
     * The instance ID of the item in question (all items that can be equipped must,
     * but definition, be Instanced and thus have an Instance ID that you can use to
     * refer to them)
    */
    readonly itemInstanceId: string;
    /** A PlatformErrorCodes enum indicating whether it succeeded, and if it failed why. */
    readonly equipStatus: PlatformErrorCodes;
}
