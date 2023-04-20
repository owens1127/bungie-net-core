/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.4
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
import { DestinyMilestoneChallengeDefinition } from './DestinyMilestoneChallengeDefinition';
import { DestinyMilestoneChallengeActivityGraphNodeEntry } from './DestinyMilestoneChallengeActivityGraphNodeEntry';
import { DestinyMilestoneChallengeActivityPhase } from './DestinyMilestoneChallengeActivityPhase';
/** @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.Milestones.DestinyMilestoneChallengeActivityDefinition} */
export interface DestinyMilestoneChallengeActivityDefinition {
    /**
     * The activity for which this challenge is active. Mapped to
     * DestinyActivityDefinition in the manifest.
    */
    readonly activityHash: number;
    readonly challenges: DestinyMilestoneChallengeDefinition[];
    /**
     * If the activity and its challenge is visible on any of these nodes, it will be
     * returned.
    */
    readonly activityGraphNodes: DestinyMilestoneChallengeActivityGraphNodeEntry[];
    /**
     * Phases related to this activity, if there are any.
     *
     * These will be listed in the order in which they will appear in the actual
     * activity.
    */
    readonly phases: DestinyMilestoneChallengeActivityPhase[];
}
