/**
 * Some Objectives provide perks, generally as part of providing some kind of
 * interesting modifier for a Challenge or Quest. This indicates when the Perk is
 * granted.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.DestinyObjectiveGrantStyle}
 */
export const DestinyObjectiveGrantStyle = {
  WhenIncomplete: 0,
  WhenComplete: 1,
  Always: 2
} as const;
