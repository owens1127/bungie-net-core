/**
 * A flags enumeration that represents a Fireteam Member's status.
 *
 * This enum represents a set of flags - use bitwise operators to check which of
 * these match your value.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.DestinyPartyMemberStates}
 */
export const DestinyPartyMemberStates = {
  None: 0,
  /** This one's pretty obvious - they're on your Fireteam. */
  FireteamMember: 1,
  /** I don't know what it means to be in a 'Posse', but apparently this is it. */
  PosseMember: 2,
  /**
   * Nor do I understand the difference between them being in a 'Group' vs. a '
   * Fireteam'.
   *
   * I'll update these docs once I get more info. If I get more info. If you're
   * reading this, I never got more info. You're on your own, kid.
   */
  GroupMember: 4,
  /** This person is the party leader. */
  PartyLeader: 8
} as const;
