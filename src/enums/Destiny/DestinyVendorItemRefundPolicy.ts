/**
 * The action that happens when the user attempts to refund an item.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.DestinyVendorItemRefundPolicy}
 */
export const DestinyVendorItemRefundPolicy = {
  NotRefundable: 0,
  DeletesItem: 1,
  RevokesLicense: 2
} as const;
