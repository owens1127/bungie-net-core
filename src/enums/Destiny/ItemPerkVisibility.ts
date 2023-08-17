/**
 * Indicates how a perk should be shown, or if it should be, in the game UI. Maybe
 * useful for those of you trying to filter out internal-use-only perks (or for
 * those of you trying to figure out what they do!)
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.ItemPerkVisibility}
 */
export const ItemPerkVisibility = {
  Visible: 0,
  Disabled: 1,
  Hidden: 2
} as const;
