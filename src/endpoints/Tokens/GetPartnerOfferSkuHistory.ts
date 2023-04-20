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
import { PartnerOfferSkuHistoryResponse } from '../../schemas';
/** @see {@link https://bungie-net.github.io/#Tokens.GetPartnerOfferSkuHistory} */
export type GetPartnerOfferSkuHistoryParams = {
  /** The partner application identifier. */
  partnerApplicationId: number;
  /**
   * The bungie.net user to apply missing offers to. If not self, elevated
   * permissions are required.
   */
  targetBnetMembershipId: string;
};

/**
 * Returns the partner sku and offer history of the targeted user. Elevated
 * permissions are required to see users that are not yourself.
 * @see {@link https://bungie-net.github.io/#Tokens.GetPartnerOfferSkuHistory}
 */
export async function getPartnerOfferSkuHistory(
  this: AccessTokenObject | void,
  params: GetPartnerOfferSkuHistoryParams
): Promise<BungieNetResponse<PartnerOfferSkuHistoryResponse[]>> {
  const token = (this as AccessTokenObject)?.access_token ?? undefined;
  try {
    return await rateLimitedRequest<PartnerOfferSkuHistoryResponse[]>(token, {
      method: 'GET',
      url: `https://www.bungie.net/Platform/Tokens/Partner/History/${params.partnerApplicationId}/${params.targetBnetMembershipId}/`
    });
  } catch (err) {
    if (err instanceof BungieAPIError) err.stack = new Error().stack;
    throw err;
  }
}
