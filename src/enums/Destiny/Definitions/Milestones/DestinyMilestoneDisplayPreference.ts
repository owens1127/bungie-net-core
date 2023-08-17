/**
 * A hint for the UI as to what display information ought to be shown. Defaults to
 * showing the static MilestoneDefinition's display properties.
 *
 * If for some reason the indicated property is not populated, fall back to the
 * MilestoneDefinition.displayProperties.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.Milestones.DestinyMilestoneDisplayPreference}
 */
export const DestinyMilestoneDisplayPreference = {
  /**
   * Indicates you should show DestinyMilestoneDefinition.displayProperties for this
   * Milestone.
   */
  MilestoneDefinition: 0,
  /**
   * Indicates you should show the displayProperties for any currently active Quest
   * Steps in DestinyMilestone.availableQuests.
   */
  CurrentQuestSteps: 1,
  /**
   * Indicates you should show the displayProperties for any currently active
   * Activities and their Challenges in DestinyMilestone.activities.
   */
  CurrentActivityChallenges: 2
} as const;
