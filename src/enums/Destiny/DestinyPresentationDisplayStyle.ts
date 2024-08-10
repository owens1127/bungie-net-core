/**
 * A hint for how the presentation node should be displayed when shown in a list.
 * How you use this is your UI is up to you.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.DestinyPresentationDisplayStyle}
 */
export const DestinyPresentationDisplayStyle = {
  /** Display the item as a category, through which sub-items are filtered. */
  Category: 0,
  Badge: 1,
  Medals: 2,
  Collectible: 3,
  Record: 4,
  SeasonalTriumph: 5,
  GuardianRank: 6,
  CategoryCollectibles: 7,
  CategoryCurrencies: 8,
  CategoryEmblems: 9,
  CategoryEmotes: 10,
  CategoryEngrams: 11,
  CategoryFinishers: 12,
  CategoryGhosts: 13,
  CategoryMisc: 14,
  CategoryMods: 15,
  CategoryOrnaments: 16,
  CategoryShaders: 17,
  CategoryShips: 18,
  CategorySpawnfx: 19,
  CategoryUpgradeMaterials: 20
} as const;
