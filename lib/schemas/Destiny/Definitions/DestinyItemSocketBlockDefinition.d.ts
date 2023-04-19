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
import { DestinyItemSocketEntryDefinition } from './DestinyItemSocketEntryDefinition.js';
import { DestinyItemIntrinsicSocketEntryDefinition } from './DestinyItemIntrinsicSocketEntryDefinition.js';
import { DestinyItemSocketCategoryDefinition } from './DestinyItemSocketCategoryDefinition.js';
/**
 * If defined, the item has at least one socket.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyItemSocketBlockDefinition}
*/
export interface DestinyItemSocketBlockDefinition {
    /**
     * This was supposed to be a string that would give per-item details about sockets.
     * In practice, it turns out that all this ever has is the localized word "details".
     * ... that's lame, but perhaps it will become something cool in the future.
    */
    readonly detail: string;
    /**
     * Each non-intrinsic (or mutable) socket on an item is defined here. Check inside
     * for more info.
    */
    readonly socketEntries: DestinyItemSocketEntryDefinition[];
    /**
     * Each intrinsic (or immutable/permanent) socket on an item is defined here, along
     * with the plug that is permanently affixed to the socket.
    */
    readonly intrinsicSockets: DestinyItemIntrinsicSocketEntryDefinition[];
    /**
     * A convenience property, that refers to the sockets in the "sockets" property,
     * pre-grouped by category and ordered in the manner that they should be grouped in
     * the UI. You could form this yourself with the existing data, but why would you
     * want to? Enjoy life man.
    */
    readonly socketCategories: DestinyItemSocketCategoryDefinition[];
}
