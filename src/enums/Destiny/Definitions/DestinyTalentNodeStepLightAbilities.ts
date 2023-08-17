/**
 * This enum represents a set of flags - use bitwise operators to check which of
 * these match your value.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyTalentNodeStepLightAbilities}
 */
export const DestinyTalentNodeStepLightAbilities = {
  None: 0,
  Grenades: 1,
  Melee: 2,
  MovementModes: 4,
  Orbs: 8,
  SuperEnergy: 16,
  SuperMods: 32,
  All: 63
} as const;
