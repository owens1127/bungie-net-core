/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-net-core code generator program
 * Repository: {@link https://github.com/owens1127/bungie-net-core}
 * Do not edit these files manually.
 */
//

import { OAuthApplicationType } from './OAuthApplicationType';
import { ApplicationStatus } from './ApplicationStatus';
import { ApplicationDeveloper } from './ApplicationDeveloper';

/** @see {@link https://bungie-net.github.io/#/components/schemas/Applications.Application} */

export interface Application {
  readonly applicationType: OAuthApplicationType;
  /** Unique ID assigned to the application */
  readonly applicationId: number;
  /** Name of the application */
  readonly name: string;
  /** URL used to pass the user's authorization code to the application */
  readonly redirectUrl: string;
  /** Link to website for the application where a user can learn more about the app. */
  readonly link: string;
  /** Permissions the application needs to work */
  readonly scope: string;
  /** Value of the Origin header sent in requests generated by this application. */
  readonly origin: string;
  /** Current status of the application. */
  readonly status: ApplicationStatus;
  /** Date the application was first added to our database. */
  readonly creationDate: string;
  /** Date the application status last changed. */
  readonly statusChanged: string;
  /** Date the first time the application status entered the 'Public' status. */
  readonly firstPublished: string;
  /**
   * List of team members who manage this application on Bungie.net. Will always
   * consist of at least the application owner.
   */
  readonly team: ApplicationDeveloper[];
  /** An optional override for the Authorize view name. */
  readonly overrideAuthorizeViewName: string;
}
