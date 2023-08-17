/** @see {@link https://bungie-net.github.io/#/components/schemas/GroupsV2.GroupApplicationResolveState} */
export const GroupApplicationResolveState = {
  Unresolved: 0,
  Accepted: 1,
  Denied: 2,
  Rescinded: 3
} as const;
