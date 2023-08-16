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
 * Describes the type of progression that a vendor has.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.DestinyVendorProgressionType}
 */
export enum DestinyVendorProgressionType {
  /** The original rank progression from token redemption. */
  Default = 0,
  /**
   * Progression from ranks in ritual content. For example: Crucible (Shaxx), Gambit (
   * Drifter), and Season 13 Battlegrounds (War Table).
   */
  Ritual = 1,
  /**
   * A vendor progression with no seasonal refresh. For example: Xur in the Eternity
   * destination for the 30th Anniversary.
   */
  NoSeasonalRefresh = 2
}
