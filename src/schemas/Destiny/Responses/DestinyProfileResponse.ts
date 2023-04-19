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

import { ComponentData } from '../../../generic/ComponentTypes.js'
import { DestinyComponentType } from '../DestinyComponentType.js'
import { SingleComponentResponse } from '../../../generic/SingleComponentResponse.js'
import { ConditionalComponent } from '../../../generic/ComponentTypes.js'
import { DestinyVendorReceiptsComponent } from '../Entities/Profiles/DestinyVendorReceiptsComponent.js'
import { DestinyInventoryComponent } from '../Entities/Inventory/DestinyInventoryComponent.js'
import { DestinyProfileComponent } from '../Entities/Profiles/DestinyProfileComponent.js'
import { DestinyPlatformSilverComponent } from '../Components/Inventory/DestinyPlatformSilverComponent.js'
import { DestinyKiosksComponent } from '../Components/Kiosks/DestinyKiosksComponent.js'
import { DestinyPlugSetsComponent } from '../Components/PlugSets/DestinyPlugSetsComponent.js'
import { DestinyProfileProgressionComponent } from '../Components/Profiles/DestinyProfileProgressionComponent.js'
import { DestinyPresentationNodesComponent } from '../Components/Presentation/DestinyPresentationNodesComponent.js'
import { DestinyProfileRecordsComponent } from '../Components/Records/DestinyProfileRecordsComponent.js'
import { DestinyProfileCollectiblesComponent } from '../Components/Collectibles/DestinyProfileCollectiblesComponent.js'
import { DestinyProfileTransitoryComponent } from '../Components/Profiles/DestinyProfileTransitoryComponent.js'
import { DestinyMetricsComponent } from '../Components/Metrics/DestinyMetricsComponent.js'
import { DestinyStringVariablesComponent } from '../Components/StringVariables/DestinyStringVariablesComponent.js'
import { DestinySocialCommendationsComponent } from '../Components/Social/DestinySocialCommendationsComponent.js'
import { DictionaryComponentResponse } from '../../../generic/DictionaryComponentResponse.js'
import { DestinyCharacterComponent } from '../Entities/Characters/DestinyCharacterComponent.js'
import { DestinyLoadoutsComponent } from '../Components/Loadouts/DestinyLoadoutsComponent.js'
import { DestinyCharacterProgressionComponent } from '../Entities/Characters/DestinyCharacterProgressionComponent.js'
import { DestinyCharacterRenderComponent } from '../Entities/Characters/DestinyCharacterRenderComponent.js'
import { DestinyCharacterActivitiesComponent } from '../Entities/Characters/DestinyCharacterActivitiesComponent.js'
import { DestinyBaseItemComponentSetOfuint32 } from '../../DestinyBaseItemComponentSetOfuint32.js'
import { DestinyCharacterRecordsComponent } from '../Components/Records/DestinyCharacterRecordsComponent.js'
import { DestinyCollectiblesComponent } from '../Components/Collectibles/DestinyCollectiblesComponent.js'
import { DestinyCraftablesComponent } from '../Components/Craftables/DestinyCraftablesComponent.js'
import { DestinyItemComponentSetOfint64 } from '../../DestinyItemComponentSetOfint64.js'
import { DestinyCurrenciesComponent } from '../Components/Inventory/DestinyCurrenciesComponent.js'

/**
 * The response for GetDestinyProfile, with components for character and item-level
 * data.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Responses.DestinyProfileResponse}
*/
export interface DestinyProfileResponse<T extends DestinyComponentType[]> extends ComponentData {
  /**
   * Records the timestamp of when most components were last generated from the world
   * server source. Unless the component type is specified in the documentation for
   * secondaryComponentsMintedTimestamp, this value is sufficient to do data
   * freshness.
  */
  readonly responseMintedTimestamp: string;
  /**
   * Some secondary components are not tracked in the primary response timestamp and
   * have their timestamp tracked here. If your component is any of the following,
   * this field is where you will find your timestamp value:
   *
   * PresentationNodes, Records, Collectibles, Metrics, StringVariables, Craftables,
   * Transitory
   *
   * All other component types may use the primary timestamp property.
  */
  readonly secondaryComponentsMintedTimestamp: string;
  /**
   * Recent, refundable purchases you have made from vendors. When will you use it?
   * Couldn't say...
   *
   * COMPONENT TYPE: VendorReceipts
  */
  readonly vendorReceipts: ConditionalComponent<T, DestinyComponentType.VendorReceipts, SingleComponentResponse<DestinyVendorReceiptsComponent>>;
  /**
   * The profile-level inventory of the Destiny Profile.
   *
   * COMPONENT TYPE: ProfileInventories
  */
  readonly profileInventory: ConditionalComponent<T, DestinyComponentType.ProfileInventories, SingleComponentResponse<DestinyInventoryComponent>>;
  /**
   * The profile-level currencies owned by the Destiny Profile.
   *
   * COMPONENT TYPE: ProfileCurrencies
  */
  readonly profileCurrencies: ConditionalComponent<T, DestinyComponentType.ProfileCurrencies, SingleComponentResponse<DestinyInventoryComponent>>;
  /**
   * The basic information about the Destiny Profile (formerly "Account").
   *
   * COMPONENT TYPE: Profiles
  */
  readonly profile: ConditionalComponent<T, DestinyComponentType.Profiles, SingleComponentResponse<DestinyProfileComponent>>;
  /**
   * Silver quantities for any platform on which this Profile plays destiny.
   *
   * COMPONENT TYPE: PlatformSilver
  */
  readonly platformSilver: ConditionalComponent<T, DestinyComponentType.PlatformSilver, SingleComponentResponse<DestinyPlatformSilverComponent>>;
  /**
   * Items available from Kiosks that are available Profile-wide (i.e. across all
   * characters)
   *
   * This component returns information about what Kiosk items are available to you
   * on a *Profile* level. It is theoretically possible for Kiosks to have items
   * gated by specific Character as well. If you ever have those, you will find them
   * on the characterKiosks property.
   *
   * COMPONENT TYPE: Kiosks
  */
  readonly profileKiosks: ConditionalComponent<T, DestinyComponentType.Kiosks, SingleComponentResponse<DestinyKiosksComponent>>;
  /**
   * When sockets refer to reusable Plug Sets (see DestinyPlugSetDefinition for more
   * info), this is the set of plugs and their states that are profile-scoped.
   *
   * This comes back with ItemSockets, as it is needed for a complete picture of the
   * sockets on requested items.
   *
   * COMPONENT TYPE: ItemSockets
  */
  readonly profilePlugSets: ConditionalComponent<T, DestinyComponentType.ItemSockets, SingleComponentResponse<DestinyPlugSetsComponent>>;
  /**
   * When we have progression information - such as Checklists - that may apply
   * profile-wide, it will be returned here rather than in the per-character
   * progression data.
   *
   * COMPONENT TYPE: ProfileProgression
  */
  readonly profileProgression: ConditionalComponent<T, DestinyComponentType.ProfileProgression, SingleComponentResponse<DestinyProfileProgressionComponent>>;
  /** COMPONENT TYPE: PresentationNodes */
  readonly profilePresentationNodes: ConditionalComponent<T, DestinyComponentType.PresentationNodes, SingleComponentResponse<DestinyPresentationNodesComponent>>;
  /** COMPONENT TYPE: Records */
  readonly profileRecords: ConditionalComponent<T, DestinyComponentType.Records, SingleComponentResponse<DestinyProfileRecordsComponent>>;
  /** COMPONENT TYPE: Collectibles */
  readonly profileCollectibles: ConditionalComponent<T, DestinyComponentType.Collectibles, SingleComponentResponse<DestinyProfileCollectiblesComponent>>;
  /** COMPONENT TYPE: Transitory */
  readonly profileTransitoryData: ConditionalComponent<T, DestinyComponentType.Transitory, SingleComponentResponse<DestinyProfileTransitoryComponent>>;
  /** COMPONENT TYPE: Metrics */
  readonly metrics: ConditionalComponent<T, DestinyComponentType.Metrics, SingleComponentResponse<DestinyMetricsComponent>>;
  /** COMPONENT TYPE: StringVariables */
  readonly profileStringVariables: ConditionalComponent<T, DestinyComponentType.StringVariables, SingleComponentResponse<DestinyStringVariablesComponent>>;
  /** COMPONENT TYPE: SocialCommendations */
  readonly profileCommendations: ConditionalComponent<T, DestinyComponentType.SocialCommendations, SingleComponentResponse<DestinySocialCommendationsComponent>>;
  /**
   * Basic information about each character, keyed by the CharacterId.
   *
   * COMPONENT TYPE: Characters
  */
  readonly characters: ConditionalComponent<T, DestinyComponentType.Characters, DictionaryComponentResponse<string, DestinyCharacterComponent>>;
  /**
   * The character-level non-equipped inventory items, keyed by the Character's Id.
   *
   * COMPONENT TYPE: CharacterInventories
  */
  readonly characterInventories: ConditionalComponent<T, DestinyComponentType.CharacterInventories, DictionaryComponentResponse<string, DestinyInventoryComponent>>;
  /**
   * The character loadouts, keyed by the Character's Id.
   *
   * COMPONENT TYPE: CharacterLoadouts
  */
  readonly characterLoadouts: ConditionalComponent<T, DestinyComponentType.CharacterLoadouts, DictionaryComponentResponse<string, DestinyLoadoutsComponent>>;
  /**
   * Character-level progression data, keyed by the Character's Id.
   *
   * COMPONENT TYPE: CharacterProgressions
  */
  readonly characterProgressions: ConditionalComponent<T, DestinyComponentType.CharacterProgressions, DictionaryComponentResponse<string, DestinyCharacterProgressionComponent>>;
  /**
   * Character rendering data - a minimal set of info needed to render a character in
   * 3D - keyed by the Character's Id.
   *
   * COMPONENT TYPE: CharacterRenderData
  */
  readonly characterRenderData: ConditionalComponent<T, DestinyComponentType.CharacterRenderData, DictionaryComponentResponse<string, DestinyCharacterRenderComponent>>;
  /**
   * Character activity data - the activities available to this character and its
   * status, keyed by the Character's Id.
   *
   * COMPONENT TYPE: CharacterActivities
  */
  readonly characterActivities: ConditionalComponent<T, DestinyComponentType.CharacterActivities, DictionaryComponentResponse<string, DestinyCharacterActivitiesComponent>>;
  /**
   * The character's equipped items, keyed by the Character's Id.
   *
   * COMPONENT TYPE: CharacterEquipment
  */
  readonly characterEquipment: ConditionalComponent<T, DestinyComponentType.CharacterEquipment, DictionaryComponentResponse<string, DestinyInventoryComponent>>;
  /**
   * Items available from Kiosks that are available to a specific character as
   * opposed to the account as a whole. It must be combined with data from the
   * profileKiosks property to get a full picture of the character's available items
   * to check out of a kiosk.
   *
   * This component returns information about what Kiosk items are available to you
   * on a *Character* level. Usually, kiosk items will be earned for the entire
   * Profile (all characters) at once. To find those, look in the profileKiosks
   * property.
   *
   * COMPONENT TYPE: Kiosks
  */
  readonly characterKiosks: ConditionalComponent<T, DestinyComponentType.Kiosks, DictionaryComponentResponse<string, DestinyKiosksComponent>>;
  /**
   * When sockets refer to reusable Plug Sets (see DestinyPlugSetDefinition for more
   * info), this is the set of plugs and their states, per character, that are
   * character-scoped.
   *
   * This comes back with ItemSockets, as it is needed for a complete picture of the
   * sockets on requested items.
   *
   * COMPONENT TYPE: ItemSockets
  */
  readonly characterPlugSets: ConditionalComponent<T, DestinyComponentType.ItemSockets, DictionaryComponentResponse<string, DestinyPlugSetsComponent>>;
  /**
   * Do you ever get the feeling that a system was designed *too* flexibly? That it
   * can be used in so many different ways that you end up being unable to provide an
   * easy to use abstraction for the mess that's happening under the surface?
   *
   * Let's talk about character-specific data that might be related to items without
   * instances. These two statements are totally unrelated, I promise.
   *
   * At some point during D2, it was decided that items - such as Bounties - could be
   * given to characters and *not* have instance data, but that *could* display and
   * even use relevant state information on your account and character.
   *
   * Up to now, any item that had meaningful dependencies on character or account
   * state had to be instanced, and thus "itemComponents" was all that you needed: it
   * was keyed by item's instance IDs and provided the stateful information you
   * needed inside.
   *
   * Unfortunately, we don't live in such a magical world anymore. This is
   * information held on a per-character basis about non-instanced items that the
   * characters have in their inventory - or that reference character-specific state
   * information even if it's in Account-level inventory - and the values related to
   * that item's state in relation to the given character.
   *
   * To give a concrete example, look at a Moments of Triumph bounty. They exist in a
   * character's inventory, and show/care about a character's progression toward
   * completing the bounty. But the bounty itself is a non-instanced item, like a mod
   * or a currency. This returns that data for the characters who have the bounty in
   * their inventory.
   *
   * I'm not crying, you're crying Okay we're both crying but it's going to be okay I
   * promise Actually I shouldn't promise that, I don't know if it's going to be okay
  */
  readonly characterUninstancedItemComponents: { [key: string]: DestinyBaseItemComponentSetOfuint32<T> };
  /** COMPONENT TYPE: PresentationNodes */
  readonly characterPresentationNodes: ConditionalComponent<T, DestinyComponentType.PresentationNodes, DictionaryComponentResponse<string, DestinyPresentationNodesComponent>>;
  /** COMPONENT TYPE: Records */
  readonly characterRecords: ConditionalComponent<T, DestinyComponentType.Records, DictionaryComponentResponse<string, DestinyCharacterRecordsComponent>>;
  /** COMPONENT TYPE: Collectibles */
  readonly characterCollectibles: ConditionalComponent<T, DestinyComponentType.Collectibles, DictionaryComponentResponse<string, DestinyCollectiblesComponent>>;
  /** COMPONENT TYPE: StringVariables */
  readonly characterStringVariables: ConditionalComponent<T, DestinyComponentType.StringVariables, DictionaryComponentResponse<string, DestinyStringVariablesComponent>>;
  /** COMPONENT TYPE: Craftables */
  readonly characterCraftables: ConditionalComponent<T, DestinyComponentType.Craftables, DictionaryComponentResponse<string, DestinyCraftablesComponent>>;
  /**
   * Information about instanced items across all returned characters, keyed by the
   * item's instance ID.
   *
   * COMPONENT TYPE: [See inside the DestinyItemComponentSet contract for component
   * types.]
  */
  readonly itemComponents: DestinyItemComponentSetOfint64<T>;
  /**
   * A "lookup" convenience component that can be used to quickly check if the
   * character has access to items that can be used for purchasing.
   *
   * COMPONENT TYPE: CurrencyLookups
  */
  readonly characterCurrencyLookups: ConditionalComponent<T, DestinyComponentType.CurrencyLookups, DictionaryComponentResponse<string, DestinyCurrenciesComponent>>;
}
