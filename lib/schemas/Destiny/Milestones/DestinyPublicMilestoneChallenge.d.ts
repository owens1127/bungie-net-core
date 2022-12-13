/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.17.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-typedef code generator program,
 * adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Do not edit these files manually.
 */
/**
 * A Milestone can have many Challenges. Challenges are just extra Objectives that
 * provide a fun way to mix-up play and provide extra rewards.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Milestones.DestinyPublicMilestoneChallenge}
*/
export interface DestinyPublicMilestoneChallenge {
    /**
     * The objective for the Challenge, which should have human-readable data about
     * what needs to be done to accomplish the objective. Use this hash to look up the
     * DestinyObjectiveDefinition. Mapped to DestinyObjectiveDefinition in the manifest.
    */
    readonly objectiveHash: number;
    /**
     * IF the Objective is related to a specific Activity, this will be that activity's
     * hash. Use it to look up the DestinyActivityDefinition for additional data to
     * show. Mapped to DestinyActivityDefinition in the manifest.
    */
    readonly activityHash?: number;
}
