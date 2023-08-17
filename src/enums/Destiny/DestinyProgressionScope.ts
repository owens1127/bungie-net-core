/**
 * There are many Progressions in Destiny (think Character Level, or Reputation).
 * These are the various "Scopes" of Progressions, which affect many things: *
 * Where/if they are stored * How they are calculated * Where they can be used in
 * other game logic
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.DestinyProgressionScope}
 */
export const DestinyProgressionScope = {
  Account: 0,
  Character: 1,
  Clan: 2,
  Item: 3,
  ImplicitFromEquipment: 4,
  Mapped: 5,
  MappedAggregate: 6,
  MappedStat: 7,
  MappedUnlockValue: 8
} as const;
