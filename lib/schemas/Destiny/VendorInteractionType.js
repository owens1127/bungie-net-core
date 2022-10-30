/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.16.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-typedef code generator program,
 * adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Do not edit these files manually.
 */

/**
 * An enumeration of the known UI interactions for Vendors.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.VendorInteractionType}
*/
module.exports = Object.freeze({
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
})