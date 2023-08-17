/** @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Advanced.AwaResponseReason} */
export const AwaResponseReason = {
  None: 0,
  /** User provided an answer */
  Answered: 1,
  /**
   * The HTTP request timed out, a new request may be made and an answer may still be
   * provided.
   */
  TimedOut: 2,
  /** This request was replaced by another request. */
  Replaced: 3
} as const;
