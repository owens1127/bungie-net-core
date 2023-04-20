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
//

/**
 * A hint for what screen should be shown when this presentation node is clicked
 * into. How you use this is your UI is up to you.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.DestinyPresentationScreenStyle}
 */
export enum DestinyPresentationScreenStyle {
  /** Use the "default" view for the presentation nodes. */
  Default = 0,
  /**
   * Show sub-items as "category sets". In-game, you'd see these as a vertical list
   * of child presentation nodes - armor sets for example - and the icons of items
   * within those sets displayed horizontally.
   */
  CategorySets = 1,
  /**
   * Show sub-items as Badges. (I know, I know. We don't need no stinkin' badges har
   * har har)
   */
  Badge = 2
}
