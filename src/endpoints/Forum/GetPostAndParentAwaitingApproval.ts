/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.8
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
import { PostSearchResponse } from '../../schemas';
/** @see {@link https://bungie-net.github.io/#Forum.GetPostAndParentAwaitingApproval} */
export type GetPostAndParentAwaitingApprovalParams = {
  childPostId: string;
  /** If this value is not null or empty, banned posts are requested to be returned */
  showbanned?: string;
};

/**
 * Returns the post specified and its immediate parent of posts that are awaiting
 * approval.
 * @see {@link https://bungie-net.github.io/#Forum.GetPostAndParentAwaitingApproval}
 */
export async function getPostAndParentAwaitingApproval(
  this: AccessTokenObject | void,
  params: GetPostAndParentAwaitingApprovalParams
): Promise<BungieNetResponse<PostSearchResponse>> {
  const token = (this as AccessTokenObject)?.access_token ?? undefined;
  try {
    return await rateLimitedRequest<PostSearchResponse>(token, {
      method: 'GET',
      url: `https://www.bungie.net/Platform/Forum/GetPostAndParentAwaitingApproval/${params.childPostId}/`,
      params: {
        showbanned: params.showbanned
      }
    });
  } catch (err) {
    if (err instanceof BungieAPIError) err.stack = new Error().stack;
    throw err;
  }
}
