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

import { DestinyDisplayPropertiesDefinition } from './Common/DestinyDisplayPropertiesDefinition';
import { DestinyStatAggregationType } from '../DestinyStatAggregationType';
import { DestinyStatCategory } from '../DestinyStatCategory';

/**
 * This represents a stat that's applied to a character or an item (such as a
 * weapon, piece of armor, or a vehicle).
 *
 * An example of a stat might be Attack Power on a weapon.
 *
 * Stats go through a complex set of transformations before they end up being shown
 * to the user as a number or a progress bar, and those transformations are
 * fundamentally intertwined with the concept of a "Stat Group" (
 * DestinyStatGroupDefinition). Items have both Stats and a reference to a Stat
 * Group, and it is the Stat Group that takes the raw stat information and gives it
 * both rendering metadata (such as whether to show it as a number or a progress
 * bar) and the final transformation data (interpolation tables to turn the raw
 * investment stat into a display stat). Please see DestinyStatGroupDefinition for
 * more information on that transformational process.
 *
 * Stats are segregated from Stat Groups because different items and types of items
 * can refer to the same stat, but have different "scales" for the stat while still
 * having the same underlying value. For example, both a Shotgun and an Auto Rifle
 * may have a "raw" impact stat of 50, but the Auto Rifle's Stat Group will scale
 * that 50 down so that, when it is displayed, it is a smaller value relative to
 * the shotgun. (this is a totally made up example, don't assume shotguns have
 * naturally higher impact than auto rifles because of this)
 *
 * A final caveat is that some stats, even after this "final" transformation, go
 * through yet another set of transformations directly in the game as a result of
 * dynamic, stateful scripts that get run. BNet has no access to these scripts, nor
 * any way to know which scripts get executed. As a result, the stats for an item
 * that you see in-game - particularly for stats that are often impacted by Perks,
 * like Magazine Size - can change dramatically from what we return on Bungie.Net.
 * This is a known issue with no fix coming down the pipeline. Take these stats
 * with a grain of salt.
 *
 * Stats actually go through four transformations, for those interested:
 *
 * 1) "Sandbox" stat, the "most raw" form. These are pretty much useless without
 * transformations applied, and thus are not currently returned in the API. If you
 * really want these, we can provide them. Maybe someone could do something cool
 * with it?
 *
 * 2) "Investment" stat (the stat's value after DestinyStatDefinition's
 * interpolation tables and aggregation logic is applied to the "Sandbox" stat
 * value)
 *
 * 3) "Display" stat (the stat's base UI-visible value after
 * DestinyStatGroupDefinition's interpolation tables are applied to the Investment
 * Stat value. For most stats, this is what is displayed.)
 *
 * 4) Underlying in-game stat (the stat's actual value according to the game, after
 * the game runs dynamic scripts based on the game and character's state. This is
 * the final transformation that BNet does not have access to. For most stats, this
 * is not actually displayed to the user, with the exception of Magazine Size which
 * is then piped back to the UI for display in-game, but not to BNet.)
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyStatDefinition}
 */

export interface DestinyStatDefinition {
  readonly displayProperties: DestinyDisplayPropertiesDefinition;
  /**
   * Stats can exist on a character or an item, and they may potentially be
   * aggregated in different ways. The DestinyStatAggregationType enum value
   * indicates the way that this stat is being aggregated.
   */
  readonly aggregationType: DestinyStatAggregationType;
  /**
   * True if the stat is computed rather than being delivered as a raw value on items.
   *
   * For instance, the Light stat in Destiny 1 was a computed stat.
   */
  readonly hasComputedBlock: boolean;
  /** The category of the stat, according to the game. */
  readonly statCategory: DestinyStatCategory;
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
