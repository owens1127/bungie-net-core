/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.5
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
//

import { DestinyPartyMemberStates } from '../../DestinyPartyMemberStates';

/**
 * This is some bare minimum information about a party member in a Fireteam.
 * Unfortunately, without great computational expense on our side we can only get
 * at the data contained here. I'd like to give you a character ID for example, but
 * we don't have it. But we do have these three pieces of information. May they
 * help you on your quest to show meaningful data about current Fireteams.
 *
 * Notably, we don't and can't feasibly return info on characters. If you can, try
 * to use just the data below for your UI and purposes. Only hit us with further
 * queries if you absolutely must know the character ID of the currently playing
 * character. Pretty please with sugar on top.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Components.Profiles.DestinyProfileTransitoryPartyMember}
 */
export interface DestinyProfileTransitoryPartyMember {
  /** The Membership ID that matches the party member. */
  readonly membershipId: string;
  /**
   * The identifier for the DestinyInventoryItemDefinition of the player's emblem.
   * Mapped to DestinyInventoryItemDefinition in the manifest.
   */
  readonly emblemHash: number;
  /** The player's last known display name. */
  readonly displayName: string;
  /**
   * A Flags Enumeration value indicating the states that the player is in relevant
   * to being on a fireteam. This enum represents a set of flags - use bitwise
   * operators to check which of these match your value.
   */
  readonly status: DestinyPartyMemberStates;
}
