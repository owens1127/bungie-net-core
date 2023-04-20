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

import { DestinyPublicMilestoneActivityVariant } from './DestinyPublicMilestoneActivityVariant';

/**
 * A milestone may have one or more conceptual Activities associated with it, and
 * each of those conceptual activities could have a variety of variants, modes,
 * tiers, what-have-you. Our attempts to determine what qualifies as a conceptual
 * activity are, unfortunately, janky. So if you see missing modes or modes that
 * don't seem appropriate to you, let us know and I'll buy you a beer if we ever
 * meet up in person.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Milestones.DestinyPublicMilestoneActivity}
 */
export interface DestinyPublicMilestoneActivity {
  /**
   * The hash identifier of the activity that's been chosen to be considered the
   * canonical "conceptual" activity definition. This may have many variants, defined
   * herein. Mapped to DestinyActivityDefinition in the manifest.
   */
  readonly activityHash: number;
  /**
   * The activity may have 0-to-many modifiers: if it does, this will contain the
   * hashes to the DestinyActivityModifierDefinition that defines the modifier being
   * applied. Mapped to DestinyActivityModifierDefinition in the manifest.
   */
  readonly modifierHashes: number[];
  /**
   * Every relevant variation of this conceptual activity, including the conceptual
   * activity itself, have variants defined here.
   */
  readonly variants: DestinyPublicMilestoneActivityVariant[];
  /**
   * The hash identifier of the most specific Activity Mode under which this activity
   * is played. This is useful for situations where the activity in question is - for
   * instance - a PVP map, but it's not clear what mode the PVP map is being played
   * under. If it's a playlist, this will be less specific: but hopefully useful in
   * some way. Mapped to DestinyActivityModeDefinition in the manifest.
   */
  readonly activityModeHash?: number;
  /**
   * The enumeration equivalent of the most specific Activity Mode under which this
   * activity is played.
   */
  readonly activityModeType?: number;
}
