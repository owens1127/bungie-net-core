/** @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.FireteamFinderOptionSearchFilterType} */
export const FireteamFinderOptionSearchFilterType = {
  None: 0,
  All: 1,
  Any: 2,
  InRangeInclusive: 3,
  InRangeExclusive: 4,
  GreaterThan: 5,
  GreaterThanOrEqualTo: 6,
  LessThan: 7,
  LessThanOrEqualTo: 8
} as const;
