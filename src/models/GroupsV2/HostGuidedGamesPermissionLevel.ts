/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-net-core code generator program
 * Repository: {@link https://github.com/owensimpson/bungie-net-core}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
//

/**
 * Used for setting the guided game permission level override (admins and founders
 * can always host guided games).
 * @see {@link https://bungie-net.github.io/#/components/schemas/GroupsV2.HostGuidedGamesPermissionLevel}
 */
export enum HostGuidedGamesPermissionLevel {
  None = 0,
  Beginner = 1,
  Member = 2
}