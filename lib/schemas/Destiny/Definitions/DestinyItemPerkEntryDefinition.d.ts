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
import { ItemPerkVisibility } from '../ItemPerkVisibility';
/**
 * An intrinsic perk on an item, and the requirements for it to be activated.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyItemPerkEntryDefinition}
*/
export interface DestinyItemPerkEntryDefinition {
    /**
     * If this perk is not active, this is the string to show for why it's not
     * providing its benefits.
    */
    readonly requirementDisplayString: string;
    /**
     * A hash identifier for the DestinySandboxPerkDefinition being provided on the
     * item. Mapped to DestinySandboxPerkDefinition in the manifest.
    */
    readonly perkHash: number;
    /** Indicates whether this perk should be shown, or if it should be shown disabled. */
    readonly perkVisibility: ItemPerkVisibility;
}
