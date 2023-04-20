/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.4
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
/**
 * Represents a color whose RGBA values are all represented as values between 0 and
 * 255.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Misc.DestinyColor}
*/
export interface DestinyColor {
    readonly red: number;
    readonly green: number;
    readonly blue: number;
    readonly alpha: number;
}
