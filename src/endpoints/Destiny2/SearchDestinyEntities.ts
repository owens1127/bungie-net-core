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
import { DestinyEntitySearchResult } from '../../schemas';
/** @see {@link https://bungie-net.github.io/#Destiny2.SearchDestinyEntities} */
export type SearchDestinyEntitiesParams = {
  /** Page number to return, starting with 0. */
  page?: number;
  /** The string to use when searching for Destiny entities. */
  searchTerm: string;
  /**
   * The type of entity for whom you would like results. These correspond to the
   * entity's definition contract name. For instance, if you are looking for items,
   * this property should be 'DestinyInventoryItemDefinition'.
   */
  type: string;
};

/**
 * Gets a page list of Destiny items.
 * @see {@link https://bungie-net.github.io/#Destiny2.SearchDestinyEntities}
 */
export async function searchDestinyEntities(
  this: AccessTokenObject | void,
  params: SearchDestinyEntitiesParams
): Promise<BungieNetResponse<DestinyEntitySearchResult>> {
  const token = (this as AccessTokenObject)?.access_token ?? undefined;
  try {
    return await rateLimitedRequest<DestinyEntitySearchResult>(token, {
      method: 'GET',
      url: `https://www.bungie.net/Platform/Destiny2/Armory/Search/${params.type}/${params.searchTerm}/`,
      params: {
        page: params.page
      }
    });
  } catch (err) {
    if (err instanceof BungieAPIError) err.stack = new Error().stack;
    throw err;
  }
}
