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

import { DestinyMilestoneActivityPhase } from './DestinyMilestoneActivityPhase';

/**
 * Represents this player's personal completion status for the Activity under a
 * Milestone, if the activity has trackable completion and progress information. (
 * most activities won't, or the concept won't apply. For instance, it makes sense
 * to talk about a tier of a raid as being Completed or having progress, but it
 * doesn't make sense to talk about a Crucible Playlist in those terms.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Milestones.DestinyMilestoneActivityCompletionStatus}
 */
export interface DestinyMilestoneActivityCompletionStatus {
  /** If the activity has been "completed", that information will be returned here. */
  readonly completed: boolean;
  /**
   * If the Activity has discrete "phases" that we can track, that info will be here.
   * Otherwise, this value will be NULL. Note that this is a list and not a
   * dictionary: the order implies the ascending order of phases or progression in
   * this activity.
   */
  readonly phases?: DestinyMilestoneActivityPhase[];
}