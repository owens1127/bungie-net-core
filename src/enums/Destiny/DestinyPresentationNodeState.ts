/**
 * I know this doesn't look like a Flags Enumeration/bitmask right now, but I
 * assure you it is. This is the possible states that a Presentation Node can be in,
 * and it is almost certain that its potential states will increase in the future.
 * So don't treat it like a straight up enumeration.
 *
 * This enum represents a set of flags - use bitwise operators to check which of
 * these match your value.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.DestinyPresentationNodeState}
 */
export const DestinyPresentationNodeState = {
  None: 0,
  /**
   * If this is set, the game recommends that you not show this node. But you know
   * your life, do what you've got to do.
   */
  Invisible: 1,
  /** Turns out Presentation Nodes can also be obscured. If they are, this is set. */
  Obscured: 2
} as const;
