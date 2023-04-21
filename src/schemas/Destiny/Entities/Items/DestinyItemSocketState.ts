/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.8
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
//

/**
 * The status of a given item's socket. (which plug is inserted, if any: whether it
 * is enabled, what "reusable" plugs can be inserted, etc...)
 *
 * If I had it to do over, this would probably have a DestinyItemPlug representing
 * the inserted item instead of most of these properties. :shrug:
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Entities.Items.DestinyItemSocketState}
 */
export interface DestinyItemSocketState {
  /**
   * The currently active plug, if any.
   *
   * Note that, because all plugs are statically defined, its effect on stats and
   * perks can be statically determined using the plug item's definition. The stats
   * and perks can be taken at face value on the plug item as the stats and perks it
   * will provide to the user/item. Mapped to DestinyInventoryItemDefinition in the
   * manifest.
   */
  readonly plugHash?: number;
  /**
   * Even if a plug is inserted, it doesn't mean it's enabled.
   *
   * This flag indicates whether the plug is active and providing its benefits.
   */
  readonly isEnabled: boolean;
  /**
   * A plug may theoretically provide benefits but not be visible - for instance,
   * some older items use a plug's damage type perk to modify their own damage type.
   * These, though they are not visible, still affect the item. This field indicates
   * that state.
   *
   * An invisible plug, while it provides benefits if it is Enabled, cannot be
   * directly modified by the user.
   */
  readonly isVisible: boolean;
  /**
   * If a plug is inserted but not enabled, this will be populated with indexes into
   * the plug item definition's plug.enabledRules property, so that you can show the
   * reasons why it is not enabled.
   */
  readonly enableFailIndexes: number[];
}
