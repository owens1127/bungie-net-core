/**
 * If the objective has a known UI label, this enumeration will represent it.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.DestinyObjectiveUiStyle}
 */
export const DestinyObjectiveUiStyle = {
  None: 0,
  Highlighted: 1,
  CraftingWeaponLevel: 2,
  CraftingWeaponLevelProgress: 3,
  CraftingWeaponTimestamp: 4,
  CraftingMementos: 5,
  CraftingMementoTitle: 6
} as const;
