/**
 * This enum represents a set of flags - use bitwise operators to check which of
 * these match your value.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyTalentNodeStepDamageTypes}
 */
export const DestinyTalentNodeStepDamageTypes = {
  None: 0,
  Kinetic: 1,
  Arc: 2,
  Solar: 4,
  Void: 8,
  All: 15
} as const;
