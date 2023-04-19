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

/** @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.DestinyTalentNodeState} */
export enum DestinyTalentNodeState {
  Invalid = 0,
  CanUpgrade = 1,
  NoPoints = 2,
  NoPrerequisites = 3,
  NoSteps = 4,
  NoUnlock = 5,
  NoMaterial = 6,
  NoGridLevel = 7,
  SwappingLocked = 8,
  MustSwap = 9,
  Complete = 10,
  Unknown = 11,
  CreationOnly = 12,
  Hidden = 13
}
