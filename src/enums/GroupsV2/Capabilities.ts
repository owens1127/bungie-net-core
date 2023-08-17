/**
 * This enum represents a set of flags - use bitwise operators to check which of
 * these match your value.
 * @see {@link https://bungie-net.github.io/#/components/schemas/GroupsV2.Capabilities}
 */
export const Capabilities = {
  None: 0,
  Leaderboards: 1,
  Callsign: 2,
  OptionalConversations: 4,
  ClanBanner: 8,
  D2InvestmentData: 16,
  Tags: 32,
  Alliances: 64
} as const;
