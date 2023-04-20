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

import { DestinyPublicMilestoneQuest } from './DestinyPublicMilestoneQuest';
import { DestinyPublicMilestoneChallengeActivity } from './DestinyPublicMilestoneChallengeActivity';
import { DestinyPublicMilestoneVendor } from './DestinyPublicMilestoneVendor';

/**
 * Information about milestones, presented in a character state-agnostic manner.
 * Combine this data with DestinyMilestoneDefinition to get a full picture of the
 * milestone, which is basically a checklist of things to do in the game. Think of
 * this as GetPublicAdvisors 3.0, for those who used the Destiny 1 API.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Milestones.DestinyPublicMilestone}
 */
export interface DestinyPublicMilestone {
  /**
   * The hash identifier for the milestone. Use it to look up the
   * DestinyMilestoneDefinition for static data about the Milestone. Mapped to
   * DestinyMilestoneDefinition in the manifest.
   */
  readonly milestoneHash: number;
  /**
   * A milestone not need have even a single quest, but if there are active quests
   * they will be returned here.
   */
  readonly availableQuests: DestinyPublicMilestoneQuest[];
  readonly activities: DestinyPublicMilestoneChallengeActivity[];
  /**
   * Sometimes milestones - or activities active in milestones - will have relevant
   * vendors. These are the vendors that are currently relevant.
   *
   * Deprecated, already, for the sake of the new "vendors" property that has more
   * data. What was I thinking.
   */
  readonly vendorHashes: number[];
  /**
   * This is why we can't have nice things. This is the ordered list of vendors to be
   * shown that relate to this milestone, potentially along with other interesting
   * data.
   */
  readonly vendors: DestinyPublicMilestoneVendor[];
  /** If known, this is the date when the Milestone started/became active. */
  readonly startDate?: string;
  /** If known, this is the date when the Milestone will expire/recycle/end. */
  readonly endDate?: string;
  /**
   * Used for ordering milestones in a display to match how we order them in BNet.
   * May pull from static data, or possibly in the future from dynamic information.
   */
  readonly order: number;
}
