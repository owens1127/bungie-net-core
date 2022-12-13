/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.17.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-typedef code generator program,
 * adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Do not edit these files manually.
 */
/**
 * If this record has an expiration after which it cannot be earned, this is some
 * information about that expiration.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.Records.DestinyRecordExpirationBlock}
*/
export interface DestinyRecordExpirationBlock {
    readonly hasExpiration: boolean;
    readonly description: string;
    readonly icon: string;
}
