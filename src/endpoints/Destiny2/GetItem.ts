/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.4
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
//

import { rateLimitedRequest } from '../../util/http/rate-limiter';
import { BungieNetResponse } from '../../util/server-response';
import { AccessTokenObject } from '../../util/client';
import { BungieAPIError } from '../../errors/BungieAPIError';
import { DestinyComponentType } from '../../schemas';
import { BungieMembershipType } from '../../schemas';
import { DestinyItemResponse } from '../../schemas';
/** @see {@link https://bungie-net.github.io/#Destiny2.GetItem} */
export type GetItemParams<T extends DestinyComponentType[]> = {
  /**
   * A comma separated list of components to return (as strings or numeric values).
   * See the DestinyComponentType enum for valid components to request. You must
   * request at least one component to receive results.
   */
  components: [...T];
  /** The membership ID of the destiny profile. */
  destinyMembershipId: string;
  /** The Instance ID of the destiny item. */
  itemInstanceId: string;
  /** A valid non-BungieNet membership type. */
  membershipType: BungieMembershipType;
};

/**
 * Retrieve the details of an instanced Destiny Item. An instanced Destiny item is
 * one with an ItemInstanceId. Non-instanced items, such as materials, have no
 * useful instance-specific details and thus are not queryable here.
 * @see {@link https://bungie-net.github.io/#Destiny2.GetItem}
 */
export async function getItem<T extends DestinyComponentType[]>(
  this: AccessTokenObject | void,
  params: GetItemParams<T>
): Promise<BungieNetResponse<DestinyItemResponse<T>>> {
  const token = (this as AccessTokenObject)?.access_token ?? undefined;
  try {
    return await rateLimitedRequest<DestinyItemResponse<T>>(token, {
      method: 'GET',
      url: `https://www.bungie.net/Platform/Destiny2/${params.membershipType}/Profile/${params.destinyMembershipId}/Item/${params.itemInstanceId}/`,
      params: {
        components: params.components ? params.components.join(',') : undefined
      }
    });
  } catch (err) {
    if (err instanceof BungieAPIError) err.stack = new Error().stack;
    throw err;
  }
}
