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

import { rateLimitedRequest } from '../../util/http/rate-limiter';
import { BungieNetResponse } from '../../interfaces/server-response';
import { AccessTokenObject } from '../../client';
import { BungieAPIError } from '../../errors/BungieAPIError';
import { DestinyComponentType } from '../../models';
import { BungieMembershipType } from '../../models';
import { DestinyCharacterResponse } from '../../models';
/** @see {@link https://bungie-net.github.io/#Destiny2.GetCharacter} */
export type GetCharacterParams<T extends DestinyComponentType[]> = {
  /** ID of the character. */
  characterId: string;
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
 * Returns character information for the supplied character.
 * @see {@link https://bungie-net.github.io/#Destiny2.GetCharacter}
 */
export async function getCharacter<T extends DestinyComponentType[]>(
  this: AccessTokenObject | void,
  params: GetCharacterParams<T>
): Promise<BungieNetResponse<DestinyCharacterResponse<T>>> {
  const token = (this as AccessTokenObject)?.access_token ?? undefined;
  try {
    return await rateLimitedRequest<DestinyCharacterResponse<T>>(token, {
      method: 'GET',
      url: `https://www.bungie.net/Platform/Destiny2/${params.membershipType}/Profile/${params.destinyMembershipId}/Character/${params.characterId}/`,
      params: {
        components: params.components ? params.components.join(',') : undefined
      }
    });
  } catch (err) {
    if (err instanceof BungieAPIError) err.stack = new Error().stack;
    throw err;
  }
}
