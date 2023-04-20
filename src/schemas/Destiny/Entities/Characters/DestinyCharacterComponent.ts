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

import { BungieMembershipType } from '../../../BungieMembershipType';
import { DestinyRace } from '../../DestinyRace';
import { DestinyClass } from '../../DestinyClass';
import { DestinyGender } from '../../DestinyGender';
import { DestinyColor } from '../../Misc/DestinyColor';
import { DestinyProgression } from '../../DestinyProgression';

/**
 * This component contains base properties of the character. You'll probably want
 * to always request this component, but hey you do you.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Entities.Characters.DestinyCharacterComponent}
 */
export interface DestinyCharacterComponent {
  /**
   * Every Destiny Profile has a membershipId. This is provided on the character as
   * well for convenience.
   */
  readonly membershipId: string;
  /**
   * membershipType tells you the platform on which the character plays. Examine the
   * BungieMembershipType enumeration for possible values.
   */
  readonly membershipType: BungieMembershipType;
  /** The unique identifier for the character. */
  readonly characterId: string;
  /** The last date that the user played Destiny. */
  readonly dateLastPlayed: string;
  /** If the user is currently playing, this is how long they've been playing. */
  readonly minutesPlayedThisSession: string;
  /**
   * If this value is 525,600, then they played Destiny for a year. Or they're a very
   * dedicated Rent fan. Note that this includes idle time, not just time spent
   * actually in activities shooting things.
   */
  readonly minutesPlayedTotal: string;
  /**
   * The user's calculated "Light Level". Light level is an indicator of your power
   * that mostly matters in the end game, once you've reached the maximum character
   * level: it's a level that's dependent on the average Attack/Defense power of your
   * items.
   */
  readonly light: number;
  /**
   * Your character's stats, such as Agility, Resilience, etc... *not* historical
   * stats.
   *
   * You'll have to call a different endpoint for those.
   */
  readonly stats: { [key: number]: number };
  /**
   * Use this hash to look up the character's DestinyRaceDefinition. Mapped to
   * DestinyRaceDefinition in the manifest.
   */
  readonly raceHash: number;
  /**
   * Use this hash to look up the character's DestinyGenderDefinition. Mapped to
   * DestinyGenderDefinition in the manifest.
   */
  readonly genderHash: number;
  /**
   * Use this hash to look up the character's DestinyClassDefinition. Mapped to
   * DestinyClassDefinition in the manifest.
   */
  readonly classHash: number;
  /**
   * Mostly for historical purposes at this point, this is an enumeration for the
   * character's race.
   *
   * It'll be preferable in the general case to look up the related definition: but
   * for some people this was too convenient to remove.
   */
  readonly raceType: DestinyRace;
  /**
   * Mostly for historical purposes at this point, this is an enumeration for the
   * character's class.
   *
   * It'll be preferable in the general case to look up the related definition: but
   * for some people this was too convenient to remove.
   */
  readonly classType: DestinyClass;
  /**
   * Mostly for historical purposes at this point, this is an enumeration for the
   * character's Gender.
   *
   * It'll be preferable in the general case to look up the related definition: but
   * for some people this was too convenient to remove. And yeah, it's an enumeration
   * and not a boolean. Fight me.
   */
  readonly genderType: DestinyGender;
  /**
   * A shortcut path to the user's currently equipped emblem image. If you're just
   * showing summary info for a user, this is more convenient than examining their
   * equipped emblem and looking up the definition.
   */
  readonly emblemPath: string;
  /**
   * A shortcut path to the user's currently equipped emblem background image. If you'
   * re just showing summary info for a user, this is more convenient than examining
   * their equipped emblem and looking up the definition.
   */
  readonly emblemBackgroundPath: string;
  /**
   * The hash of the currently equipped emblem for the user. Can be used to look up
   * the DestinyInventoryItemDefinition. Mapped to DestinyInventoryItemDefinition in
   * the manifest.
   */
  readonly emblemHash: number;
  /**
   * A shortcut for getting the background color of the user's currently equipped
   * emblem without having to do a DestinyInventoryItemDefinition lookup.
   */
  readonly emblemColor: DestinyColor;
  /**
   * The progression that indicates your character's level. Not their light level,
   * but their character level: you know, the thing you max out a couple hours in and
   * then ignore for the sake of light level.
   */
  readonly levelProgression: DestinyProgression;
  /** The "base" level of your character, not accounting for any light level. */
  readonly baseCharacterLevel: number;
  /**
   * A number between 0 and 100, indicating the whole and fractional % remaining to
   * get to the next character level.
   */
  readonly percentToNextLevel: number;
  /**
   * If this Character has a title assigned to it, this is the identifier of the
   * DestinyRecordDefinition that has that title information. Mapped to
   * DestinyRecordDefinition in the manifest.
   */
  readonly titleRecordHash?: number;
}
