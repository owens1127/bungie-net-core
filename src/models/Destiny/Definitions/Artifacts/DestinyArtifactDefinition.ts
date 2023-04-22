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

import { DestinyDisplayPropertiesDefinition } from '../Common/DestinyDisplayPropertiesDefinition';
import { DestinyItemTranslationBlockDefinition } from '../DestinyItemTranslationBlockDefinition';
import { DestinyArtifactTierDefinition } from './DestinyArtifactTierDefinition';

/**
 * Represents known info about a Destiny Artifact.
 *
 * We cannot guarantee that artifact definitions will be immutable between seasons -
 * in fact, we've been told that they will be replaced between seasons. But this
 * definition is built both to minimize the amount of lookups for related data that
 * have to occur, and is built in hope that, if this plan changes, we will be able
 * to accommodate it more easily.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.Artifacts.DestinyArtifactDefinition}
 */
export interface DestinyArtifactDefinition {
  /**
   * Any basic display info we know about the Artifact. Currently sourced from a
   * related inventory item, but the source of this data is subject to change.
   */
  readonly displayProperties: DestinyDisplayPropertiesDefinition;
  /**
   * Any Geometry/3D info we know about the Artifact. Currently sourced from a
   * related inventory item's gearset information, but the source of this data is
   * subject to change.
   */
  readonly translationBlock: DestinyItemTranslationBlockDefinition;
  /**
   * Any Tier/Rank data related to this artifact, listed in display order.  Currently
   * sourced from a Vendor, but this source is subject to change.
   */
  readonly tiers: DestinyArtifactTierDefinition[];
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
