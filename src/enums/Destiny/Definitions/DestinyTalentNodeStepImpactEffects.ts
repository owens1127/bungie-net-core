/**
 * This enum represents a set of flags - use bitwise operators to check which of
 * these match your value.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyTalentNodeStepImpactEffects}
 */
export const DestinyTalentNodeStepImpactEffects = {
  None: 0,
  ArmorPiercing: 1,
  Ricochet: 2,
  Flinch: 4,
  CollateralDamage: 8,
  Disorient: 16,
  HighlightTarget: 32,
  All: 63
} as const;
