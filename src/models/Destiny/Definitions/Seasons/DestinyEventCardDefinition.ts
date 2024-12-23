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

import { DestinyDisplayPropertiesDefinition } from '../Common/DestinyDisplayPropertiesDefinition';
import { DestinyColor } from '../../Misc/DestinyColor';
import { DestinyEventCardImages } from './DestinyEventCardImages';

/**
 * Defines the properties of an 'Event Card' in Destiny 2, to coincide with a
 * seasonal event for additional challenges, premium rewards, a new seal, and a
 * special title. For example: Solstice of Heroes 2022.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.Seasons.DestinyEventCardDefinition}
 */

export interface DestinyEventCardDefinition {
  readonly displayProperties: DestinyDisplayPropertiesDefinition;
  readonly linkRedirectPath: string;
  readonly color: DestinyColor;
  readonly images: DestinyEventCardImages;
  /** Mapped to DestinyPresentationNodeDefinition in the manifest. */
  readonly triumphsPresentationNodeHash: number;
  /** Mapped to DestinyPresentationNodeDefinition in the manifest. */
  readonly sealPresentationNodeHash: number;
  /** Mapped to DestinyInventoryItemDefinition in the manifest. */
  readonly ticketCurrencyItemHash: number;
  /** Mapped to DestinyVendorDefinition in the manifest. */
  readonly ticketVendorHash: number;
  readonly ticketVendorCategoryHash: number;
  readonly endTime: string;
  /**
   * The unique identifier for this entity. Guaranteed to be unique for the type of
   * entity, but not globally.
   *
   * When entities refer to each other in Destiny content, it is this hash that they
   * are referring to.
   */
  readonly hash: number;
  /** The index of the entity as it was found in the investment tables. */
  readonly index: number;
  /**
   * If this is true, then there is an entity with this identifier/type combination,
   * but BNet is not yet allowed to show it. Sorry!
   */
  readonly redacted: boolean;
}
