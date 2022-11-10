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
 * As you run into items that need to be classified for Milestone purposes in ways
 * that we cannot infer via direct data, add a new classification here and use a
 * string constant to represent it in the local item config file.
 *
 * NOTE: This is not all of the item types available, and some of these are
 * holdovers from Destiny 1 that may or may not still exist.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.SpecialItemType}
*/
export declare const enum SpecialItemType {
    None = 0,
    SpecialCurrency = 1,
    Armor = 8,
    Weapon = 9,
    Engram = 23,
    Consumable = 24,
    ExchangeMaterial = 25,
    MissionReward = 27,
    Currency = 29
}
