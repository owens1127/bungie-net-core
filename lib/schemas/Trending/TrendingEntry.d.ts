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
import { TrendingEntryType } from './TrendingEntryType.js';
/**
 * The list entry view for trending items. Returns just enough to show the item on
 * the trending page.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Trending.TrendingEntry}
*/
export interface TrendingEntry {
    /** The weighted score of this trending item. */
    readonly weight: number;
    readonly isFeatured: boolean;
    /**
     * We don't know whether the identifier will be a string, a uint, or a long... so
     * we're going to cast it all to a string. But either way, we need any trending
     * item created to have a single unique identifier for its type.
    */
    readonly identifier: string;
    /**
     * An enum - unfortunately - dictating all of the possible kinds of trending items
     * that you might get in your result set, in case you want to do custom rendering
     * or call to get the details of the item.
    */
    readonly entityType: TrendingEntryType;
    /**
     * The localized "display name/article title/'primary localized identifier'" of the
     * entity.
    */
    readonly displayName: string;
    /**
     * If the entity has a localized tagline/subtitle/motto/whatever, that is found
     * here.
    */
    readonly tagline: string;
    readonly image: string;
    readonly startDate?: string;
    readonly endDate?: string;
    readonly link: string;
    /**
     * If this is populated, the entry has a related WebM video to show. I am 100%
     * certain I am going to regret putting this directly on TrendingEntry, but it will
     * work so yolo
    */
    readonly webmVideo: string;
    /**
     * If this is populated, the entry has a related MP4 video to show. I am 100%
     * certain I am going to regret putting this directly on TrendingEntry, but it will
     * work so yolo
    */
    readonly mp4Video: string;
    /**
     * If isFeatured, this image will be populated with whatever the featured image is.
     * Note that this will likely be a very large image, so don't use it all the time.
    */
    readonly featureImage: string;
    /**
     * If the item is of entityType TrendingEntryType.Container, it may have items -
     * also Trending Entries - contained within it. This is the ordered list of those
     * to display under the Container's header.
    */
    readonly items: TrendingEntry[];
    /** If the entry has a date at which it was created, this is that date. */
    readonly creationDate?: string;
}
