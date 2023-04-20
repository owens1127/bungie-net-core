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
import { UserSearchResponse } from '../../schemas';
/** @see {@link https://bungie-net.github.io/#User.SearchByGlobalNamePrefix} */
export type SearchByGlobalNamePrefixParams = {
  /** The display name prefix you're looking for. */
  displayNamePrefix: string;
  /** The zero-based page of results you desire. */
  page: number;
};

/**
 * [OBSOLETE] Do not use this to search users, use SearchByGlobalNamePost instead.
 * @see {@link https://bungie-net.github.io/#User.SearchByGlobalNamePrefix}
 */
export async function searchByGlobalNamePrefix(
  this: AccessTokenObject | void,
  params: SearchByGlobalNamePrefixParams
): Promise<BungieNetResponse<UserSearchResponse>> {
  const token = (this as AccessTokenObject)?.access_token ?? undefined;
  try {
    return await rateLimitedRequest<UserSearchResponse>(token, {
      method: 'GET',
      url: `https://www.bungie.net/Platform/User/Search/Prefix/${params.displayNamePrefix}/${params.page}/`
    });
  } catch (err) {
    if (err instanceof BungieAPIError) err.stack = new Error().stack;
    throw err;
  }
}
