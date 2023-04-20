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
/** @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Sockets.DestinyItemPlugBase} */
export interface DestinyItemPlugBase {
    /**
     * The hash identifier of the DestinyInventoryItemDefinition that represents this
     * plug. Mapped to DestinyInventoryItemDefinition in the manifest.
    */
    readonly plugItemHash: number;
    /** If true, this plug has met all of its insertion requirements. Big if true. */
    readonly canInsert: boolean;
    /** If true, this plug will provide its benefits while inserted. */
    readonly enabled: boolean;
    /**
     * If the plug cannot be inserted for some reason, this will have the indexes into
     * the plug item definition's plug.insertionRules property, so you can show the
     * reasons why it can't be inserted.
     *
     * This list will be empty if the plug can be inserted.
    */
    readonly insertFailIndexes: number[];
    /**
     * If a plug is not enabled, this will be populated with indexes into the plug item
     * definition's plug.enabledRules property, so that you can show the reasons why it
     * is not enabled.
     *
     * This list will be empty if the plug is enabled.
    */
    readonly enableFailIndexes: number[];
}
