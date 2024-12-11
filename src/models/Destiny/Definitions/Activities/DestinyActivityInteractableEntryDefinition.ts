/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-net-core code generator program
 * Repository: {@link https://github.com/owens1127/bungie-net-core}
 * Do not edit these files manually.
 */
//

/**
 * Defines a specific interactable and the action that can occur when triggered.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.Activities.DestinyActivityInteractableEntryDefinition}
 */

export interface DestinyActivityInteractableEntryDefinition {
  /**
   * The activity that will trigger when you interact with this interactable. Mapped
   * to DestinyActivityDefinition in the manifest.
   */
  readonly activityHash: number;
}
