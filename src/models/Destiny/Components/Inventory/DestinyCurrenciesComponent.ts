/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-net-core code generator program
 * Repository: {@link https://github.com/owens1127/bungie-net-core}
 * Do not edit these files manually.
 */
//

import { DestinyMaterialRequirementSetState } from './DestinyMaterialRequirementSetState';

/**
 * This component provides a quick lookup of every item the requested character has
 * and how much of that item they have.
 *
 * Requesting this component will allow you to circumvent manually putting together
 * the list of which currencies you have for the purpose of testing currency
 * requirements on an item being purchased, or operations that have costs.
 *
 * You *could* figure this out yourself by doing a GetCharacter or GetProfile
 * request and forming your own lookup table, but that is inconvenient enough that
 * this feels like a worthwhile (and optional) redundancy. Don't bother requesting
 * it if you have already created your own lookup from prior GetCharacter/
 * GetProfile calls.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Components.Inventory.DestinyCurrenciesComponent}
 */

export interface DestinyCurrenciesComponent {
  /**
   * A dictionary - keyed by the item's hash identifier (
   * DestinyInventoryItemDefinition), and whose value is the amount of that item you
   * have across all available inventory buckets for purchasing.
   *
   * This allows you to see whether the requesting character can afford any given
   * purchase/action without having to re-create this list itself. Mapped to
   * DestinyInventoryItemDefinition in the manifest.
   */
  readonly itemQuantities: { [key: number]: number };
  /** A map of material requirement hashes and their status information. */
  readonly materialRequirementSetStates: { [key: number]: DestinyMaterialRequirementSetState };
}
