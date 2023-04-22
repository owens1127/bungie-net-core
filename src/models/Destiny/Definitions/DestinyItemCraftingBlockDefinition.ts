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

import { DestinyItemCraftingBlockBonusPlugDefinition } from './DestinyItemCraftingBlockBonusPlugDefinition';

/**
 * If an item can have an action performed on it (like "Dismantle"), it will be
 * defined here if you care.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyItemCraftingBlockDefinition}
 */
export interface DestinyItemCraftingBlockDefinition {
  /**
   * A reference to the item definition that is created when crafting with this '
   * recipe' item. Mapped to DestinyInventoryItemDefinition in the manifest.
   */
  readonly outputItemHash: number;
  /**
   * A list of socket type hashes that describes which sockets are required for
   * crafting with this recipe. Mapped to DestinySocketTypeDefinition in the manifest.
   */
  readonly requiredSocketTypeHashes: number[];
  readonly failedRequirementStrings: string[];
  /**
   * A reference to the base material requirements for crafting with this recipe.
   * Mapped to DestinyMaterialRequirementSetDefinition in the manifest.
   */
  readonly baseMaterialRequirements?: number;
  /**
   * A list of 'bonus' socket plugs that may be available if certain requirements are
   * met.
   */
  readonly bonusPlugs: DestinyItemCraftingBlockBonusPlugDefinition[];
}