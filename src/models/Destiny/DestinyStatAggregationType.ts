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
 * When a Stat (DestinyStatDefinition) is aggregated, this is the rules used for
 * determining the level and formula used for aggregation.
 *
 * * CharacterAverage = apply a weighted average using the related
 * DestinyStatGroupDefinition on the DestinyInventoryItemDefinition across the
 * character's equipped items. See both of those definitions for details. *
 * Character = don't aggregate: the stat should be located and used directly on the
 * character. * Item = don't aggregate: the stat should be located and used
 * directly on the item.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.DestinyStatAggregationType}
 */
export declare enum DestinyStatAggregationType {
  CharacterAverage = 0,
  Character = 1,
  Item = 2
}
