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
import { DestinyLoadoutActionRequest } from '../../models';
/**
 * Equip a loadout. You must have a valid Destiny Account, and either be in a
 * social space, in orbit, or offline.
 *
 * Wait at least 1s between actions.
 * @see {@link https://bungie-net.github.io/#Destiny2.EquipLoadout}
 */
export async function equipLoadout(
  body: DestinyLoadoutActionRequest,
  client: BungieClientProtocol
): Promise<BungieNetResponse<number>> {
  return client.fetch<number>({
    method: 'POST',
    url: 'https://www.bungie.net/Platform/Destiny2/Actions/Loadouts/EquipLoadout/',
    body
  });
}
