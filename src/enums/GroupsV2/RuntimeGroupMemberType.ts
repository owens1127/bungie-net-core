/**
 * The member levels used by all V2 Groups API. Individual group types use their
 * own mappings in their native storage (general uses BnetDbGroupMemberType and D2
 * clans use ClanMemberLevel), but they are all translated to this in the runtime
 * api. These runtime values should NEVER be stored anywhere, so the values can be
 * changed as necessary.
 * @see {@link https://bungie-net.github.io/#/components/schemas/GroupsV2.RuntimeGroupMemberType}
 */
export const RuntimeGroupMemberType = {
  None: 0,
  Beginner: 1,
  Member: 2,
  Admin: 3,
  ActingFounder: 4,
  Founder: 5
} as const;
