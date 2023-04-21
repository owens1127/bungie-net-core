/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.8
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
//

import { DestinyEnergyType } from '../../DestinyEnergyType';

/**
 * Some plugs cost Energy, which is a stat on the item that can be increased by
 * other plugs (that, at least in Armor 2.0, have a "masterworks-like" mechanic for
 * upgrading). If a plug has costs, the details of that cost are defined here.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.Items.DestinyEnergyCostEntry}
 */
export interface DestinyEnergyCostEntry {
  /** The Energy cost for inserting this plug. */
  readonly energyCost: number;
  /**
   * The type of energy that this plug costs, as a reference to the
   * DestinyEnergyTypeDefinition of the energy type. Mapped to
   * DestinyEnergyTypeDefinition in the manifest.
   */
  readonly energyTypeHash: number;
  /** The type of energy that this plug costs, in enum form. */
  readonly energyType: DestinyEnergyType;
}
