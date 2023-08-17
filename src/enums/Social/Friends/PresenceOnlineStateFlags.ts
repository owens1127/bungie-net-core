/**
 * This enum represents a set of flags - use bitwise operators to check which of
 * these match your value.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Social.Friends.PresenceOnlineStateFlags}
 */
export const PresenceOnlineStateFlags = {
  None: 0,
  Destiny1: 1,
  Destiny2: 2
} as const;
