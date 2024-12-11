/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-net-core code generator program
 * Repository: {@link https://github.com/owensimpson/bungie-net-core}
 * Do not edit these files manually.
 */
//

/** @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Advanced.AwaInitializeResponse} */

export interface AwaInitializeResponse {
  /**
   * ID used to get the token. Present this ID to the user as it will identify this
   * specific request on their device.
   */
  readonly correlationId: string;
  /** True if the PUSH message will only be sent to the device that made this request. */
  readonly sentToSelf: boolean;
}
