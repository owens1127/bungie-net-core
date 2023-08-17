/**
 * An enumeration representing the potential difficulty levels of an activity.
 * Their names are... more qualitative than quantitative.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.DestinyActivityDifficultyTier}
 */
export const DestinyActivityDifficultyTier = {
  Trivial: 0,
  Easy: 1,
  Normal: 2,
  Challenging: 3,
  Hard: 4,
  Brave: 5,
  AlmostImpossible: 6,
  Impossible: 7
} as const;
