/** @see {@link https://bungie-net.github.io/#/components/schemas/FireteamFinder.DestinyFireteamFinderLobbyState} */
export const DestinyFireteamFinderLobbyState = {
  Unknown: 0,
  Inactive: 1,
  Active: 2,
  Expired: 3,
  Closed: 4,
  Canceled: 5,
  Deleted: 6
} as const;
