/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-net-core code generator program
 * Repository: {@link https://github.com/owensimpson/bungie-net-core}
 * Do not edit these files manually.
 */
//

import { DestinyFireteamFinderLobbyState } from './DestinyFireteamFinderLobbyState';
import { DestinyFireteamFinderPlayerId } from './DestinyFireteamFinderPlayerId';
import { DestinyFireteamFinderLobbySettings } from './DestinyFireteamFinderLobbySettings';
import { DestinyFireteamFinderLobbyPlayer } from './DestinyFireteamFinderLobbyPlayer';

/** @see {@link https://bungie-net.github.io/#/components/schemas/FireteamFinder.DestinyFireteamFinderLobbyResponse} */

export interface DestinyFireteamFinderLobbyResponse {
  readonly lobbyId: string;
  readonly revision: number;
  readonly state: DestinyFireteamFinderLobbyState;
  readonly owner: DestinyFireteamFinderPlayerId;
  readonly settings: DestinyFireteamFinderLobbySettings;
  readonly players: DestinyFireteamFinderLobbyPlayer[];
  readonly listingId: string;
  readonly createdDateTime: string;
}
