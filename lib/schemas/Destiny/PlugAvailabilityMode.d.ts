/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.16.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-typedef code generator program,
 * adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Do not edit these files manually.
 */
/**
 * This enum determines whether the plug is available to be inserted.
 *
 * - Normal means that all existing rules for plug insertion apply.
 *
 * - UnavailableIfSocketContainsMatchingPlugCategory means that the plug is only
 * available if the socket does NOT match the plug category.
 *
 * - AvailableIfSocketContainsMatchingPlugCategory means that the plug is only
 * available if the socket DOES match the plug category.
 *
 * For category matching, use the plug's "plugCategoryIdentifier" property,
 * comparing it to
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.PlugAvailabilityMode}
*/
export declare const enum PlugAvailabilityMode {
    Normal = 0,
    UnavailableIfSocketContainsMatchingPlugCategory = 1,
    AvailableIfSocketContainsMatchingPlugCategory = 2
}
