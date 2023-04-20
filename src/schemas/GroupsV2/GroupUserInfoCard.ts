/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.0
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
//

import { BungieMembershipType } from '../BungieMembershipType';

/** @see {@link https://bungie-net.github.io/#/components/schemas/GroupsV2.GroupUserInfoCard} */
export interface GroupUserInfoCard {
  /**
   * This will be the display name the clan server last saw the user as. If the
   * account is an active cross save override, this will be the display name to use.
   * Otherwise, this will match the displayName property.
   */
  readonly LastSeenDisplayName: string;
  /** The platform of the LastSeenDisplayName */
  readonly LastSeenDisplayNameType: BungieMembershipType;
  /**
   * A platform specific additional display name - ex: psn Real Name, bnet Unique
   * Name, etc.
   */
  readonly supplementalDisplayName: string;
  /** URL the Icon if available. */
  readonly iconPath: string;
  /**
   * If there is a cross save override in effect, this value will tell you the type
   * that is overridding this one.
   */
  readonly crossSaveOverride: BungieMembershipType;
  /**
   * The list of Membership Types indicating the platforms on which this Membership
   * can be used.
   *
   * Not in Cross Save = its original membership type. Cross Save Primary = Any
   * membership types it is overridding, and its original membership type Cross Save
   * Overridden = Empty list
   */
  readonly applicableMembershipTypes: BungieMembershipType[];
  /** If True, this is a public user membership. */
  readonly isPublic: boolean;
  /** Type of the membership. Not necessarily the native type. */
  readonly membershipType: BungieMembershipType;
  /** Membership ID as they user is known in the Accounts service */
  readonly membershipId: string;
  /**
   * Display Name the player has chosen for themselves. The display name is optional
   * when the data type is used as input to a platform API.
   */
  readonly displayName: string;
  /** The bungie global display name, if set. */
  readonly bungieGlobalDisplayName: string;
  /** The bungie global display name code, if set. */
  readonly bungieGlobalDisplayNameCode?: number;
}
