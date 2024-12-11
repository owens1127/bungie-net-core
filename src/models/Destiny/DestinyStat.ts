/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-net-core code generator program
 * Repository: {@link https://github.com/owensimpson/bungie-net-core}
 * Do not edit these files manually.
 */
//

/**
 * Represents a stat on an item *or* Character (NOT a Historical Stat, but a
 * physical attribute stat like Attack, Defense etc...)
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.DestinyStat}
 */

export interface DestinyStat {
  /**
   * The hash identifier for the Stat. Use it to look up the DestinyStatDefinition
   * for static data about the stat. Mapped to DestinyStatDefinition in the manifest.
   */
  readonly statHash: number;
  /** The current value of the Stat. */
  readonly value: number;
}
