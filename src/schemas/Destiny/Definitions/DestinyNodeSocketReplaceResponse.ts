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
//

/**
 * This is a bit of an odd duck. Apparently, if talent nodes steps have this data,
 * the game will go through on step activation and alter the first Socket it finds
 * on the item that has a type matching the given socket type, inserting the
 * indicated plug item.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyNodeSocketReplaceResponse}
 */
export interface DestinyNodeSocketReplaceResponse {
  /**
   * The hash identifier of the socket type to find amidst the item's sockets (the
   * item to which this talent grid is attached). See DestinyInventoryItemDefinition.
   * sockets.socketEntries to find the socket type of sockets on the item in question.
   * Mapped to DestinySocketTypeDefinition in the manifest.
   */
  readonly socketTypeHash: number;
  /**
   * The hash identifier of the plug item that will be inserted into the socket found.
   * Mapped to DestinyInventoryItemDefinition in the manifest.
   */
  readonly plugItemHash: number;
}
