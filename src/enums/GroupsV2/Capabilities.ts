/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-net-core code generator program
 * Repository: {@link https://github.com/owensimpson/bungie-net-core}
 * Do not edit these files manually.
 */
//

/**
 * This enum represents a set of flags - use bitwise operators to check which of
 * these match your value.
 * @see {@link https://bungie-net.github.io/#/components/schemas/GroupsV2.Capabilities}
 */
export enum Capabilities {
  None = 0,
  Leaderboards = 1,
  Callsign = 2,
  OptionalConversations = 4,
  ClanBanner = 8,
  D2InvestmentData = 16,
  Tags = 32,
  Alliances = 64
}
