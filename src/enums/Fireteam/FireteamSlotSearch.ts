/** @see {@link https://bungie-net.github.io/#/components/schemas/Fireteam.FireteamSlotSearch} */
export const FireteamSlotSearch = {
  NoSlotRestriction: 0,
  HasOpenPlayerSlots: 1,
  HasOpenPlayerOrAltSlots: 2
} as const;
