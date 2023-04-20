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

import { DestinyCraftableSocketComponent } from './DestinyCraftableSocketComponent';

/** @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Components.Craftables.DestinyCraftableComponent} */
export interface DestinyCraftableComponent {
  readonly visible: boolean;
  /**
   * If the requirements are not met for crafting this item, these will index into
   * the list of failure strings.
   */
  readonly failedRequirementIndexes: number[];
  /** Plug item state for the crafting sockets. */
  readonly sockets: DestinyCraftableSocketComponent[];
}