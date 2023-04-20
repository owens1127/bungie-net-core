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

import { DestinyActivityModeType } from '../HistoricalStats/Definitions/DestinyActivityModeType';

/**
 * If the activity is a playlist, this is the definition for a specific entry in
 * the playlist: a single possible combination of Activity and Activity Mode that
 * can be chosen.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyActivityPlaylistItemDefinition}
 */
export interface DestinyActivityPlaylistItemDefinition {
  /**
   * The hash identifier of the Activity that can be played. Use it to look up the
   * DestinyActivityDefinition. Mapped to DestinyActivityDefinition in the manifest.
   */
  readonly activityHash: number;
  /**
   * If this playlist entry had an activity mode directly defined on it, this will be
   * the hash of that mode. Mapped to DestinyActivityModeDefinition in the manifest.
   */
  readonly directActivityModeHash?: number;
  /**
   * If the playlist entry had an activity mode directly defined on it, this will be
   * the enum value of that mode.
   */
  readonly directActivityModeType?: number;
  /**
   * The hash identifiers for Activity Modes relevant to this entry. Mapped to
   * DestinyActivityModeDefinition in the manifest.
   */
  readonly activityModeHashes: number[];
  /**
   * The activity modes - if any - in enum form. Because we can't seem to escape the
   * enums.
   */
  readonly activityModeTypes: DestinyActivityModeType[];
}
