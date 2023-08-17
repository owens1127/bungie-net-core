/**
 * An enumeration of the known UI interactions for Vendors.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.VendorInteractionType}
 */
export const VendorInteractionType = {
  Unknown: 0,
  /** An empty interaction. If this ends up in content, it is probably a game bug. */
  Undefined: 1,
  /** An interaction shown when you complete a quest and receive a reward. */
  QuestComplete: 2,
  /**
   * An interaction shown when you talk to a Vendor as an intermediary step of a
   * quest.
   */
  QuestContinue: 3,
  /** An interaction shown when you are previewing the vendor's reputation rewards. */
  ReputationPreview: 4,
  /** An interaction shown when you rank up with the vendor. */
  RankUpReward: 5,
  /** An interaction shown when you have tokens to turn in for the vendor. */
  TokenTurnIn: 6,
  /** An interaction shown when you're accepting a new quest. */
  QuestAccept: 7,
  /**
   * Honestly, this doesn't seem consistent to me. It is used to give you choices in
   * the Cryptarch as well as some reward prompts by the Eververse vendor. I'll have
   * to look into that further at some point.
   */
  ProgressTab: 8,
  /** These seem even less consistent. I don't know what these are. */
  End: 9,
  /** Also seem inconsistent. I also don't know what these are offhand. */
  Start: 10
} as const;
