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

/** @see {@link https://bungie-net.github.io/#Fireteam.GetActivePrivateClanFireteamCount} */
export type GetActivePrivateClanFireteamCountParams = {
  /** The group id of the clan. */
  groupId: string;
};

/**
 * Gets a count of all active non-public fireteams for the specified clan. Maximum
 * value returned is 25.
 * @see {@link https://bungie-net.github.io/#Fireteam.GetActivePrivateClanFireteamCount}
 */
export async function getActivePrivateClanFireteamCount(
  this: InstancedImport | AccessTokenObject | void,
  params: GetActivePrivateClanFireteamCountParams
): Promise<BungieNetResponse<number>> {
  const token =
    ((this as InstancedImport)?.client?.access_token as string) ?? (this as AccessTokenObject)?.access_token ?? null;
  try {
    return await rateLimitedRequest<number>(token, {
      method: 'GET',
      url: `https://www.bungie.net/Platform/Fireteam/Clan/${params.groupId}/ActiveCount/`
    });
  } catch (err) {
    if (err instanceof BungieAPIError) err.stack = new Error().stack;
    throw err;
  }
}