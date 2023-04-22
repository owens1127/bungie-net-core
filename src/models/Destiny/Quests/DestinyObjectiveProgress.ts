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

/**
 * Returns data about a character's status with a given Objective. Combine with
 * DestinyObjectiveDefinition static data for display purposes.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Quests.DestinyObjectiveProgress}
 */
export interface DestinyObjectiveProgress {
  /**
   * The unique identifier of the Objective being referred to. Use to look up the
   * DestinyObjectiveDefinition in static data. Mapped to DestinyObjectiveDefinition
   * in the manifest.
   */
  readonly objectiveHash: number;
  /**
   * If the Objective has a Destination associated with it, this is the unique
   * identifier of the Destination being referred to. Use to look up the
   * DestinyDestinationDefinition in static data. This will give localized data about
   * *where* in the universe the objective should be achieved. Mapped to
   * DestinyDestinationDefinition in the manifest.
   */
  readonly destinationHash?: number;
  /**
   * If the Objective has an Activity associated with it, this is the unique
   * identifier of the Activity being referred to. Use to look up the
   * DestinyActivityDefinition in static data. This will give localized data about *
   * what* you should be playing for the objective to be achieved. Mapped to
   * DestinyActivityDefinition in the manifest.
   */
  readonly activityHash?: number;
  /**
   * If progress has been made, and the progress can be measured numerically, this
   * will be the value of that progress. You can compare it to the
   * DestinyObjectiveDefinition.completionValue property for current vs. upper bounds,
   * and use DestinyObjectiveDefinition.inProgressValueStyle or completedValueStyle
   * to determine how this should be rendered. Note that progress, in Destiny 2, need
   * not be a literal numeric progression. It could be one of a number of possible
   * values, even a Timestamp. Always examine DestinyObjectiveDefinition.
   * inProgressValueStyle or completedValueStyle before rendering progress.
   */
  readonly progress?: number;
  /**
   * As of Forsaken, objectives' completion value is determined dynamically at
   * runtime.
   *
   * This value represents the threshold of progress you need to surpass in order for
   * this objective to be considered "complete".
   *
   * If you were using objective data, switch from using the
   * DestinyObjectiveDefinition's "completionValue" to this value.
   */
  readonly completionValue: number;
  /** Whether or not the Objective is completed. */
  readonly complete: boolean;
  /**
   * If this is true, the objective is visible in-game. Otherwise, it's not yet
   * visible to the player. Up to you if you want to honor this property.
   */
  readonly visible: boolean;
}