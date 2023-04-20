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

/**
 * This enum represents a set of flags - use bitwise operators to check which of
 * these match your value.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyTalentNodeStepWeaponPerformances}
 */
export const enum DestinyTalentNodeStepWeaponPerformances {
  None = 0,
  RateOfFire = 1,
  Damage = 2,
  Accuracy = 4,
  Range = 8,
  Zoom = 16,
  Recoil = 32,
  Ready = 64,
  Reload = 128,
  HairTrigger = 256,
  AmmoAndMagazine = 512,
  TrackingAndDetonation = 1024,
  ShotgunSpread = 2048,
  ChargeTime = 4096,
  All = 8191
}
