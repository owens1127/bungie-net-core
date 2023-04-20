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

import { ComponentData } from '../../../generic/ComponentTypes';
import { DestinyComponentType } from '../DestinyComponentType';
import { SingleComponentResponse } from '../../../generic/SingleComponentResponse';
import { ConditionalComponent } from '../../../generic/ComponentTypes';
import { DestinyInventoryComponent } from '../Entities/Inventory/DestinyInventoryComponent';
import { DestinyCharacterComponent } from '../Entities/Characters/DestinyCharacterComponent';
import { DestinyCharacterProgressionComponent } from '../Entities/Characters/DestinyCharacterProgressionComponent';
import { DestinyCharacterRenderComponent } from '../Entities/Characters/DestinyCharacterRenderComponent';
import { DestinyCharacterActivitiesComponent } from '../Entities/Characters/DestinyCharacterActivitiesComponent';
import { DestinyLoadoutsComponent } from '../Components/Loadouts/DestinyLoadoutsComponent';
import { DestinyKiosksComponent } from '../Components/Kiosks/DestinyKiosksComponent';
import { DestinyPlugSetsComponent } from '../Components/PlugSets/DestinyPlugSetsComponent';
import { DestinyPresentationNodesComponent } from '../Components/Presentation/DestinyPresentationNodesComponent';
import { DestinyCharacterRecordsComponent } from '../Components/Records/DestinyCharacterRecordsComponent';
import { DestinyCollectiblesComponent } from '../Components/Collectibles/DestinyCollectiblesComponent';
import { DestinyItemComponentSetOfint64 } from '../../DestinyItemComponentSetOfint64';
import { DestinyBaseItemComponentSetOfuint32 } from '../../DestinyBaseItemComponentSetOfuint32';
import { DestinyCurrenciesComponent } from '../Components/Inventory/DestinyCurrenciesComponent';

/**
 * The response contract for GetDestinyCharacter, with components that can be
 * returned for character and item-level data.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Responses.DestinyCharacterResponse}
 */
export interface DestinyCharacterResponse<T extends DestinyComponentType[]> extends ComponentData {
  /**
   * The character-level non-equipped inventory items.
   *
   * COMPONENT TYPE: CharacterInventories
   */
  readonly inventory: ConditionalComponent<
    T,
    DestinyComponentType.CharacterInventories,
    SingleComponentResponse<DestinyInventoryComponent>
  >;
  /**
   * Base information about the character in question.
   *
   * COMPONENT TYPE: Characters
   */
  readonly character: ConditionalComponent<
    T,
    DestinyComponentType.Characters,
    SingleComponentResponse<DestinyCharacterComponent>
  >;
  /**
   * Character progression data, including Milestones.
   *
   * COMPONENT TYPE: CharacterProgressions
   */
  readonly progressions: ConditionalComponent<
    T,
    DestinyComponentType.CharacterProgressions,
    SingleComponentResponse<DestinyCharacterProgressionComponent>
  >;
  /**
   * Character rendering data - a minimal set of information about equipment and dyes
   * used for rendering.
   *
   * COMPONENT TYPE: CharacterRenderData
   */
  readonly renderData: ConditionalComponent<
    T,
    DestinyComponentType.CharacterRenderData,
    SingleComponentResponse<DestinyCharacterRenderComponent>
  >;
  /**
   * Activity data - info about current activities available to the player.
   *
   * COMPONENT TYPE: CharacterActivities
   */
  readonly activities: ConditionalComponent<
    T,
    DestinyComponentType.CharacterActivities,
    SingleComponentResponse<DestinyCharacterActivitiesComponent>
  >;
  /**
   * Equipped items on the character.
   *
   * COMPONENT TYPE: CharacterEquipment
   */
  readonly equipment: ConditionalComponent<
    T,
    DestinyComponentType.CharacterEquipment,
    SingleComponentResponse<DestinyInventoryComponent>
  >;
  /**
   * The loadouts available to the character.
   *
   * COMPONENT TYPE: CharacterLoadouts
   */
  readonly loadouts: ConditionalComponent<
    T,
    DestinyComponentType.CharacterLoadouts,
    SingleComponentResponse<DestinyLoadoutsComponent>
  >;
  /**
   * Items available from Kiosks that are available to this specific character.
   *
   * COMPONENT TYPE: Kiosks
   */
  readonly kiosks: ConditionalComponent<
    T,
    DestinyComponentType.Kiosks,
    SingleComponentResponse<DestinyKiosksComponent>
  >;
  /**
   * When sockets refer to reusable Plug Sets (see DestinyPlugSetDefinition for more
   * info), this is the set of plugs and their states that are scoped to this
   * character.
   *
   * This comes back with ItemSockets, as it is needed for a complete picture of the
   * sockets on requested items.
   *
   * COMPONENT TYPE: ItemSockets
   */
  readonly plugSets: ConditionalComponent<
    T,
    DestinyComponentType.ItemSockets,
    SingleComponentResponse<DestinyPlugSetsComponent>
  >;
  /** COMPONENT TYPE: PresentationNodes */
  readonly presentationNodes: ConditionalComponent<
    T,
    DestinyComponentType.PresentationNodes,
    SingleComponentResponse<DestinyPresentationNodesComponent>
  >;
  /** COMPONENT TYPE: Records */
  readonly records: ConditionalComponent<
    T,
    DestinyComponentType.Records,
    SingleComponentResponse<DestinyCharacterRecordsComponent>
  >;
  /** COMPONENT TYPE: Collectibles */
  readonly collectibles: ConditionalComponent<
    T,
    DestinyComponentType.Collectibles,
    SingleComponentResponse<DestinyCollectiblesComponent>
  >;
  /**
   * The set of components belonging to the player's instanced items.
   *
   * COMPONENT TYPE: [See inside the DestinyItemComponentSet contract for component
   * types.]
   */
  readonly itemComponents: DestinyItemComponentSetOfint64<T>;
  /**
   * The set of components belonging to the player's UNinstanced items. Because
   * apparently now those too can have information relevant to the character's state.
   *
   * COMPONENT TYPE: [See inside the DestinyItemComponentSet contract for component
   * types.]
   */
  readonly uninstancedItemComponents: DestinyBaseItemComponentSetOfuint32<T>;
  /**
   * A "lookup" convenience component that can be used to quickly check if the
   * character has access to items that can be used for purchasing.
   *
   * COMPONENT TYPE: CurrencyLookups
   */
  readonly currencyLookups: ConditionalComponent<
    T,
    DestinyComponentType.CurrencyLookups,
    SingleComponentResponse<DestinyCurrenciesComponent>
  >;
}
