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

import { CoreSystem } from './CoreSystem';
import { CoreSetting } from './CoreSetting';
import { Destiny2CoreSettings } from './Destiny2CoreSettings';
import { EmailSettings } from '../../User/EmailSettings';

/** @see {@link https://bungie-net.github.io/#/components/schemas/Common.Models.CoreSettingsConfiguration} */
export interface CoreSettingsConfiguration {
  readonly environment: string;
  readonly systems: { [key: string]: CoreSystem };
  readonly ignoreReasons: CoreSetting[];
  readonly forumCategories: CoreSetting[];
  readonly groupAvatars: CoreSetting[];
  readonly defaultGroupTheme: CoreSetting;
  readonly destinyMembershipTypes: CoreSetting[];
  readonly recruitmentPlatformTags: CoreSetting[];
  readonly recruitmentMiscTags: CoreSetting[];
  readonly recruitmentActivities: CoreSetting[];
  readonly userContentLocales: CoreSetting[];
  readonly systemContentLocales: CoreSetting[];
  readonly clanBannerDecals: CoreSetting[];
  readonly clanBannerDecalColors: CoreSetting[];
  readonly clanBannerGonfalons: CoreSetting[];
  readonly clanBannerGonfalonColors: CoreSetting[];
  readonly clanBannerGonfalonDetails: CoreSetting[];
  readonly clanBannerGonfalonDetailColors: CoreSetting[];
  readonly clanBannerStandards: CoreSetting[];
  readonly destiny2CoreSettings: Destiny2CoreSettings;
  readonly emailSettings: EmailSettings;
  readonly fireteamActivities: CoreSetting[];
}
