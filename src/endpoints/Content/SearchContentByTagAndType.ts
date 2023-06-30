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
import { SearchResultOfContentItemPublicContract } from '../../models';
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
  params: SearchContentByTagAndTypeParams,
  client: BungieClientProtocol
): Promise<BungieNetResponse<SearchResultOfContentItemPublicContract>> {
  return client.fetch<SearchResultOfContentItemPublicContract>({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Content/SearchContentByTagAndType/${params.tag}/${params.type}/${params.locale}/`,
    params: {
      currentpage: params.currentpage,
      head: params.head,
      itemsperpage: params.itemsperpage
    }
  });
}
