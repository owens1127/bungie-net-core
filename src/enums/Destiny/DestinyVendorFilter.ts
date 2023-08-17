/**
 * Indicates the type of filter to apply to Vendor results.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.DestinyVendorFilter}
 */
export const DestinyVendorFilter = {
  None: 0,
  ApiPurchasable: 1
} as const;
