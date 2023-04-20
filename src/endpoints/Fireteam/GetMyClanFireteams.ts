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
import { FireteamPlatform } from '../../schemas';
import { SearchResultOfFireteamResponse } from '../../schemas';
/** @see {@link https://bungie-net.github.io/#Fireteam.GetMyClanFireteams} */
export type GetMyClanFireteamsParams = {
  /**
   * If true, filter by clan. Otherwise, ignore the clan and show all of the user's
   * fireteams.
   */
  groupFilter?: boolean;
  /**
   * The group id of the clan. (This parameter is ignored unless the optional query
   * parameter groupFilter is true).
   */
  groupId: string;
  /** If true, return fireteams that have been closed. */
  includeClosed: boolean;
  /** An optional language filter. */
  langFilter?: string;
  /** Deprecated parameter, ignored. */
  page: number;
  /** The platform filter. */
  platform: FireteamPlatform;
};

/**
 * Gets a listing of all fireteams that caller is an applicant, a member, or an
 * alternate of.
 * @see {@link https://bungie-net.github.io/#Fireteam.GetMyClanFireteams}
 */
export async function getMyClanFireteams(
  this: InstancedImport | AccessTokenObject | void,
  params: GetMyClanFireteamsParams
): Promise<BungieNetResponse<SearchResultOfFireteamResponse>> {
  const token =
    ((this as InstancedImport)?.client?.access_token as string) ?? (this as AccessTokenObject)?.access_token ?? null;
  try {
    return await rateLimitedRequest<SearchResultOfFireteamResponse>(token, {
      method: 'GET',
      url: `https://www.bungie.net/Platform/Fireteam/Clan/${params.groupId}/My/${params.platform}/${params.includeClosed}/${params.page}/`,
      params: {
        groupFilter: params.groupFilter,
        langFilter: params.langFilter
      }
    });
  } catch (err) {
    if (err instanceof BungieAPIError) err.stack = new Error().stack;
    throw err;
  }
}