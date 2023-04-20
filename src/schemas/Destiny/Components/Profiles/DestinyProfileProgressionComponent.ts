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

import { DestinyArtifactProfileScoped } from '../../Artifacts/DestinyArtifactProfileScoped';

/**
 * The set of progression-related information that applies at a Profile-wide level
 * for your Destiny experience. This differs from the Jimi Hendrix Experience
 * because there's less guitars on fire. Yet. #spoileralert?
 *
 * This will include information such as Checklist info.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Components.Profiles.DestinyProfileProgressionComponent}
 */
export interface DestinyProfileProgressionComponent {
  /**
   * The set of checklists that can be examined on a profile-wide basis, keyed by the
   * hash identifier of the Checklist (DestinyChecklistDefinition)
   *
   * For each checklist returned, its value is itself a Dictionary keyed by the
   * checklist's hash identifier with the value being a boolean indicating if it's
   * been discovered yet. Mapped to DestinyChecklistDefinition in the manifest.
   */
  readonly checklists: { [key: number]: { [key: number]: boolean } };
  /**
   * Data related to your progress on the current season's artifact that is the same
   * across characters.
   */
  readonly seasonalArtifact: DestinyArtifactProfileScoped;
}
