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
 * The actual activity to be redirected to when you click on the node. Note that a
 * node can have many Activities attached to it: but only one will be active at any
 * given time. The list of Node Activities will be traversed, and the first one
 * found to be active will be displayed. This way, a node can layer multiple
 * variants of an activity on top of each other. For instance, one node can control
 * the weekly Crucible Playlist. There are multiple possible playlists, but only
 * one is active for the week.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.Director.DestinyActivityGraphNodeActivityDefinition}
 */
export interface DestinyActivityGraphNodeActivityDefinition {
  /**
   * An identifier for this node activity. It is only guaranteed to be unique within
   * the Activity Graph.
   */
  readonly nodeActivityId: number;
  /**
   * The activity that will be activated if the user clicks on this node. Controls
   * all activity-related information displayed on the node if it is active (the text
   * shown in the tooltip etc) Mapped to DestinyActivityDefinition in the manifest.
   */
  readonly activityHash: number;
}
