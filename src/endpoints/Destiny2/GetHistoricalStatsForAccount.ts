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
import { DestinyStatsGroupType } from '../../schemas';
import { BungieMembershipType } from '../../schemas';
import { DestinyHistoricalStatsAccountResult } from '../../schemas';
/** @see {@link https://bungie-net.github.io/#Destiny2.GetHistoricalStatsForAccount} */
export type GetHistoricalStatsForAccountParams = {
  /** The Destiny membershipId of the user to retrieve. */
  destinyMembershipId: string;
  /**
   * Groups of stats to include, otherwise only general stats are returned. Comma
   * separated list is allowed. Values: General, Weapons, Medals.
   */
  groups?: DestinyStatsGroupType[];
  /** A valid non-BungieNet membership type. */
  membershipType: BungieMembershipType;
};

/**
 * Gets aggregate historical stats organized around each character for a given
 * account.
 * @see {@link https://bungie-net.github.io/#Destiny2.GetHistoricalStatsForAccount}
 */
export async function getHistoricalStatsForAccount(
  this: InstancedImport | AccessTokenObject | void,
  params: GetHistoricalStatsForAccountParams
): Promise<BungieNetResponse<DestinyHistoricalStatsAccountResult>> {
  const token =
    ((this as InstancedImport)?.client?.access_token as string) ?? (this as AccessTokenObject)?.access_token ?? null;
  try {
    return await rateLimitedRequest<DestinyHistoricalStatsAccountResult>(token, {
      method: 'GET',
      url: `https://www.bungie.net/Platform/Destiny2/${params.membershipType}/Account/${params.destinyMembershipId}/Stats/`,
      params: {
        groups: params.groups ? params.groups.join(',') : undefined
      }
    });
  } catch (err) {
    if (err instanceof BungieAPIError) err.stack = new Error().stack;
    throw err;
  }
}