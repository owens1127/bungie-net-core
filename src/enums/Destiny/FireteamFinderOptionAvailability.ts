/**
 * This enum represents a set of flags - use bitwise operators to check which of
 * these match your value.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.FireteamFinderOptionAvailability}
 */
export const FireteamFinderOptionAvailability = {
  None: 0,
  CreateListingBuilder: 1,
  SearchListingBuilder: 2,
  ListingViewer: 4,
  LobbyViewer: 8
} as const;
