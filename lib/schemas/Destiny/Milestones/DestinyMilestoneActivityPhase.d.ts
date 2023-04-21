/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.8
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
/**
 * Represents whatever information we can return about an explicit phase in an
 * activity. In the future, I hope we'll have more than just "guh, you done gone
 * and did something," but for the forseeable future that's all we've got. I'm
 * making it more than just a list of booleans out of that overly-optimistic hope.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Milestones.DestinyMilestoneActivityPhase}
*/
export interface DestinyMilestoneActivityPhase {
    /** Indicates if the phase has been completed. */
    readonly complete: boolean;
    /**
     * In DestinyActivityDefinition, if the activity has phases, there will be a set of
     * phases defined in the "insertionPoints" property. This is the hash that maps to
     * that phase.
    */
    readonly phaseHash: number;
}
