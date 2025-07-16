/** @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.DestinyActivityModifierConnotation} */
export const DestinyActivityModifierConnotation = {
  Neutral: 0,
  Positive: 1,
  Negative: 2,
  Affix: 3,
  Informational: 4,
  Reward: 5,
  Event: 6,
  Count: 7
} as const;
