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
//

/**
 * A hint for how the presentation node should be displayed when shown in a list.
 * How you use this is your UI is up to you.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.DestinyPresentationDisplayStyle}
*/
export enum DestinyPresentationDisplayStyle {
  /** Display the item as a category, through which sub-items are filtered. */
  Category = 0,
  Badge = 1,
  Medals = 2,
  Collectible = 3,
  Record = 4,
  SeasonalTriumph = 5,
  GuardianRank = 6
}
