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
/**
 * These definitions represent faction vendors at different points in the game.
 *
 * A single faction may contain multiple vendors, or the same vendor available at
 * two different locations.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyFactionVendorDefinition}
*/
export interface DestinyFactionVendorDefinition {
    /** The faction vendor hash. Mapped to DestinyVendorDefinition in the manifest. */
    readonly vendorHash: number;
    /**
     * The hash identifier for a Destination at which this vendor may be located. Each
     * destination where a Vendor may exist will only ever have a single entry. Mapped
     * to DestinyDestinationDefinition in the manifest.
    */
    readonly destinationHash: number;
    /**
     * The relative path to the background image representing this Vendor at this
     * location, for use in a banner.
    */
    readonly backgroundImagePath: string;
}
