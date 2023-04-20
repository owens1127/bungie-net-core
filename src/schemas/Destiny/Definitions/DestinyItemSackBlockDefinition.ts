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
 * Some items are "sacks" - they can be "opened" to produce other items. This is
 * information related to its sack status, mostly UI strings. Engrams are an
 * example of items that are considered to be "Sacks".
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyItemSackBlockDefinition}
 */
export interface DestinyItemSackBlockDefinition {
  /**
   * A description of what will happen when you open the sack. As far as I can tell,
   * this is blank currently. Unknown whether it will eventually be populated with
   * useful info.
   */
  readonly detailAction: string;
  /** The localized name of the action being performed when you open the sack. */
  readonly openAction: string;
  readonly selectItemCount: number;
  readonly vendorSackType: string;
  readonly openOnAcquire: boolean;
}
