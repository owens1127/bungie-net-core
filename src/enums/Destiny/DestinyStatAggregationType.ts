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
export const DestinyStatAggregationType = {
  CharacterAverage: 0,
  Character: 1,
  Item: 2
} as const;
