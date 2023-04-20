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
 * Compare this sackType to the sack identifier in the
 * DestinyInventoryItemDefinition.vendorSackType property of items. If they match,
 * show this sack with this interaction.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyVendorInteractionSackEntryDefinition}
*/
export interface DestinyVendorInteractionSackEntryDefinition {
    readonly sackType: number;
}
