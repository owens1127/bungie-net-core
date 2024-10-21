/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-net-core code generator program
 * Repository: {@link https://github.com/owensimpson/bungie-net-core}
 * Do not edit these files manually.
 */
//

import { DestinyComponentType } from '../DestinyComponentType';
import { SingleComponentResponse } from '../../../interfaces/SingleComponentResponse';
import { DestinyVendorReceiptsComponent } from '../Entities/Profiles/DestinyVendorReceiptsComponent';
import { DestinyInventoryComponent } from '../Entities/Inventory/DestinyInventoryComponent';
import { DestinyProfileComponent } from '../Entities/Profiles/DestinyProfileComponent';
import { DestinyPlatformSilverComponent } from '../Components/Inventory/DestinyPlatformSilverComponent';
import { DestinyKiosksComponent } from '../Components/Kiosks/DestinyKiosksComponent';
import { DestinyPlugSetsComponent } from '../Components/PlugSets/DestinyPlugSetsComponent';
import { DestinyProfileProgressionComponent } from '../Components/Profiles/DestinyProfileProgressionComponent';
import { DestinyPresentationNodesComponent } from '../Components/Presentation/DestinyPresentationNodesComponent';
import { DestinyProfileRecordsComponent } from '../Components/Records/DestinyProfileRecordsComponent';
import { DestinyProfileCollectiblesComponent } from '../Components/Collectibles/DestinyProfileCollectiblesComponent';
import { DestinyProfileTransitoryComponent } from '../Components/Profiles/DestinyProfileTransitoryComponent';
import { DestinyMetricsComponent } from '../Components/Metrics/DestinyMetricsComponent';
import { DestinyStringVariablesComponent } from '../Components/StringVariables/DestinyStringVariablesComponent';
import { DestinySocialCommendationsComponent } from '../Components/Social/DestinySocialCommendationsComponent';
import { DictionaryComponentResponse } from '../../../interfaces/DictionaryComponentResponse';
import { DestinyCharacterComponent } from '../Entities/Characters/DestinyCharacterComponent';
import { DestinyLoadoutsComponent } from '../Components/Loadouts/DestinyLoadoutsComponent';
import { DestinyCharacterProgressionComponent } from '../Entities/Characters/DestinyCharacterProgressionComponent';
import { DestinyCharacterRenderComponent } from '../Entities/Characters/DestinyCharacterRenderComponent';
import { DestinyCharacterActivitiesComponent } from '../Entities/Characters/DestinyCharacterActivitiesComponent';
import { DestinyBaseItemComponentSet } from '../../../interfaces/DestinyBaseItemComponentSet';
import { DestinyCharacterRecordsComponent } from '../Components/Records/DestinyCharacterRecordsComponent';
import { DestinyCollectiblesComponent } from '../Components/Collectibles/DestinyCollectiblesComponent';
import { DestinyCraftablesComponent } from '../Components/Craftables/DestinyCraftablesComponent';
import { DestinyItemComponentSet } from '../../../interfaces/DestinyItemComponentSet';
import { DestinyCurrenciesComponent } from '../Components/Inventory/DestinyCurrenciesComponent';

/**
 * The response for GetDestinyProfile, with components for character and item-level
 * data.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Responses.DestinyProfileResponse}
 */

export interface DestinyProfileResponse<
  T extends readonly DestinyComponentType[] = DestinyComponentType[]
> {
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
  readonly vendorReceipts: SingleComponentResponse<
    DestinyVendorReceiptsComponent,
    'VendorReceipts',
    T
  >;
  /**
   * The profile-level inventory of the Destiny Profile.
   *
   * COMPONENT TYPE: ProfileInventories
   */
  readonly profileInventory: SingleComponentResponse<
    DestinyInventoryComponent,
    'ProfileInventories',
    T
  >;
  /**
   * The profile-level currencies owned by the Destiny Profile.
   *
   * COMPONENT TYPE: ProfileCurrencies
   */
  readonly profileCurrencies: SingleComponentResponse<
    DestinyInventoryComponent,
    'ProfileCurrencies',
    T
  >;
  /**
   * The basic information about the Destiny Profile (formerly "Account").
   *
   * COMPONENT TYPE: Profiles
   */
  readonly profile: SingleComponentResponse<DestinyProfileComponent, 'Profiles', T>;
  /**
   * Silver quantities for any platform on which this Profile plays destiny.
   *
   * COMPONENT TYPE: PlatformSilver
   */
  readonly platformSilver: SingleComponentResponse<
    DestinyPlatformSilverComponent,
    'PlatformSilver',
    T
  >;
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
  readonly profileKiosks: SingleComponentResponse<DestinyKiosksComponent, 'Kiosks', T>;
  /**
   * When sockets refer to reusable Plug Sets (see DestinyPlugSetDefinition for more
   * info), this is the set of plugs and their states that are profile-scoped.
   *
   * This comes back with ItemSockets, as it is needed for a complete picture of the
   * sockets on requested items.
   *
   * COMPONENT TYPE: ItemSockets
   */
  readonly profilePlugSets: SingleComponentResponse<DestinyPlugSetsComponent, 'ItemSockets', T>;
  /**
   * When we have progression information - such as Checklists - that may apply
   * profile-wide, it will be returned here rather than in the per-character
   * progression data.
   *
   * COMPONENT TYPE: ProfileProgression
   */
  readonly profileProgression: SingleComponentResponse<
    DestinyProfileProgressionComponent,
    'ProfileProgression',
    T
  >;
  /** COMPONENT TYPE: PresentationNodes */
  readonly profilePresentationNodes: SingleComponentResponse<
    DestinyPresentationNodesComponent,
    'PresentationNodes',
    T
  >;
  /** COMPONENT TYPE: Records */
  readonly profileRecords: SingleComponentResponse<DestinyProfileRecordsComponent, 'Records', T>;
  /** COMPONENT TYPE: Collectibles */
  readonly profileCollectibles: SingleComponentResponse<
    DestinyProfileCollectiblesComponent,
    'Collectibles',
    T
  >;
  /** COMPONENT TYPE: Transitory */
  readonly profileTransitoryData: SingleComponentResponse<
    DestinyProfileTransitoryComponent,
    'Transitory',
    T
  >;
  /** COMPONENT TYPE: Metrics */
  readonly metrics: SingleComponentResponse<DestinyMetricsComponent, 'Metrics', T>;
  /** COMPONENT TYPE: StringVariables */
  readonly profileStringVariables: SingleComponentResponse<
    DestinyStringVariablesComponent,
    'StringVariables',
    T
  >;
  /** COMPONENT TYPE: SocialCommendations */
  readonly profileCommendations: SingleComponentResponse<
    DestinySocialCommendationsComponent,
    'SocialCommendations',
    T
  >;
  /**
   * Basic information about each character, keyed by the CharacterId.
   *
   * COMPONENT TYPE: Characters
   */
  readonly characters: DictionaryComponentResponse<
    string,
    DestinyCharacterComponent,
    'Characters',
    T
  >;
  /**
   * The character-level non-equipped inventory items, keyed by the Character's Id.
   *
   * COMPONENT TYPE: CharacterInventories
   */
  readonly characterInventories: DictionaryComponentResponse<
    string,
    DestinyInventoryComponent,
    'CharacterInventories',
    T
  >;
  /**
   * The character loadouts, keyed by the Character's Id.
   *
   * COMPONENT TYPE: CharacterLoadouts
   */
  readonly characterLoadouts: DictionaryComponentResponse<
    string,
    DestinyLoadoutsComponent,
    'CharacterLoadouts',
    T
  >;
  /**
   * Character-level progression data, keyed by the Character's Id.
   *
   * COMPONENT TYPE: CharacterProgressions
   */
  readonly characterProgressions: DictionaryComponentResponse<
    string,
    DestinyCharacterProgressionComponent,
    'CharacterProgressions',
    T
  >;
  /**
   * Character rendering data - a minimal set of info needed to render a character in
   * 3D - keyed by the Character's Id.
   *
   * COMPONENT TYPE: CharacterRenderData
   */
  readonly characterRenderData: DictionaryComponentResponse<
    string,
    DestinyCharacterRenderComponent,
    'CharacterRenderData',
    T
  >;
  /**
   * Character activity data - the activities available to this character and its
   * status, keyed by the Character's Id.
   *
   * COMPONENT TYPE: CharacterActivities
   */
  readonly characterActivities: DictionaryComponentResponse<
    string,
    DestinyCharacterActivitiesComponent,
    'CharacterActivities',
    T
  >;
  /**
   * The character's equipped items, keyed by the Character's Id.
   *
   * COMPONENT TYPE: CharacterEquipment
   */
  readonly characterEquipment: DictionaryComponentResponse<
    string,
    DestinyInventoryComponent,
    'CharacterEquipment',
    T
  >;
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
  readonly characterKiosks: DictionaryComponentResponse<
    string,
    DestinyKiosksComponent,
    'Kiosks',
    T
  >;
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
  readonly characterPlugSets: DictionaryComponentResponse<
    string,
    DestinyPlugSetsComponent,
    'ItemSockets',
    T
  >;
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
  readonly characterUninstancedItemComponents: { [key: string]: DestinyBaseItemComponentSet<T> };
  /** COMPONENT TYPE: PresentationNodes */
  readonly characterPresentationNodes: DictionaryComponentResponse<
    string,
    DestinyPresentationNodesComponent,
    'PresentationNodes',
    T
  >;
  /** COMPONENT TYPE: Records */
  readonly characterRecords: DictionaryComponentResponse<
    string,
    DestinyCharacterRecordsComponent,
    'Records',
    T
  >;
  /** COMPONENT TYPE: Collectibles */
  readonly characterCollectibles: DictionaryComponentResponse<
    string,
    DestinyCollectiblesComponent,
    'Collectibles',
    T
  >;
  /** COMPONENT TYPE: StringVariables */
  readonly characterStringVariables: DictionaryComponentResponse<
    string,
    DestinyStringVariablesComponent,
    'StringVariables',
    T
  >;
  /** COMPONENT TYPE: Craftables */
  readonly characterCraftables: DictionaryComponentResponse<
    string,
    DestinyCraftablesComponent,
    'Craftables',
    T
  >;
  /**
   * Information about instanced items across all returned characters, keyed by the
   * item's instance ID.
   *
   * COMPONENT TYPE: [See inside the DestinyItemComponentSet contract for component
   * types.]
   */
  readonly itemComponents: DestinyItemComponentSet<string, T>;
  /**
   * A "lookup" convenience component that can be used to quickly check if the
   * character has access to items that can be used for purchasing.
   *
   * COMPONENT TYPE: CurrencyLookups
   */
  readonly characterCurrencyLookups: DictionaryComponentResponse<
    string,
    DestinyCurrenciesComponent,
    'CurrencyLookups',
    T
  >;
}
