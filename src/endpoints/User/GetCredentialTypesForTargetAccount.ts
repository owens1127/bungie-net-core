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
import { GetCredentialTypesForAccountResponse } from '../../schemas';
/** @see {@link https://bungie-net.github.io/#User.GetCredentialTypesForTargetAccount} */
export type GetCredentialTypesForTargetAccountParams = {
  /** The user's membership id */
  membershipId: string;
};

/**
 * Returns a list of credential types attached to the requested account
 * @see {@link https://bungie-net.github.io/#User.GetCredentialTypesForTargetAccount}
 */
export async function getCredentialTypesForTargetAccount(
  this: AccessTokenObject | void,
  params: GetCredentialTypesForTargetAccountParams
): Promise<BungieNetResponse<GetCredentialTypesForAccountResponse[]>> {
  const token = (this as AccessTokenObject)?.access_token ?? undefined;
  try {
    return await rateLimitedRequest<GetCredentialTypesForAccountResponse[]>(token, {
      method: 'GET',
      url: `https://www.bungie.net/Platform/User/GetCredentialTypesForTargetAccount/${params.membershipId}/`
    });
  } catch (err) {
    if (err instanceof BungieAPIError) err.stack = new Error().stack;
    throw err;
  }
}
