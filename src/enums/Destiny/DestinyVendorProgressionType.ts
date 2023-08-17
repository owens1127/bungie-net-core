/**
 * Describes the type of progression that a vendor has.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.DestinyVendorProgressionType}
 */
export const DestinyVendorProgressionType = {
  /** The original rank progression from token redemption. */
  Default: 0,
  /**
   * Progression from ranks in ritual content. For example: Crucible (Shaxx), Gambit (
   * Drifter), and Season 13 Battlegrounds (War Table).
   */
  Ritual: 1,
  /**
   * A vendor progression with no seasonal refresh. For example: Xur in the Eternity
   * destination for the 30th Anniversary.
   */
  NoSeasonalRefresh: 2
} as const;
