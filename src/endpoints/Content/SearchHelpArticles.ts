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

/** @see {@link https://bungie-net.github.io/#Content.SearchHelpArticles} */
export type SearchHelpArticlesParams = {
  searchtext: string;
  size: string;
}

/**
 * Search for Help Articles.
 * @see {@link https://bungie-net.github.io/#Content.SearchHelpArticles}
*/
export async function searchHelpArticles(this: InstancedImport | AccessTokenObject | void, params: SearchHelpArticlesParams): Promise<BungieNetResponse<object>> {
const token = (this as InstancedImport)?.client?.access_token as string ?? (this as AccessTokenObject)?.access_token ?? null
  try {
    return await rateLimitedRequest<object>(token, {
      method: 'GET',
      url: `https://www.bungie.net/Platform/Content/SearchHelpArticles/${params.searchtext}/${params.size}/`    
    });
  } catch (err) {
    if (err instanceof BungieAPIError) err.stack = new Error().stack
    throw err
  }
}
