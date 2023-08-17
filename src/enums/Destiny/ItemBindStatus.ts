/** @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.ItemBindStatus} */
export const ItemBindStatus = {
  NotBound: 0,
  BoundToCharacter: 1,
  BoundToAccount: 2,
  BoundToGuild: 3
} as const;
