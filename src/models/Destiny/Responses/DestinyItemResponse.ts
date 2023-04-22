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

import { ComponentData } from '../../../interfaces/ComponentTypes';
import { DestinyComponentType } from '../DestinyComponentType';
import { SingleComponentResponse } from '../../../interfaces/SingleComponentResponse';
import { ConditionalComponent } from '../../../interfaces/ComponentTypes';
import { DestinyItemComponent } from '../Entities/Items/DestinyItemComponent';
import { DestinyItemInstanceComponent } from '../Entities/Items/DestinyItemInstanceComponent';
import { DestinyItemObjectivesComponent } from '../Entities/Items/DestinyItemObjectivesComponent';
import { DestinyItemPerksComponent } from '../Entities/Items/DestinyItemPerksComponent';
import { DestinyItemRenderComponent } from '../Entities/Items/DestinyItemRenderComponent';
import { DestinyItemStatsComponent } from '../Entities/Items/DestinyItemStatsComponent';
import { DestinyItemTalentGridComponent } from '../Entities/Items/DestinyItemTalentGridComponent';
import { DestinyItemSocketsComponent } from '../Entities/Items/DestinyItemSocketsComponent';
import { DestinyItemReusablePlugsComponent } from '../Components/Items/DestinyItemReusablePlugsComponent';
import { DestinyItemPlugObjectivesComponent } from '../Components/Items/DestinyItemPlugObjectivesComponent';

/**
 * The response object for retrieving an individual instanced item. None of these
 * components are relevant for an item that doesn't have an "itemInstanceId": for
 * those, get your information from the DestinyInventoryDefinition.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Responses.DestinyItemResponse}
 */
export interface DestinyItemResponse<T extends DestinyComponentType[]> extends ComponentData {
  /**
   * If the item is on a character, this will return the ID of the character that is
   * holding the item.
   */
  readonly characterId?: string;
  /**
   * Common data for the item relevant to its non-instanced properties.
   *
   * COMPONENT TYPE: ItemCommonData
   */
  readonly item: ConditionalComponent<
    T,
    DestinyComponentType.ItemCommonData,
    SingleComponentResponse<DestinyItemComponent>
  >;
  /**
   * Basic instance data for the item.
   *
   * COMPONENT TYPE: ItemInstances
   */
  readonly instance: ConditionalComponent<
    T,
    DestinyComponentType.ItemInstances,
    SingleComponentResponse<DestinyItemInstanceComponent>
  >;
  /**
   * Information specifically about the item's objectives.
   *
   * COMPONENT TYPE: ItemObjectives
   */
  readonly objectives: ConditionalComponent<
    T,
    DestinyComponentType.ItemObjectives,
    SingleComponentResponse<DestinyItemObjectivesComponent>
  >;
  /**
   * Information specifically about the perks currently active on the item.
   *
   * COMPONENT TYPE: ItemPerks
   */
  readonly perks: ConditionalComponent<
    T,
    DestinyComponentType.ItemPerks,
    SingleComponentResponse<DestinyItemPerksComponent>
  >;
  /**
   * Information about how to render the item in 3D.
   *
   * COMPONENT TYPE: ItemRenderData
   */
  readonly renderData: ConditionalComponent<
    T,
    DestinyComponentType.ItemRenderData,
    SingleComponentResponse<DestinyItemRenderComponent>
  >;
  /**
   * Information about the computed stats of the item: power, defense, etc...
   *
   * COMPONENT TYPE: ItemStats
   */
  readonly stats: ConditionalComponent<
    T,
    DestinyComponentType.ItemStats,
    SingleComponentResponse<DestinyItemStatsComponent>
  >;
  /**
   * Information about the talent grid attached to the item. Talent nodes can provide
   * a variety of benefits and abilities, and in Destiny 2 are used almost
   * exclusively for the character's "Builds".
   *
   * COMPONENT TYPE: ItemTalentGrids
   */
  readonly talentGrid: ConditionalComponent<
    T,
    DestinyComponentType.ItemTalentGrids,
    SingleComponentResponse<DestinyItemTalentGridComponent>
  >;
  /**
   * Information about the sockets of the item: which are currently active, what
   * potential sockets you could have and the stats/abilities/perks you can gain from
   * them.
   *
   * COMPONENT TYPE: ItemSockets
   */
  readonly sockets: ConditionalComponent<
    T,
    DestinyComponentType.ItemSockets,
    SingleComponentResponse<DestinyItemSocketsComponent>
  >;
  /**
   * Information about the Reusable Plugs for sockets on an item. These are plugs
   * that you can insert into the given socket regardless of if you actually own an
   * instance of that plug: they are logic-driven plugs rather than inventory-driven.
   *
   * These may need to be combined with Plug Set component data to get a full
   * picture of available plugs on a given socket.
   *
   * COMPONENT TYPE: ItemReusablePlugs
   */
  readonly reusablePlugs: ConditionalComponent<
    T,
    DestinyComponentType.ItemReusablePlugs,
    SingleComponentResponse<DestinyItemReusablePlugsComponent>
  >;
  /**
   * Information about objectives on Plugs for a given item. See the component's
   * documentation for more info.
   *
   * COMPONENT TYPE: ItemPlugObjectives
   */
  readonly plugObjectives: ConditionalComponent<
    T,
    DestinyComponentType.ItemPlugObjectives,
    SingleComponentResponse<DestinyItemPlugObjectivesComponent>
  >;
}