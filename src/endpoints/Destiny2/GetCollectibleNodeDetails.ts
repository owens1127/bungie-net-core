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

import { rateLimitedRequest } from '../../util/rate-limiter';
import { BungieNetResponse } from '../../util/server-response';
import { InstancedImport, AccessTokenObject } from '../../util/client';
import { BungieAPIError } from '../../errors/BungieAPIError';
import { DestinyComponentType } from '../../schemas';
import { BungieMembershipType } from '../../schemas';
import { DestinyCollectibleNodeDetailResponse } from '../../schemas';
/** @see {@link https://bungie-net.github.io/#Destiny2.GetCollectibleNodeDetails} */
export type GetCollectibleNodeDetailsParams<T extends DestinyComponentType[]> = {
  /**
   * The Destiny Character ID of the character for whom we're getting collectible
   * detail info.
   */
  characterId: string;
  /**
   * The hash identifier of the Presentation Node for whom we should return
   * collectible details. Details will only be returned for collectibles that are
   * direct descendants of this node.
   */
  collectiblePresentationNodeHash: number;
  /**
   * A comma separated list of components to return (as strings or numeric values).
   * See the DestinyComponentType enum for valid components to request. You must
   * request at least one component to receive results.
   */
  components: [...T];
  /** Destiny membership ID of another user. You may be denied. */
  destinyMembershipId: string;
  /** A valid non-BungieNet membership type. */
  membershipType: BungieMembershipType;
};

/**
 * Given a Presentation Node that has Collectibles as direct descendants, this will
 * return item details about those descendants in the context of the requesting
 * character.
 * @see {@link https://bungie-net.github.io/#Destiny2.GetCollectibleNodeDetails}
 */
export async function getCollectibleNodeDetails<T extends DestinyComponentType[]>(
  this: InstancedImport | AccessTokenObject | void,
  params: GetCollectibleNodeDetailsParams<T>
): Promise<BungieNetResponse<DestinyCollectibleNodeDetailResponse<T>>> {
  const token =
    ((this as InstancedImport)?.client?.access_token as string) ?? (this as AccessTokenObject)?.access_token ?? null;
  try {
    return await rateLimitedRequest<DestinyCollectibleNodeDetailResponse<T>>(token, {
      method: 'GET',
      url: `https://www.bungie.net/Platform/Destiny2/${params.membershipType}/Profile/${params.destinyMembershipId}/Character/${params.characterId}/Collectibles/${params.collectiblePresentationNodeHash}/`,
      params: {
        components: params.components ? params.components.join(',') : undefined
      }
    });
  } catch (err) {
    if (err instanceof BungieAPIError) err.stack = new Error().stack;
    throw err;
  }
}
