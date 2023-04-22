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

import { DestinyProgression } from '../Destiny/DestinyProgression';
import { ClanBanner } from './ClanBanner';

/**
 * The same as GroupV2ClanInfo, but includes any investment data.
 * @see {@link https://bungie-net.github.io/#/components/schemas/GroupsV2.GroupV2ClanInfoAndInvestment}
 */
export interface GroupV2ClanInfoAndInvestment {
  readonly d2ClanProgressions: { [key: number]: DestinyProgression };
  readonly clanCallsign: string;
  readonly clanBannerData: ClanBanner;
}