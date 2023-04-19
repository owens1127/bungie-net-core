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
