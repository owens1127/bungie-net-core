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

import { DestinyFireteamFinderOptionSettingsControl } from './DestinyFireteamFinderOptionSettingsControl';
import { FireteamFinderOptionSearchFilterType } from '../../FireteamFinderOptionSearchFilterType';

/** @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.FireteamFinder.DestinyFireteamFinderOptionSearcherSettings} */

export interface DestinyFireteamFinderOptionSearcherSettings {
  readonly control: DestinyFireteamFinderOptionSettingsControl;
  readonly searchFilterType: FireteamFinderOptionSearchFilterType;
}
