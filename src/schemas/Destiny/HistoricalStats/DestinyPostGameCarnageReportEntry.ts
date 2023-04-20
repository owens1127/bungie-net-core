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

import { DestinyHistoricalStatsValue } from './DestinyHistoricalStatsValue';
import { DestinyPlayer } from './DestinyPlayer';
import { DestinyPostGameCarnageReportExtendedData } from './DestinyPostGameCarnageReportExtendedData';

/** @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.HistoricalStats.DestinyPostGameCarnageReportEntry} */
export interface DestinyPostGameCarnageReportEntry {
  /** Standing of the player */
  readonly standing: number;
  /** Score of the player if available */
  readonly score: DestinyHistoricalStatsValue;
  /** Identity details of the player */
  readonly player: DestinyPlayer;
  /** ID of the player's character used in the activity. */
  readonly characterId: string;
  /** Collection of stats for the player in this activity. */
  readonly values: { [key: string]: DestinyHistoricalStatsValue };
  /** Extended data extracted from the activity blob. */
  readonly extended: DestinyPostGameCarnageReportExtendedData;
}
