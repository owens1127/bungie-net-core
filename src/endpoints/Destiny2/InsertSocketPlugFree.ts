/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.5
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
import { DestinyInsertPlugsFreeActionRequest } from '../../schemas';
import { DestinyItemChangeResponse } from '../../schemas';
/**
 * Insert a 'free' plug into an item's socket. This does not require 'Advanced
 * Write Action' authorization and is available to 3rd-party apps, but will only
 * work on 'free and reversible' socket actions (Perks, Armor Mods, Shaders,
 * Ornaments, etc.). You must have a valid Destiny Account, and the character must
 * either be in a social space, in orbit, or offline.
 *
 * Wait at least 0.5s between actions.
 * @see {@link https://bungie-net.github.io/#Destiny2.InsertSocketPlugFree}
 */
export async function insertSocketPlugFree(
  this: AccessTokenObject | void,
  body: DestinyInsertPlugsFreeActionRequest
): Promise<BungieNetResponse<DestinyItemChangeResponse>> {
  const token = (this as AccessTokenObject)?.access_token ?? undefined;
  try {
    return await rateLimitedRequest<DestinyItemChangeResponse>(token, {
      method: 'POST',
      url: 'https://www.bungie.net/Platform/Destiny2/Actions/Items/InsertSocketPlugFree/',
      body
    });
  } catch (err) {
    if (err instanceof BungieAPIError) err.stack = new Error().stack;
    throw err;
  }
}
