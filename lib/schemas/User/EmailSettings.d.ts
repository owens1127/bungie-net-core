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
import { EmailOptInDefinition } from './EmailOptInDefinition';
import { EmailSubscriptionDefinition } from './EmailSubscriptionDefinition';
import { EmailViewDefinition } from './EmailViewDefinition';
/**
 * The set of all email subscription/opt-in settings and definitions.
 * @see {@link https://bungie-net.github.io/#/components/schemas/User.EmailSettings}
*/
export interface EmailSettings {
    /** Keyed by the name identifier of the opt-in definition. */
    readonly optInDefinitions: {
        [key: string]: EmailOptInDefinition;
    };
    /** Keyed by the name identifier of the Subscription definition. */
    readonly subscriptionDefinitions: {
        [key: string]: EmailSubscriptionDefinition;
    };
    /** Keyed by the name identifier of the View definition. */
    readonly views: {
        [key: string]: EmailViewDefinition;
    };
}