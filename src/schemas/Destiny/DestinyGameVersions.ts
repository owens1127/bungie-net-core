/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.8
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
//

/**
 * A flags enumeration/bitmask indicating the versions of the game that a given
 * user has purchased.
 *
 * This enum represents a set of flags - use bitwise operators to check which of
 * these match your value.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.DestinyGameVersions}
 */
export enum DestinyGameVersions {
  None = 0,
  Destiny2 = 1,
  DLC1 = 2,
  DLC2 = 4,
  Forsaken = 8,
  YearTwoAnnualPass = 16,
  Shadowkeep = 32,
  BeyondLight = 64,
  Anniversary30th = 128,
  TheWitchQueen = 256,
  Lightfall = 512
}
