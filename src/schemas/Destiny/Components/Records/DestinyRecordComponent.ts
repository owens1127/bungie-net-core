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

import { DestinyRecordState } from '../../DestinyRecordState';
import { DestinyObjectiveProgress } from '../../Quests/DestinyObjectiveProgress';

/** @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Components.Records.DestinyRecordComponent} */
export interface DestinyRecordComponent {
  /**
   * This enum represents a set of flags - use bitwise operators to check which of
   * these match your value.
   */
  readonly state: DestinyRecordState;
  readonly objectives: DestinyObjectiveProgress[];
  readonly intervalObjectives: DestinyObjectiveProgress[];
  readonly intervalsRedeemedCount: number;
  /**
   * If available, this is the number of times this record has been completed. For
   * example, the number of times a seal title has been gilded.
   */
  readonly completedCount?: number;
  /**
   * If available, a list that describes which reward rewards should be shown (true)
   * or hidden (false). This property is for regular record rewards, and not for
   * interval objective rewards.
   */
  readonly rewardVisibilty: boolean[];
}
