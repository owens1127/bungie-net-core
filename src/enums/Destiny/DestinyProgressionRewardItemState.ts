/**
 * Represents the different states a progression reward item can be in.
 *
 * This enum represents a set of flags - use bitwise operators to check which of
 * these match your value.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.DestinyProgressionRewardItemState}
 */
export const DestinyProgressionRewardItemState = {
  None: 0,
  /** If this is set, the reward should be hidden. */
  Invisible: 1,
  /** If this is set, the reward has been earned. */
  Earned: 2,
  /** If this is set, the reward has been claimed. */
  Claimed: 4,
  /**
   * If this is set, the reward is allowed to be claimed by this Character. An item
   * can be earned but still can't be claimed in certain circumstances, like if it's
   * only allowed for certain subclasses. It also might not be able to be claimed if
   * you already claimed it!
   */
  ClaimAllowed: 8
} as const;
