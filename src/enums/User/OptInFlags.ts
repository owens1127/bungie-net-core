/**
 * This enum represents a set of flags - use bitwise operators to check which of
 * these match your value.
 * @see {@link https://bungie-net.github.io/#/components/schemas/User.OptInFlags}
 */
export const OptInFlags = {
  None: 0,
  Newsletter: 1,
  System: 2,
  Marketing: 4,
  UserResearch: 8,
  CustomerService: 16,
  Social: 32,
  PlayTests: 64,
  PlayTestsLocal: 128,
  Careers: 256
} as const;
