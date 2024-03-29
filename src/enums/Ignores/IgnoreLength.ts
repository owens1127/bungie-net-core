/** @see {@link https://bungie-net.github.io/#/components/schemas/Ignores.IgnoreLength} */
export const IgnoreLength = {
  None: 0,
  Week: 1,
  TwoWeeks: 2,
  ThreeWeeks: 3,
  Month: 4,
  ThreeMonths: 5,
  SixMonths: 6,
  Year: 7,
  Forever: 8,
  ThreeMinutes: 9,
  Hour: 10,
  ThirtyDays: 11
} as const;
