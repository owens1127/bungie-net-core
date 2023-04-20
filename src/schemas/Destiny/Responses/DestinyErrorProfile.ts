/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.0
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
//

import { PlatformErrorCodes } from '../../Exceptions/PlatformErrorCodes';
import { UserInfoCard } from '../../User/UserInfoCard';

/**
 * If a Destiny Profile can't be returned, but we're pretty certain it's a valid
 * Destiny account, this will contain as much info as we can get about the profile
 * for your use.
 *
 * Assume that the most you'll get is the Error Code, the Membership Type and the
 * Membership ID.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Responses.DestinyErrorProfile}
 */
export interface DestinyErrorProfile {
  /**
   * The error that we encountered. You should be able to look up localized text to
   * show to the user for these failures.
   */
  readonly errorCode: PlatformErrorCodes;
  /**
   * Basic info about the account that failed. Don't expect anything other than
   * membership ID, Membership Type, and displayName to be populated.
   */
  readonly infoCard: UserInfoCard;
}
