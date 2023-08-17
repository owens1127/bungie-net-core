/**
 * Determines how items are sorted in an inventory bucket.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.DestinyItemSortType}
 */
export const DestinyItemSortType = {
  ItemId: 0,
  Timestamp: 1,
  StackSize: 2
} as const;
