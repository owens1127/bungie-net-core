/**
 * When a Vendor Interaction provides rewards, they'll either let you choose one or
 * let you have all of them. This determines which it will be.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.DestinyVendorInteractionRewardSelection}
 */
export const DestinyVendorInteractionRewardSelection = {
  None: 0,
  One: 1,
  All: 2
} as const;
