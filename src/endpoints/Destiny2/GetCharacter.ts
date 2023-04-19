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

import { rateLimitedRequest } from '../../util/rate-limiter.js';
import { BungieNetResponse } from '../../util/server-response.js';
import { InstancedImport, AccessTokenObject } from '../../util/client.js';
import { BungieAPIError } from '../../errors/BungieAPIError.js';
import { DestinyComponentType } from '../../schemas/index.js'
import { BungieMembershipType } from '../../schemas/index.js'
import { DestinyCharacterResponse } from '../../schemas/index.js'
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
}

/**
 * Returns character information for the supplied character.
 * @see {@link https://bungie-net.github.io/#Destiny2.GetCharacter}
*/
export async function getCharacter<T extends DestinyComponentType[]>(this: InstancedImport | AccessTokenObject | void, params: GetCharacterParams<T>): Promise<BungieNetResponse<DestinyCharacterResponse<T>>> {
const token = (this as InstancedImport)?.client?.access_token as string ?? (this as AccessTokenObject)?.access_token ?? null
  try {
    return await rateLimitedRequest<DestinyCharacterResponse<T>>(token, {
      method: 'GET',
      url: `https://www.bungie.net/Platform/Destiny2/${params.membershipType}/Profile/${params.destinyMembershipId}/Character/${params.characterId}/`  ,
      params: {
        components: params.components ? params.components.join(',') : undefined
      }  
    });
  } catch (err) {
    if (err instanceof BungieAPIError) err.stack = new Error().stack
    throw err
  }
}
