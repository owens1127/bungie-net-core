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
/**
 * If the enum value is > 100, it is a "special" group that cannot be queried for
 * directly (special cases apply to when they are returned, and are not relevant in
 * general cases)
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.HistoricalStats.Definitions.DestinyStatsGroupType}
*/
export declare const enum DestinyStatsGroupType {
    None = 0,
    General = 1,
    Weapons = 2,
    Medals = 3,
    /**
     * This is purely to serve as the dividing line between filterable and un-
     * filterable groups. Below this number is a group you can pass as a filter. Above
     * it are groups used in very specific circumstances and not relevant for filtering.
    */
    ReservedGroups = 100,
    /** Only applicable while generating leaderboards. */
    Leaderboard = 101,
    /** These will *only* be consumed by GetAggregateStatsByActivity */
    Activity = 102,
    /** These are only consumed and returned by GetUniqueWeaponHistory */
    UniqueWeapon = 103,
    Internal = 104
}
