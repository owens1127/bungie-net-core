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
 * Represents a stat on an item *or* Character (NOT a Historical Stat, but a
 * physical attribute stat like Attack, Defense etc...)
 * @type DestinyStat
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.DestinyStat}
*/
class DestinyStat {
  /**
   * The hash identifier for the Stat. Use it to look up the DestinyStatDefinition
   * for static data about the stat. Mapped to DestinyStatDefinition in the manifest.
   * @readonly
   * @type number
  */
  statHash;
  /**
   * The current value of the Stat.
   * @readonly
   * @type number
  */
  value;
}
module.exports = DestinyStat;