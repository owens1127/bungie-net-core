/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-net-core code generator program
 * Repository: {@link https://github.com/owensimpson/bungie-net-core}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
//

import { DestinyProfileUserInfoCard } from './DestinyProfileUserInfoCard';
import { UserInfoCard } from '../../User/UserInfoCard';
import { DestinyErrorProfile } from './DestinyErrorProfile';

/**
 * I know what you seek. You seek linked accounts. Found them, you have.
 *
 * This contract returns a minimal amount of data about Destiny Accounts that are
 * linked through your Bungie.Net account. We will not return accounts in this
 * response whose
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Responses.DestinyLinkedProfilesResponse}
 */
export interface DestinyLinkedProfilesResponse {
  /**
   * Any Destiny account for whom we could successfully pull characters will be
   * returned here, as the Platform-level summary of user data. (no character data,
   * no Destiny account data other than the Membership ID and Type so you can make
   * further queries)
   */
  readonly profiles: DestinyProfileUserInfoCard[];
  /**
   * If the requested membership had a linked Bungie.Net membership ID, this is the
   * basic information about that BNet account.
   *
   * I know, Tetron; I know this is mixing UserServices concerns with DestinyServices
   * concerns. But it's so damn convenient! https://www.youtube.com/watch?v=X5R-bB-
   * gKVI
   */
  readonly bnetMembership: UserInfoCard;
  /**
   * This is brief summary info for profiles that we believe have valid Destiny info,
   * but who failed to return data for some other reason and thus we know that
   * subsequent calls for their info will also fail.
   */
  readonly profilesWithErrors: DestinyErrorProfile[];
}
