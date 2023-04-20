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
/**
 * A subclass of DestinyItemQuantity, that provides not just the item and its
 * quantity but also information that BNet can - at some point - use internally to
 * provide more robust runtime information about the item's qualities.
 *
 * If you want it, please ask! We're just out of time to wire it up right now. Or a
 * clever person just may do it with our existing endpoints.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.Milestones.DestinyMilestoneQuestRewardItem}
*/
export interface DestinyMilestoneQuestRewardItem {
    /**
     * The quest reward item *may* be associated with a vendor. If so, this is that
     * vendor. Use this hash to look up the DestinyVendorDefinition. Mapped to
     * DestinyVendorDefinition in the manifest.
    */
    readonly vendorHash?: number;
    /**
     * The quest reward item *may* be associated with a vendor. If so, this is the
     * index of the item being sold, which we can use at runtime to find instanced item
     * information for the reward item.
    */
    readonly vendorItemIndex?: number;
    /**
     * The hash identifier for the item in question. Use it to look up the item's
     * DestinyInventoryItemDefinition. Mapped to DestinyInventoryItemDefinition in the
     * manifest.
    */
    readonly itemHash: number;
    /**
     * If this quantity is referring to a specific instance of an item, this will have
     * the item's instance ID. Normally, this will be null.
    */
    readonly itemInstanceId?: string;
    /**
     * The amount of the item needed/available depending on the context of where
     * DestinyItemQuantity is being used.
    */
    readonly quantity: number;
    /**
     * Indicates that this item quantity may be conditionally shown or hidden, based on
     * various sources of state. For example: server flags, account state, or character
     * progress.
    */
    readonly hasConditionalVisibility: boolean;
}
