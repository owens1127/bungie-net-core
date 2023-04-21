/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.8
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
import { DestinyDisplayPropertiesDefinition } from './Common/DestinyDisplayPropertiesDefinition';
import { DestinyArtDyeReference } from './DestinyArtDyeReference';
/**
 * Characters can not only have Inventory buckets (containers of items that are
 * generally matched by their type or functionality), they can also have Equipment
 * Slots.
 *
 * The Equipment Slot is an indicator that the related bucket can have instanced
 * items equipped on the character. For instance, the Primary Weapon bucket has an
 * Equipment Slot that determines whether you can equip primary weapons, and holds
 * the association between its slot and the inventory bucket from which it can have
 * items equipped.
 *
 * An Equipment Slot must have a related Inventory Bucket, but not all inventory
 * buckets must have Equipment Slots.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyEquipmentSlotDefinition}
*/
export interface DestinyEquipmentSlotDefinition {
    readonly displayProperties: DestinyDisplayPropertiesDefinition;
    /**
     * These technically point to "Equipment Category Definitions". But don't get
     * excited. There's nothing of significant value in those definitions, so I didn't
     * bother to expose them. You can use the hash here to group equipment slots by
     * common functionality, which serves the same purpose as if we had the Equipment
     * Category definitions exposed.
    */
    readonly equipmentCategoryHash: number;
    /**
     * The inventory bucket that owns this equipment slot. Mapped to
     * DestinyInventoryBucketDefinition in the manifest.
    */
    readonly bucketTypeHash: number;
    /**
     * If True, equipped items should have their custom art dyes applied when rendering
     * the item. Otherwise, custom art dyes on an item should be ignored if the item is
     * equipped in this slot.
    */
    readonly applyCustomArtDyes: boolean;
    /** The Art Dye Channels that apply to this equipment slot. */
    readonly artDyeChannels: DestinyArtDyeReference[];
    /**
     * The unique identifier for this entity. Guaranteed to be unique for the type of
     * entity, but not globally.
     *
     * When entities refer to each other in Destiny content, it is this hash that they
     * are referring to.
    */
    readonly hash: number;
    /** The index of the entity as it was found in the investment tables. */
    readonly index: number;
    /**
     * If this is true, then there is an entity with this identifier/type combination,
     * but BNet is not yet allowed to show it. Sorry!
    */
    readonly redacted: boolean;
}
