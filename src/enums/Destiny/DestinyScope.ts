/**
 * There's a lot of places where we need to know scope on more than just a profile
 * or character level. For everything else, there's this more generic sense of
 * scope.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.DestinyScope}
 */
export const DestinyScope = {
  Profile: 0,
  Character: 1
} as const;
