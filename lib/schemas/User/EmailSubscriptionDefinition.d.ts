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
import { EMailSettingSubscriptionLocalization } from './EMailSettingSubscriptionLocalization';
/**
 * Defines a single subscription: permission to send emails for a specific, focused
 * subject (generally timeboxed, such as for a specific release of a product or
 * feature).
 * @see {@link https://bungie-net.github.io/#/components/schemas/User.EmailSubscriptionDefinition}
*/
export interface EmailSubscriptionDefinition {
    /** The unique identifier for this subscription. */
    readonly name: string;
    /** A dictionary of localized text for the EMail Opt-in setting, keyed by the locale. */
    readonly localization: {
        [key: string]: EMailSettingSubscriptionLocalization;
    };
    /** The bitflag value for this subscription. Should be a unique power of two value. */
    readonly value: string;
}
