/**
 * A flags enumeration/bitmask indicating the versions of the game that a given
 * user has purchased.
 *
 * This enum represents a set of flags - use bitwise operators to check which of
 * these match your value.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.DestinyGameVersions}
 */
export const DestinyGameVersions = {
  None: 0,
  Destiny2: 1,
  DLC1: 2,
  DLC2: 4,
  Forsaken: 8,
  YearTwoAnnualPass: 16,
  Shadowkeep: 32,
  BeyondLight: 64,
  Anniversary30th: 128,
  TheWitchQueen: 256,
  Lightfall: 512,
  TheFinalShape: 1024
} as const;
