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

import { DestinyDisplayPropertiesDefinition } from './Common/DestinyDisplayPropertiesDefinition';
import { DestinyRewardSourceCategory } from './DestinyRewardSourceCategory';

/**
 * Represents a heuristically-determined "item source" according to Bungie.net.
 * These item sources are non-canonical: we apply a combination of special
 * configuration and often-fragile heuristics to attempt to discern whether an item
 * should be part of a given "source," but we have known cases of false positives
 * and negatives due to our imperfect heuristics.
 *
 * Still, they provide a decent approximation for people trying to figure out how
 * an item can be obtained. DestinyInventoryItemDefinition refers to sources in the
 * sourceDatas.sourceHashes property for all sources we determined the item could
 * spawn from.
 *
 * An example in Destiny 1 of a Source would be "Nightfall". If an item has the "
 * Nightfall" source associated with it, it's extremely likely that you can earn
 * that item while playing Nightfall, either during play or as an after-completion
 * reward.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyRewardSourceDefinition}
 */

export interface DestinyRewardSourceDefinition {
  readonly displayProperties: DestinyDisplayPropertiesDefinition;
  /**
   * Sources are grouped into categories: common ways that items are provided. I hope
   * to see this expand in Destiny 2 once we have time to generate accurate reward
   * source data.
   */
  readonly category: DestinyRewardSourceCategory;
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
