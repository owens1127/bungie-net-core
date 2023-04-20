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

import { DestinyDisplayPropertiesDefinition } from './Common/DestinyDisplayPropertiesDefinition';
import { DestinyRace } from '../DestinyRace';
import { DestinyGender } from '../DestinyGender';

/**
 * In Destiny, "Races" are really more like "Species". Sort of. I mean, are the
 * Awoken a separate species from humans? I'm not sure. But either way, they're
 * defined here. You'll see Exo, Awoken, and Human as examples of these Species.
 * Players will choose one for their character.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyRaceDefinition}
 */
export interface DestinyRaceDefinition {
  readonly displayProperties: DestinyDisplayPropertiesDefinition;
  /**
   * An enumeration defining the existing, known Races/Species for player characters.
   * This value will be the enum value matching this definition.
   */
  readonly raceType: DestinyRace;
  /**
   * A localized string referring to the singular form of the Race's name when
   * referred to in gendered form. Keyed by the DestinyGender.
   */
  readonly genderedRaceNames: { [key in DestinyGender]: string };
  /** Mapped to DestinyGenderDefinition in the manifest. */
  readonly genderedRaceNamesByGenderHash: { [key: number]: string };
  /**
   * The unique identifier for this entity. Guaranteed to be unique for the type of
   * entity, but not globally.
   *
   * When entities refer to each other in Destiny content, it is this hash that they
   * are referring to.
   */
  readonly hash: number;
  /** The index of the entity as it was found in the investment tables. */
  readonly index: number;
  /**
   * If this is true, then there is an entity with this identifier/type combination,
   * but BNet is not yet allowed to show it. Sorry!
   */
  readonly redacted: boolean;
}
