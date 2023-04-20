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

/** @see {@link https://bungie-net.github.io/#/components/schemas/Applications.ApplicationStatus} */
export enum ApplicationStatus {
  /** No value assigned */
  None = 0,
  /**
   * Application exists and works but will not appear in any public catalog. New
   * applications start in this state, test applications will remain in this state.
   */
  Private = 1,
  /** Active applications that can appear in an catalog. */
  Public = 2,
  /**
   * Application disabled by the owner. All authorizations will be treated as
   * terminated while in this state. Owner can move back to private or public state.
   */
  Disabled = 3,
  /**
   * Application has been blocked by Bungie. It cannot be transitioned out of this
   * state by the owner. Authorizations are terminated when an application is in this
   * state.
   */
  Blocked = 4
}
