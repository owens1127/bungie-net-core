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

import { UserInfoCard } from '../../User/UserInfoCard';

/** @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.HistoricalStats.DestinyPlayer} */

export interface DestinyPlayer {
  /**
   * Details about the player as they are known in game (platform display name,
   * Destiny emblem)
   */
  readonly destinyUserInfo: UserInfoCard;
  /** Class of the character if applicable and available. */
  readonly characterClass: string;
  /** Mapped to DestinyClassDefinition in the manifest. */
  readonly classHash: number;
  /** Mapped to DestinyRaceDefinition in the manifest. */
  readonly raceHash: number;
  /** Mapped to DestinyGenderDefinition in the manifest. */
  readonly genderHash: number;
  /** Level of the character if available. Zero if it is not available. */
  readonly characterLevel: number;
  /** Light Level of the character if available. Zero if it is not available. */
  readonly lightLevel: number;
  /**
   * Details about the player as they are known on BungieNet. This will be undefined
   * if the player has marked their credential private, or does not have a BungieNet
   * account.
   */
  readonly bungieNetUserInfo: UserInfoCard;
  /**
   * Current clan name for the player. This value may be null or an empty string if
   * the user does not have a clan.
   */
  readonly clanName?: string;
  /**
   * Current clan tag for the player. This value may be null or an empty string if
   * the user does not have a clan.
   */
  readonly clanTag?: string;
  /**
   * If we know the emblem's hash, this can be used to look up the player's emblem at
   * the time of a match when receiving PGCR data, or otherwise their currently
   * equipped emblem (if we are able to obtain it). Mapped to
   * DestinyInventoryItemDefinition in the manifest.
   */
  readonly emblemHash: number;
}
