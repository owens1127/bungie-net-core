/**
 * This enum represents a set of flags - use bitwise operators to check which of
 * these match your value.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Ignores.IgnoreStatus}
 */
export const IgnoreStatus = {
  NotIgnored: 0,
  IgnoredUser: 1,
  IgnoredGroup: 2,
  IgnoredByGroup: 4,
  IgnoredPost: 8,
  IgnoredTag: 16,
  IgnoredGlobal: 32
} as const;
