/**
 * A plug can optionally have a "Breaker Type": a special ability that can affect
 * units in unique ways. Activating this plug can grant one of these types.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.DestinyBreakerType}
 */
export const DestinyBreakerType = {
  None: 0,
  ShieldPiercing: 1,
  Disruption: 2,
  Stagger: 3
} as const;
