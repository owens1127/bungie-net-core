/**
 * This enum represents a set of flags - use bitwise operators to check which of
 * these match your value.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.EquippingItemBlockAttributes}
 */
export const EquippingItemBlockAttributes = {
  None: 0,
  EquipOnAcquire: 1
} as const;
