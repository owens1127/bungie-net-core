/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.16.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-typedef code generator program,
 * adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Do not edit these files manually.
 */

/**
 * This contract supplies basic information commonly used to display a minimal
 * amount of information about a user. Take care to not add more properties here
 * unless the property applies in all (or at least the majority) of the situations
 * where UserInfoCard is used. Avoid adding game specific or platform specific
 * details here. In cases where UserInfoCard is a subset of the data needed in a
 * contract, use UserInfoCard as a property of other contracts.
 * @type UserInfoCard
 * @see {@link https://bungie-net.github.io/#/components/schemas/User.UserInfoCard}
*/
class UserInfoCard {
  /**
   * A platform specific additional display name - ex: psn Real Name, bnet Unique
   * Name, etc.
   * @readonly
   * @type string
  */
  supplementalDisplayName;
  /**
   * URL the Icon if available.
   * @readonly
   * @type string
  */
  iconPath;
  /**
   * If there is a cross save override in effect, this value will tell you the type
   * that is overridding this one.
   * @readonly
   * @type BungieMembershipType
  */
  crossSaveOverride;
  /**
   * The list of Membership Types indicating the platforms on which this Membership
   * can be used.
   *
   * Not in Cross Save = its original membership type. Cross Save Primary = Any
   * membership types it is overridding, and its original membership type Cross Save
   * Overridden = Empty list
   * @readonly
   * @type BungieMembershipType[]
  */
  applicableMembershipTypes;
  /**
   * If True, this is a public user membership.
   * @readonly
   * @type boolean
  */
  isPublic;
  /**
   * Type of the membership. Not necessarily the native type.
   * @readonly
   * @type BungieMembershipType
  */
  membershipType;
  /**
   * Membership ID as they user is known in the Accounts service
   * @readonly
   * @type string
  */
  membershipId;
  /**
   * Display Name the player has chosen for themselves. The display name is optional
   * when the data type is used as input to a platform API.
   * @readonly
   * @type string
  */
  displayName;
  /**
   * The bungie global display name, if set.
   * @readonly
   * @type string
  */
  bungieGlobalDisplayName;
  /**
   * The bungie global display name code, if set.
   * @readonly
   * @type number?
  */
  bungieGlobalDisplayNameCode;
}
module.exports = UserInfoCard;