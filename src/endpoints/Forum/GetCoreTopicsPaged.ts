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
import { ForumTopicsCategoryFiltersEnum } from '../../schemas';
import { ForumTopicsQuickDateEnum } from '../../schemas';
import { ForumTopicsSortEnum } from '../../schemas';
import { PostSearchResponse } from '../../schemas';
/** @see {@link https://bungie-net.github.io/#Forum.GetCoreTopicsPaged} */
export type GetCoreTopicsPagedParams = {
  /** The category filter. */
  categoryFilter: ForumTopicsCategoryFiltersEnum;
  /**
   * Comma seperated list of locales posts must match to return in the result list.
   * Default 'en'
   */
  locales?: string;
  /** Zero base page */
  page: number;
  /** The date filter. */
  quickDate: ForumTopicsQuickDateEnum;
  /** The sort mode. */
  sort: ForumTopicsSortEnum;
};

/**
 * Gets a listing of all topics marked as part of the core group.
 * @see {@link https://bungie-net.github.io/#Forum.GetCoreTopicsPaged}
 */
export async function getCoreTopicsPaged(
  this: InstancedImport | AccessTokenObject | void,
  params: GetCoreTopicsPagedParams
): Promise<BungieNetResponse<PostSearchResponse>> {
  const token =
    ((this as InstancedImport)?.client?.access_token as string) ?? (this as AccessTokenObject)?.access_token ?? null;
  try {
    return await rateLimitedRequest<PostSearchResponse>(token, {
      method: 'GET',
      url: `https://www.bungie.net/Platform/Forum/GetCoreTopicsPaged/${params.page}/${params.sort}/${params.quickDate}/${params.categoryFilter}/`,
      params: {
        locales: params.locales
      }
    });
  } catch (err) {
    if (err instanceof BungieAPIError) err.stack = new Error().stack;
    throw err;
  }
}
