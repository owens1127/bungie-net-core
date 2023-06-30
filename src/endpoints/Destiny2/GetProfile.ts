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
import { DestinyComponentType } from '../../models';
import { BungieMembershipType } from '../../models';
import { DestinyProfileResponse } from '../../models';
/** @see {@link https://bungie-net.github.io/#Destiny2.GetProfile} */
export type GetProfileParams<T extends DestinyComponentType[]> = {
  /**
   * A comma separated list of components to return (as strings or numeric values).
   * See the DestinyComponentType enum for valid components to request. You must
   * request at least one component to receive results.
   */
  components: [...T];
  /** Destiny membership ID. */
  destinyMembershipId: string;
  /** A valid non-BungieNet membership type. */
  membershipType: BungieMembershipType;
};

/**
 * Returns Destiny Profile information for the supplied membership.
 * @see {@link https://bungie-net.github.io/#Destiny2.GetProfile}
 */
export async function getProfile<T extends DestinyComponentType[]>(
  params: GetProfileParams<T>,
  client: BungieClientProtocol
): Promise<BungieNetResponse<DestinyProfileResponse<T>>> {
  return client.fetch<DestinyProfileResponse<T>>({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/${params.membershipType}/Profile/${params.destinyMembershipId}/`,
    params: {
      components: params.components ? params.components.join(',') : undefined
    }
  });
}
