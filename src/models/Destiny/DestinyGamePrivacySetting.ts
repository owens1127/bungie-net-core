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
 * A player can choose to restrict requests to join their Fireteam to specific
 * states. These are the possible states a user can choose.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.DestinyGamePrivacySetting}
 */
export enum DestinyGamePrivacySetting {
  Open = 0,
  ClanAndFriendsOnly = 1,
  FriendsOnly = 2,
  InvitationOnly = 3,
  Closed = 4
}