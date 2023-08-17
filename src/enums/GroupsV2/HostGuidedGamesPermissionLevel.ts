/**
 * Used for setting the guided game permission level override (admins and founders
 * can always host guided games).
 * @see {@link https://bungie-net.github.io/#/components/schemas/GroupsV2.HostGuidedGamesPermissionLevel}
 */
export const HostGuidedGamesPermissionLevel = {
  None: 0,
  Beginner: 1,
  Member: 2
} as const;
