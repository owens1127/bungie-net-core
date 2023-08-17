/**
 * Represents a potential state of an Activity Graph node.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.DestinyGraphNodeState}
 */
export const DestinyGraphNodeState = {
  Hidden: 0,
  Visible: 1,
  Teaser: 2,
  Incomplete: 3,
  Completed: 4
} as const;
