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

import { OptInFlags } from './OptInFlags';
import { EmailSubscriptionDefinition } from './EmailSubscriptionDefinition';

/**
 * Defines a single opt-in category: a wide-scoped permission to send emails for
 * the subject related to the opt-in.
 * @see {@link https://bungie-net.github.io/#/components/schemas/User.EmailOptInDefinition}
 */
export interface EmailOptInDefinition {
  /** The unique identifier for this opt-in category. */
  readonly name: string;
  /**
   * The flag value for this opt-in category. For historical reasons, this is defined
   * as a flags enum. This enum represents a set of flags - use bitwise operators to
   * check which of these match your value.
   */
  readonly value: OptInFlags;
  /**
   * If true, this opt-in setting should be set by default in situations where
   * accounts are created without explicit choices about what they're opting into.
   */
  readonly setByDefault: boolean;
  /** Information about the dependent subscriptions for this opt-in. */
  readonly dependentSubscriptions: EmailSubscriptionDefinition[];
}
