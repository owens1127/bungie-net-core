/**
 * If the plug has a specific custom style, this enumeration will represent that
 * style/those styles.
 *
 * This enum represents a set of flags - use bitwise operators to check which of
 * these match your value.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.PlugUiStyles}
 */
export const PlugUiStyles = {
  None: 0,
  Masterwork: 1
} as const;
