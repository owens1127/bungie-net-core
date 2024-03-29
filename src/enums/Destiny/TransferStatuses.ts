/**
 * Whether you can transfer an item, and why not if you can't.
 *
 * This enum represents a set of flags - use bitwise operators to check which of
 * these match your value.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.TransferStatuses}
 */
export const TransferStatuses = {
  /** The item can be transferred. */
  CanTransfer: 0,
  /** You can't transfer the item because it is equipped on a character. */
  ItemIsEquipped: 1,
  /**
   * The item is defined as not transferrable in its DestinyInventoryItemDefinition.
   * nonTransferrable property.
   */
  NotTransferrable: 2,
  /**
   * You could transfer the item, but the place you're trying to put it has run out
   * of room! Check your remaining Vault and/or character space.
   */
  NoRoomInDestination: 4
} as const;
