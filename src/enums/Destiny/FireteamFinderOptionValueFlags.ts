/**
 * This enum represents a set of flags - use bitwise operators to check which of
 * these match your value.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.FireteamFinderOptionValueFlags}
 */
export const FireteamFinderOptionValueFlags = {
  None: 0,
  CreateListingDefaultValue: 1,
  SearchFilterDefaultValue: 2
} as const;
