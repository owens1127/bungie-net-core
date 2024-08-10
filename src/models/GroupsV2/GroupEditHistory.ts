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

import { UserInfoCard } from '../User/UserInfoCard';

/** @see {@link https://bungie-net.github.io/#/components/schemas/GroupsV2.GroupEditHistory} */

export interface GroupEditHistory {
  readonly groupId: string;
  readonly name: string;
  readonly nameEditors?: string;
  readonly about: string;
  readonly aboutEditors?: string;
  readonly motto: string;
  readonly mottoEditors?: string;
  readonly clanCallsign: string;
  readonly clanCallsignEditors?: string;
  readonly editDate?: string;
  readonly groupEditors: UserInfoCard[];
}