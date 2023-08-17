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
  GuardianRank: 6
} as const;
