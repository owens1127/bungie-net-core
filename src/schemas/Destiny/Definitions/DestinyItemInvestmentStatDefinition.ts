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

/**
 * Represents a "raw" investment stat, before calculated stats are calculated and
 * before any DestinyStatGroupDefinition is applied to transform the stat into
 * something closer to what you see in-game.
 *
 * Because these won't match what you see in-game, consider carefully whether you
 * really want to use these stats. I have left them in case someone can do
 * something useful or interesting with the pre-processed statistics.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyItemInvestmentStatDefinition}
 */
export interface DestinyItemInvestmentStatDefinition {
  /**
   * The hash identifier for the DestinyStatDefinition defining this stat. Mapped to
   * DestinyStatDefinition in the manifest.
   */
  readonly statTypeHash: number;
  /**
   * The raw "Investment" value for the stat, before transformations are performed to
   * turn this raw stat into stats that are displayed in the game UI.
   */
  readonly value: number;
  /**
   * If this is true, the stat will only be applied on the item in certain game state
   * conditions, and we can't know statically whether or not this stat will be
   * applied. Check the "live" API data instead for whether this value is being
   * applied on a specific instance of the item in question, and you can use this to
   * decide whether you want to show the stat on the generic view of the item, or
   * whether you want to show some kind of caveat or warning about the stat value
   * being conditional on game state.
   */
  readonly isConditionallyActive: boolean;
}
