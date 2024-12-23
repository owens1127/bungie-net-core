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
