/** @see {@link https://bungie-net.github.io/#/components/schemas/FireteamFinder.DestinyFireteamFinderPlayerReadinessState} */
export const DestinyFireteamFinderPlayerReadinessState = {
  Unknown: 0,
  Reserved: 1,
  Disconnected: 2,
  InLobbyUnready: 3,
  InLobbyReady: 4,
  Summoned: 5
} as const;
