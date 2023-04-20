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
 * The various known UI styles in which an item can be highlighted. It'll be up to
 * you to determine what you want to show based on this highlighting, BNet doesn't
 * have any assets that correspond to these states. And yeah, RiseOfIron and Comet
 * have their own special highlight states. Don't ask me, I can't imagine they're
 * still used.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.ActivityGraphNodeHighlightType}
 */
export enum ActivityGraphNodeHighlightType {
  None = 0,
  Normal = 1,
  Hyper = 2,
  Comet = 3,
  RiseOfIron = 4
}
