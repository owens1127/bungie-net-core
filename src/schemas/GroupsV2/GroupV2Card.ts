/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.5
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
//

import { GroupType } from './GroupType';
import { MembershipOption } from './MembershipOption';
import { Capabilities } from './Capabilities';
import { GroupV2ClanInfo } from './GroupV2ClanInfo';

/**
 * A small infocard of group information, usually used for when a list of groups
 * are returned
 * @see {@link https://bungie-net.github.io/#/components/schemas/GroupsV2.GroupV2Card}
 */
export interface GroupV2Card {
  readonly groupId: string;
  readonly name: string;
  readonly groupType: GroupType;
  readonly creationDate: string;
  readonly about: string;
  readonly motto: string;
  readonly memberCount: number;
  readonly locale: string;
  readonly membershipOption: MembershipOption;
  /**
   * This enum represents a set of flags - use bitwise operators to check which of
   * these match your value.
   */
  readonly capabilities: Capabilities;
  readonly clanInfo: GroupV2ClanInfo;
  readonly avatarPath: string;
  readonly theme: string;
}
