/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.17.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-typedef code generator program,
 * adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Do not edit these files manually.
 */
/**
 * The metrics available for display and selection on an item.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyItemMetricBlockDefinition}
*/
export interface DestinyItemMetricBlockDefinition {
    /**
     * Hash identifiers for any DestinyPresentationNodeDefinition entry that can be
     * used to list available metrics. Any metric listed directly below these nodes, or
     * in any of these nodes' children will be made available for selection. Mapped to
     * DestinyPresentationNodeDefinition in the manifest.
    */
    readonly availableMetricCategoryNodeHashes: number[];
}
