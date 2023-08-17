/**
 * Represents the socket energy types for Armor 2.0, Ghosts 2.0, and Stasis
 * subclasses.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.DestinyEnergyType}
 */
export const DestinyEnergyType = {
  Any: 0,
  Arc: 1,
  Thermal: 2,
  Void: 3,
  Ghost: 4,
  Subclass: 5,
  Stasis: 6
} as const;
