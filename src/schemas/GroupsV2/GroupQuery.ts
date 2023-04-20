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

import { GroupType } from './GroupType';
import { GroupDateRange } from './GroupDateRange';
import { GroupSortBy } from './GroupSortBy';

/**
 * NOTE: GroupQuery, as of Destiny 2, has essentially two totally different and
 * incompatible "modes".
 *
 * If you are querying for a group, you can pass any of the properties below.
 *
 * If you are querying for a Clan, you MUST NOT pass any of the following
 * properties (they must be null or undefined in your request, not just empty
 * string/default values):
 *
 * - groupMemberCountFilter - localeFilter - tagText
 *
 * If you pass these, you will get a useless InvalidParameters error.
 * @see {@link https://bungie-net.github.io/#/components/schemas/GroupsV2.GroupQuery}
 */
export interface GroupQuery {
  readonly name: string;
  readonly groupType: GroupType;
  readonly creationDate: GroupDateRange;
  readonly sortBy: GroupSortBy;
  readonly groupMemberCountFilter?: number;
  readonly localeFilter: string;
  readonly tagText: string;
  readonly itemsPerPage: number;
  readonly currentPage: number;
  readonly requestContinuationToken: string;
}
