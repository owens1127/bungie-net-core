/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.5
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
//

/**
 * Represents a variant on an activity for a Milestone: a specific difficulty tier,
 * or a specific activity variant for example.
 *
 * These will often have more specific details, such as an associated Guided Game,
 * progression steps, tier-specific rewards, and custom values.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.Milestones.DestinyMilestoneActivityVariantDefinition}
 */
export interface DestinyMilestoneActivityVariantDefinition {
  /**
   * The hash to use for looking up the variant Activity's definition (
   * DestinyActivityDefinition), where you can find its distinguishing
   * characteristics such as difficulty level and recommended light level.
   *
   * Frequently, that will be the only distinguishing characteristics in practice,
   * which is somewhat of a bummer. Mapped to DestinyActivityDefinition in the
   * manifest.
   */
  readonly activityHash: number;
  /**
   * If you care to do so, render the variants in the order prescribed by this value.
   *
   * When you combine live Milestone data with the definition, the order becomes more
   * useful because you'll be cross-referencing between the definition and live data.
   */
  readonly order: number;
}
