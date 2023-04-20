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

import { DestinyCraftableComponent } from './DestinyCraftableComponent';

/** @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Components.Craftables.DestinyCraftablesComponent} */
export interface DestinyCraftablesComponent {
  /**
   * A map of craftable item hashes to craftable item state components. Mapped to
   * DestinyInventoryItemDefinition in the manifest.
   */
  readonly craftables: { [key: number]: DestinyCraftableComponent };
  /**
   * The hash for the root presentation node definition of craftable item categories.
   * Mapped to DestinyPresentationNodeDefinition in the manifest.
   */
  readonly craftingRootNodeHash: number;
}