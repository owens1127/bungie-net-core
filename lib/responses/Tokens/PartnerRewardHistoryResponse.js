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
 * @type PartnerRewardHistoryResponse
 * @see {@link https://bungie-net.github.io/#/components/responses/Tokens.PartnerRewardHistoryResponse}
*/
class PartnerRewardHistoryResponse {
  /**
   * @readonly
   * @type PartnerRewardHistoryResponse
  */
  Response;
  /**
   * @readonly
   * @type PlatformErrorCodes
  */
  ErrorCode;
  /**
   * @readonly
   * @type number
  */
  ThrottleSeconds;
  /**
   * @readonly
   * @type string
  */
  ErrorStatus;
  /**
   * @readonly
   * @type string
  */
  Message;
  /**
   * @readonly
   * @type Object.key<string, string>
  */
  MessageData;
  /**
   * @readonly
   * @type string
  */
  DetailedErrorTrace;
}
module.exports = PartnerRewardHistoryResponse;