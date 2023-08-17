/**
 * This determines the type of reply that a Vendor will have during an Interaction.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.DestinyVendorReplyType}
 */
export const DestinyVendorReplyType = {
  Accept: 0,
  Decline: 1,
  Complete: 2
} as const;
