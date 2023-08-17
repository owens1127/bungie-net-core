/**
 * Activity Modes are grouped into a few possible broad categories.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.DestinyActivityModeCategory}
 */
export const DestinyActivityModeCategory = {
  /** Activities that are neither PVP nor PVE, such as social activities. */
  None: 0,
  /** PvE activities, where you shoot aliens in the face. */
  PvE: 1,
  /** PvP activities, where you shoot your "friends". */
  PvP: 2,
  /**
   * PVE competitive activities, where you shoot whoever you want whenever you want.
   * Or run around collecting small glowing triangles.
   */
  PvECompetitive: 3
} as const;
