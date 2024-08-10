/** @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.FireteamFinderCodeOptionType} */
export const FireteamFinderCodeOptionType = {
  None: 0,
  ApplicationOnly: 1,
  OnlineOnly: 2,
  PlayerCount: 3,
  Title: 4,
  Tags: 5,
  FinderActivityGraph: 6,
  MicrophoneRequired: 7
} as const;
