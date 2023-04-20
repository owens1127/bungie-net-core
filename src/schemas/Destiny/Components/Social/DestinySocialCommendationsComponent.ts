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
//

/** @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Components.Social.DestinySocialCommendationsComponent} */
export interface DestinySocialCommendationsComponent {
  readonly totalScore: number;
  readonly scoreDetailValues: number[];
  /** Mapped to DestinySocialCommendationNodeDefinition in the manifest. */
  readonly commendationNodeScoresByHash: { [key: number]: number };
  /** Mapped to DestinySocialCommendationDefinition in the manifest. */
  readonly commendationScoresByHash: { [key: number]: number };
}
