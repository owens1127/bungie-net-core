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
import { SearchResultOfContentItemPublicContract } from '../../schemas';
/** @see {@link https://bungie-net.github.io/#Content.SearchContentByTagAndType} */
export type SearchContentByTagAndTypeParams = {
  /** Page number for the search results starting with page 1. */
  currentpage?: number;
  /** Not used. */
  head?: boolean;
  /** Not used. */
  itemsperpage?: number;
  locale: string;
  tag: string;
  type: string;
};

/**
 * Searches for Content Items that match the given Tag and Content Type.
 * @see {@link https://bungie-net.github.io/#Content.SearchContentByTagAndType}
 */
export async function searchContentByTagAndType(
  this: AccessTokenObject | void,
  params: SearchContentByTagAndTypeParams
): Promise<BungieNetResponse<SearchResultOfContentItemPublicContract>> {
  const token = (this as AccessTokenObject)?.access_token ?? undefined;
  try {
    return await rateLimitedRequest<SearchResultOfContentItemPublicContract>(token, {
      method: 'GET',
      url: `https://www.bungie.net/Platform/Content/SearchContentByTagAndType/${params.tag}/${params.type}/${params.locale}/`,
      params: {
        currentpage: params.currentpage,
        head: params.head,
        itemsperpage: params.itemsperpage
      }
    });
  } catch (err) {
    if (err instanceof BungieAPIError) err.stack = new Error().stack;
    throw err;
  }
}
