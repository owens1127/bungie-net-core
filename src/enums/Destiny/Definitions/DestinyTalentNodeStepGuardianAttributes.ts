/**
 * This enum represents a set of flags - use bitwise operators to check which of
 * these match your value.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyTalentNodeStepGuardianAttributes}
 */
export const DestinyTalentNodeStepGuardianAttributes = {
  None: 0,
  Stats: 1,
  Shields: 2,
  Health: 4,
  Revive: 8,
  AimUnderFire: 16,
  Radar: 32,
  Invisibility: 64,
  Reputations: 128,
  All: 255
} as const;
