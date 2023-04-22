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
import { BungieMembershipType } from '../../models';
import { DestinyLinkedProfilesResponse } from '../../models';
/** @see {@link https://bungie-net.github.io/#Destiny2.GetLinkedProfiles} */
export type GetLinkedProfilesParams = {
  /**
   * (optional) if set to 'true', all memberships regardless of whether they're
   * obscured by overrides will be returned. Normal privacy restrictions on account
   * linking will still apply no matter what.
   */
  getAllMemberships?: boolean;
  /**
   * The ID of the membership whose linked Destiny accounts you want returned. Make
   * sure your membership ID matches its Membership Type: don't pass us a PSN
   * membership ID and the XBox membership type, it's not going to work!
   */
  membershipId: string;
  /** The type for the membership whose linked Destiny accounts you want returned. */
  membershipType: BungieMembershipType;
};

/**
 * Returns a summary information about all profiles linked to the requesting
 * membership type/membership ID that have valid Destiny information. The passed-in
 * Membership Type/Membership ID may be a Bungie.Net membership or a Destiny
 * membership. It only returns the minimal amount of data to begin making more
 * substantive requests, but will hopefully serve as a useful alternative to
 * UserServices for people who just care about Destiny data. Note that it will only
 * return linked accounts whose linkages you are allowed to view.
 * @see {@link https://bungie-net.github.io/#Destiny2.GetLinkedProfiles}
 */
export async function getLinkedProfiles(
  this: AccessTokenObject | void,
  params: GetLinkedProfilesParams
): Promise<BungieNetResponse<DestinyLinkedProfilesResponse>> {
  const token = (this as AccessTokenObject)?.access_token ?? undefined;
  try {
    return await rateLimitedRequest<DestinyLinkedProfilesResponse>(token, {
      method: 'GET',
      url: `https://www.bungie.net/Platform/Destiny2/${params.membershipType}/Profile/${params.membershipId}/LinkedProfiles/`,
      params: {
        getAllMemberships: params.getAllMemberships
      }
    });
  } catch (err) {
    if (err instanceof BungieAPIError) err.stack = new Error().stack;
    throw err;
  }
}
