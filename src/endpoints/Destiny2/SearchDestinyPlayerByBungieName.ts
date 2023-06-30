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

import { BungieClientProtocol } from '../../client';
import { BungieNetResponse } from '../../interfaces/BungieNetResponse';
import { BungieMembershipType } from '../../models';
import { ExactSearchRequest } from '../../models';
import { UserInfoCard } from '../../models';
/** @see {@link https://bungie-net.github.io/#Destiny2.SearchDestinyPlayerByBungieName} */
export type SearchDestinyPlayerByBungieNameParams = {
  /**
   * A valid non-BungieNet membership type, or All. Indicates which memberships to
   * return. You probably want this set to All.
   */
  membershipType: BungieMembershipType;
};

/**
 * Returns a list of Destiny memberships given a global Bungie Display Name. This
 * method will hide overridden memberships due to cross save.
 * @see {@link https://bungie-net.github.io/#Destiny2.SearchDestinyPlayerByBungieName}
 */
export async function searchDestinyPlayerByBungieName(
  params: SearchDestinyPlayerByBungieNameParams,
  body: ExactSearchRequest,
  client: BungieClientProtocol
): Promise<BungieNetResponse<UserInfoCard[]>> {
  return client.fetch<UserInfoCard[]>({
    method: 'POST',
    url: `https://www.bungie.net/Platform/Destiny2/SearchDestinyPlayerByBungieName/${params.membershipType}/`,
    body
  });
}
