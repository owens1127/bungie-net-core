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
/**
 * The localized properties of the requirementsDisplay, allowing information about
 * the requirement or item being featured to be seen.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyVendorRequirementDisplayEntryDefinition}
*/
export interface DestinyVendorRequirementDisplayEntryDefinition {
    readonly icon: string;
    readonly name: string;
    readonly source: string;
    readonly type: string;
}
