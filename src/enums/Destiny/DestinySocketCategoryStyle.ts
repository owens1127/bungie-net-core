/**
 * Represents the possible and known UI styles used by the game for rendering
 * Socket Categories.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.DestinySocketCategoryStyle}
 */
export const DestinySocketCategoryStyle = {
  Unknown: 0,
  Reusable: 1,
  Consumable: 2,
  Unlockable: 3,
  Intrinsic: 4,
  EnergyMeter: 5,
  LargePerk: 6,
  Abilities: 7,
  Supers: 8
} as const;
