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
import { TrendingEntryType } from './TrendingEntryType';
import { TrendingEntryNews } from './TrendingEntryNews';
import { TrendingEntrySupportArticle } from './TrendingEntrySupportArticle';
import { TrendingEntryDestinyItem } from './TrendingEntryDestinyItem';
import { TrendingEntryDestinyActivity } from './TrendingEntryDestinyActivity';
import { TrendingEntryDestinyRitual } from './TrendingEntryDestinyRitual';
import { TrendingEntryCommunityCreation } from './TrendingEntryCommunityCreation';
/** @see {@link https://bungie-net.github.io/#/components/schemas/Trending.TrendingDetail} */
export interface TrendingDetail {
    readonly identifier: string;
    readonly entityType: TrendingEntryType;
    readonly news: TrendingEntryNews;
    readonly support: TrendingEntrySupportArticle;
    readonly destinyItem: TrendingEntryDestinyItem;
    readonly destinyActivity: TrendingEntryDestinyActivity;
    readonly destinyRitual: TrendingEntryDestinyRitual;
    readonly creation: TrendingEntryCommunityCreation;
}
