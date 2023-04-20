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

/** @see {@link https://bungie-net.github.io/#Tokens.ApplyMissingPartnerOffersWithoutClaim} */
export type ApplyMissingPartnerOffersWithoutClaimParams = {
  /** The partner application identifier. */
  partnerApplicationId: number;
  /**
   * The bungie.net user to apply missing offers to. If not self, elevated
   * permissions are required.
   */
  targetBnetMembershipId: string;
};

/**
 * Apply a partner offer to the targeted user. This endpoint does not claim a new
 * offer, but any already claimed offers will be applied to the game if not already.
 * @see {@link https://bungie-net.github.io/#Tokens.ApplyMissingPartnerOffersWithoutClaim}
 */
export async function applyMissingPartnerOffersWithoutClaim(
  this: InstancedImport | AccessTokenObject | void,
  params: ApplyMissingPartnerOffersWithoutClaimParams
): Promise<BungieNetResponse<boolean>> {
  const token =
    ((this as InstancedImport)?.client?.access_token as string) ?? (this as AccessTokenObject)?.access_token ?? null;
  try {
    return await rateLimitedRequest<boolean>(token, {
      method: 'POST',
      url: `https://www.bungie.net/Platform/Tokens/Partner/ApplyMissingOffers/${params.partnerApplicationId}/${params.targetBnetMembershipId}/`
    });
  } catch (err) {
    if (err instanceof BungieAPIError) err.stack = new Error().stack;
    throw err;
  }
}