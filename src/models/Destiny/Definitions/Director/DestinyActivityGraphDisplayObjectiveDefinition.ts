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

/**
 * When a Graph needs to show active Objectives, this defines those objectives as
 * well as an identifier.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.Director.DestinyActivityGraphDisplayObjectiveDefinition}
 */

export interface DestinyActivityGraphDisplayObjectiveDefinition {
  /**
   * $NOTE $amola 2017-01-19 This field is apparently something that CUI uses to
   * manually wire up objectives to display info. I am unsure how it works.
   */
  readonly id: number;
  /**
   * The objective being shown on the map. Mapped to DestinyObjectiveDefinition in
   * the manifest.
   */
  readonly objectiveHash: number;
}
