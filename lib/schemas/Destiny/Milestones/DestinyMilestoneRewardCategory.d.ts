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
import { DestinyMilestoneRewardEntry } from './DestinyMilestoneRewardEntry.js';
/**
 * Represents a category of "summary" rewards that can be earned for the Milestone
 * regardless of specific quest rewards that can be earned.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Milestones.DestinyMilestoneRewardCategory}
*/
export interface DestinyMilestoneRewardCategory {
    /**
     * Look up the relevant DestinyMilestoneDefinition, and then use rewardCategoryHash
     * to look up the category info in DestinyMilestoneDefinition.rewards.
    */
    readonly rewardCategoryHash: number;
    /** The individual reward entries for this category, and their status. */
    readonly entries: DestinyMilestoneRewardEntry[];
}
