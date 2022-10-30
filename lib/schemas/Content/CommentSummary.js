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
 * @type CommentSummary
 * @see {@link https://bungie-net.github.io/#/components/schemas/Content.CommentSummary}
*/
class CommentSummary {
  /**
   * @readonly
   * @type string
  */
  topicId;
  /**
   * @readonly
   * @type number
  */
  commentCount;
}
module.exports = CommentSummary;