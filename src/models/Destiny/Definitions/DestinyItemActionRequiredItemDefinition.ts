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
//

/**
 * The definition of an item and quantity required in a character's inventory in
 * order to perform an action.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyItemActionRequiredItemDefinition}
 */
export interface DestinyItemActionRequiredItemDefinition {
  /** The minimum quantity of the item you have to have. */
  readonly count: number;
  /**
   * The hash identifier of the item you need to have. Use it to look up the
   * DestinyInventoryItemDefinition for more info. Mapped to
   * DestinyInventoryItemDefinition in the manifest.
   */
  readonly itemHash: number;
  /**
   * If true, the item/quantity will be deleted from your inventory when the action
   * is performed. Otherwise, you'll retain these required items after the action is
   * complete.
   */
  readonly deleteOnAction: boolean;
}