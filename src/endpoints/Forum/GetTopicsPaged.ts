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
import { ForumTopicsCategoryFiltersEnum } from '../../schemas/index.js'
import { ForumTopicsQuickDateEnum } from '../../schemas/index.js'
import { ForumTopicsSortEnum } from '../../schemas/index.js'
import { PostSearchResponse } from '../../schemas/index.js'
/** @see {@link https://bungie-net.github.io/#Forum.GetTopicsPaged} */
export type GetTopicsPagedParams = {
  /** A category filter */
  categoryFilter: ForumTopicsCategoryFiltersEnum;
  /** The group, if any. */
  group: string;
  /**
   * Comma seperated list of locales posts must match to return in the result list.
   * Default 'en'
  */
  locales?: string;
  /** Zero paged page number */
  page: number;
  /** Unused */
  pageSize: number;
  /** A date filter. */
  quickDate: ForumTopicsQuickDateEnum;
  /** The sort mode. */
  sort: ForumTopicsSortEnum;
  /** The tags to search, if any. */
  tagstring?: string;
}

/**
 * Get topics from any forum.
 * @see {@link https://bungie-net.github.io/#Forum.GetTopicsPaged}
*/
export async function getTopicsPaged(this: InstancedImport | AccessTokenObject | void, params: GetTopicsPagedParams): Promise<BungieNetResponse<PostSearchResponse>> {
const token = (this as InstancedImport)?.client?.access_token as string ?? (this as AccessTokenObject)?.access_token ?? null
  try {
    return await rateLimitedRequest<PostSearchResponse>(token, {
      method: 'GET',
      url: `https://www.bungie.net/Platform/Forum/GetTopicsPaged/${params.page}/${params.pageSize}/${params.group}/${params.sort}/${params.quickDate}/${params.categoryFilter}/`  ,
      params: {
        locales: params.locales,
        tagstring: params.tagstring
      }  
    });
  } catch (err) {
    if (err instanceof BungieAPIError) err.stack = new Error().stack
    throw err
  }
}
