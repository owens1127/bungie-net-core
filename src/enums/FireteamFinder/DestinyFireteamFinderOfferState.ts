/** @see {@link https://bungie-net.github.io/#/components/schemas/FireteamFinder.DestinyFireteamFinderOfferState} */
export const DestinyFireteamFinderOfferState = {
  Unknown: 0,
  Pending: 1,
  Accepted: 2,
  Rejected: 3,
  Deleted: 4,
  Expired: 5
} as const;
