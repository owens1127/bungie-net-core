/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.0
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
//

/**
 * If an item has a related gearset, this is the list of items in that set, and an
 * unlock expression that evaluates to a number representing the progress toward
 * gearset completion (a very rare use for unlock expressions!)
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyItemGearsetBlockDefinition}
 */
export interface DestinyItemGearsetBlockDefinition {
  /** The maximum possible number of items that can be collected. */
  readonly trackingValueMax: number;
  /**
   * The list of hashes for items in the gearset. Use them to look up
   * DestinyInventoryItemDefinition entries for the items in the set. Mapped to
   * DestinyInventoryItemDefinition in the manifest.
   */
  readonly itemList: number[];
}