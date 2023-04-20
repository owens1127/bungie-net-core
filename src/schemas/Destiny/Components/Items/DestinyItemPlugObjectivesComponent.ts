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
//

import { DestinyObjectiveProgress } from '../../Quests/DestinyObjectiveProgress';

/** @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Components.Items.DestinyItemPlugObjectivesComponent} */
export interface DestinyItemPlugObjectivesComponent {
  /**
   * This set of data is keyed by the Item Hash (DestinyInventoryItemDefinition) of
   * the plug whose objectives are being returned, with the value being the list of
   * those objectives.
   *
   * What if two plugs with the same hash are returned for an item, you ask?
   *
   * Good question! They share the same item-scoped state, and as such would have
   * identical objective state as a result. How's that for convenient.
   *
   * Sometimes, Plugs may have objectives: generally, these are used for flavor and
   * display purposes. For instance, a Plug might be tracking the number of PVP kills
   * you have made. It will use the parent item's data about that tracking status to
   * determine what to show, and will generally show it using the
   * DestinyObjectiveDefinition's progressDescription property. Refer to the plug's
   * itemHash and objective property for more information if you would like to
   * display even more data. Mapped to DestinyInventoryItemDefinition in the manifest.
   */
  readonly objectivesPerPlug: { [key: number]: DestinyObjectiveProgress[] };
}
