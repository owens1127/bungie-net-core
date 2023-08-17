/**
 * A hint for what screen should be shown when this presentation node is clicked
 * into. How you use this is your UI is up to you.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.DestinyPresentationScreenStyle}
 */
export const DestinyPresentationScreenStyle = {
  /** Use the "default" view for the presentation nodes. */
  Default: 0,
  /**
   * Show sub-items as "category sets". In-game, you'd see these as a vertical list
   * of child presentation nodes - armor sets for example - and the icons of items
   * within those sets displayed horizontally.
   */
  CategorySets: 1,
  /**
   * Show sub-items as Badges. (I know, I know. We don't need no stinkin' badges har
   * har har)
   */
  Badge: 2
} as const;
