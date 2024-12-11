/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-net-core code generator program
 * Repository: {@link https://github.com/owens1127/bungie-net-core}
 * Do not edit these files manually.
 */
//

import { BungieMembershipType } from '../../../BungieMembershipType';

/** @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Requests.Actions.DestinyItemSetActionRequest} */

export interface DestinyItemSetActionRequest {
  readonly itemIds: string[];
  readonly characterId: string;
  readonly membershipType: BungieMembershipType;
}
