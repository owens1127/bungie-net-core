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

import { BungieClientProtocol } from '../../client';
import { BungieNetResponse } from '../../interfaces/BungieNetResponse';
import { DestinyLoadoutUpdateActionRequest } from '../../models';
/**
 * Update the color, icon, and name of a loadout.
 *
 * Wait at least 1s between actions.
 * @see {@link https://bungie-net.github.io/#Destiny2.UpdateLoadoutIdentifiers}
 */
export async function updateLoadoutIdentifiers(
  body: DestinyLoadoutUpdateActionRequest,
  client: BungieClientProtocol
): Promise<BungieNetResponse<number>> {
  return client.fetch<number>({
    method: 'POST',
    url: 'https://www.bungie.net/Platform/Destiny2/Actions/Loadouts/UpdateLoadoutIdentifiers/',
    body
  });
}
