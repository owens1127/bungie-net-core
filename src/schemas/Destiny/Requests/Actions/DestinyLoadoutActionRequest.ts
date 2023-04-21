/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.8
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
//

import { BungieMembershipType } from '../../../BungieMembershipType';

/** @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Requests.Actions.DestinyLoadoutActionRequest} */
export interface DestinyLoadoutActionRequest {
  /** The index of the loadout for this action request. */
  readonly loadoutIndex: number;
  readonly characterId: string;
  readonly membershipType: BungieMembershipType;
}
