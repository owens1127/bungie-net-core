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
import { DestinyItemSortType } from '../DestinyItemSortType.js';
/**
 * Information about a single inventory bucket in a vendor flyout UI and how it is
 * shown.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyVendorInventoryFlyoutBucketDefinition}
*/
export interface DestinyVendorInventoryFlyoutBucketDefinition {
    /** If true, the inventory bucket should be able to be collapsed visually. */
    readonly collapsible: boolean;
    /**
     * The inventory bucket whose contents should be shown. Mapped to
     * DestinyInventoryBucketDefinition in the manifest.
    */
    readonly inventoryBucketHash: number;
    /** The methodology to use for sorting items from the flyout. */
    readonly sortItemsBy: DestinyItemSortType;
}
