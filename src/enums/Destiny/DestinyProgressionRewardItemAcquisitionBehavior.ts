/**
 * Represents the different kinds of acquisition behavior for progression reward
 * items.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.DestinyProgressionRewardItemAcquisitionBehavior}
 */
export const DestinyProgressionRewardItemAcquisitionBehavior = {
  Instant: 0,
  PlayerClaimRequired: 1
} as const;
