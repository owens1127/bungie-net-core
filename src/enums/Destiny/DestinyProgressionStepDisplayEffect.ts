/**
 * If progression is earned, this determines whether the progression shows visual
 * effects on the character or its item - or neither.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.DestinyProgressionStepDisplayEffect}
 */
export const DestinyProgressionStepDisplayEffect = {
  None: 0,
  Character: 1,
  Item: 2
} as const;
