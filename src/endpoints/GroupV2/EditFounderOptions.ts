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
import { GroupOptionsEditAction } from '../../schemas';
/** @see {@link https://bungie-net.github.io/#GroupV2.EditFounderOptions} */
export type EditFounderOptionsParams = {
  /** Group ID of the group to edit. */
  groupId: string;
};

/**
 * Edit group options only available to a founder. You must have suitable
 * permissions in the group to perform this operation.
 * @see {@link https://bungie-net.github.io/#GroupV2.EditFounderOptions}
 */
export async function editFounderOptions(
  this: AccessTokenObject | void,
  params: EditFounderOptionsParams,
  body: GroupOptionsEditAction
): Promise<BungieNetResponse<number>> {
  const token = (this as AccessTokenObject)?.access_token ?? undefined;
  try {
    return await rateLimitedRequest<number>(token, {
      method: 'POST',
      url: `https://www.bungie.net/Platform/GroupV2/${params.groupId}/EditFounderOptions/`,
      body
    });
  } catch (err) {
    if (err instanceof BungieAPIError) err.stack = new Error().stack;
    throw err;
  }
}
