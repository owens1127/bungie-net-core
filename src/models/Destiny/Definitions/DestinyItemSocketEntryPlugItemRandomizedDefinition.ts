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

import { DestinyPlugItemCraftingRequirements } from './DestinyPlugItemCraftingRequirements';

/** @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyItemSocketEntryPlugItemRandomizedDefinition} */
export interface DestinyItemSocketEntryPlugItemRandomizedDefinition {
  readonly craftingRequirements: DestinyPlugItemCraftingRequirements;
  /**
   * Indicates if the plug can be rolled on the current version of the item. For
   * example, older versions of weapons may have plug rolls that are no longer
   * possible on the current versions.
   */
  readonly currentlyCanRoll: boolean;
  /**
   * The hash identifier of a DestinyInventoryItemDefinition representing the plug
   * that can be inserted. Mapped to DestinyInventoryItemDefinition in the manifest.
   */
  readonly plugItemHash: number;
}
