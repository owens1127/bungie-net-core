/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-net-core code generator program
 * Repository: {@link https://github.com/owensimpson/bungie-net-core}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
//

/**
 * Defines a plug "Category" that is allowed to be plugged into a socket of this
 * type.
 *
 * This should be compared against a given plug item's
 * DestinyInventoryItemDefinition.plug.plugCategoryHash, which indicates the plug
 * item's category.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.Sockets.DestinyPlugWhitelistEntryDefinition}
 */
export interface DestinyPlugWhitelistEntryDefinition {
  /**
   * The hash identifier of the Plug Category to compare against the plug item's plug.
   * plugCategoryHash.
   *
   * Note that this does NOT relate to any Definition in itself, it is only used for
   * comparison purposes.
   */
  readonly categoryHash: number;
  /** The string identifier for the category, which is here mostly for debug purposes. */
  readonly categoryIdentifier: string;
  /**
   * The list of all plug items (DestinyInventoryItemDefinition) that the socket may
   * randomly be populated with when reinitialized.
   *
   * Which ones you should actually show are determined by the plug being inserted
   * into the socket, and the socket’s type.
   *
   * When you inspect the plug that could go into a Masterwork Socket, look up the
   * socket type of the socket being inspected and find the
   * DestinySocketTypeDefinition.
   *
   * Then, look at the Plugs that can fit in that socket. Find the Whitelist in the
   * DestinySocketTypeDefinition that matches the plug item’s categoryhash.
   *
   * That whitelist entry will potentially have a new “
   * reinitializationPossiblePlugHashes” property.If it does, that means we know what
   * it will roll if you try to insert this plug into this socket.
   */
  readonly reinitializationPossiblePlugHashes: number[];
}