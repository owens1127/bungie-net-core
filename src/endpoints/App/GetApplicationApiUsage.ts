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
import { ApiUsage } from '../../schemas';
/** @see {@link https://bungie-net.github.io/#App.GetApplicationApiUsage} */
export type GetApplicationApiUsageParams = {
  /** ID of the application to get usage statistics. */
  applicationId: number;
  /** End time for query. Goes to now if not specified. */
  end?: string;
  /** Start time for query. Goes to 24 hours ago if not specified. */
  start?: string;
};

/**
 * Get API usage by application for time frame specified. You can go as far back as
 * 30 days ago, and can ask for up to a 48 hour window of time in a single request.
 * You must be authenticated with at least the ReadUserData permission to access
 * this endpoint.
 * @see {@link https://bungie-net.github.io/#App.GetApplicationApiUsage}
 */
export async function getApplicationApiUsage(
  this: InstancedImport | AccessTokenObject | void,
  params: GetApplicationApiUsageParams
): Promise<BungieNetResponse<ApiUsage>> {
  const token =
    ((this as InstancedImport)?.client?.access_token as string) ?? (this as AccessTokenObject)?.access_token ?? null;
  try {
    return await rateLimitedRequest<ApiUsage>(token, {
      method: 'GET',
      url: `https://www.bungie.net/Platform/App/ApiUsage/${params.applicationId}/`,
      params: {
        end: params.end,
        start: params.start
      }
    });
  } catch (err) {
    if (err instanceof BungieAPIError) err.stack = new Error().stack;
    throw err;
  }
}