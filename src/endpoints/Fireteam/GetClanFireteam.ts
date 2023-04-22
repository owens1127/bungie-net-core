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

import { rateLimitedRequest } from '../../util/http/rate-limiter';
import { BungieNetResponse } from '../../interfaces/server-response';
import { AccessTokenObject } from '../../client';
import { BungieAPIError } from '../../errors/BungieAPIError';
import { FireteamResponse } from '../../models';
/** @see {@link https://bungie-net.github.io/#Fireteam.GetClanFireteam} */
export type GetClanFireteamParams = {
  /** The unique id of the fireteam. */
  fireteamId: string;
  /** The group id of the clan. */
  groupId: string;
};

/**
 * Gets a specific fireteam.
 * @see {@link https://bungie-net.github.io/#Fireteam.GetClanFireteam}
 */
export async function getClanFireteam(
  this: AccessTokenObject | void,
  params: GetClanFireteamParams
): Promise<BungieNetResponse<FireteamResponse>> {
  const token = (this as AccessTokenObject)?.access_token ?? undefined;
  try {
    return await rateLimitedRequest<FireteamResponse>(token, {
      method: 'GET',
      url: `https://www.bungie.net/Platform/Fireteam/Clan/${params.groupId}/Summary/${params.fireteamId}/`
    });
  } catch (err) {
    if (err instanceof BungieAPIError) err.stack = new Error().stack;
    throw err;
  }
}
