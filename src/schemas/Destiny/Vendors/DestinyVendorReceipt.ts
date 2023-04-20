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

import { DestinyItemQuantity } from '../DestinyItemQuantity';
import { DestinyVendorItemRefundPolicy } from '../DestinyVendorItemRefundPolicy';

/**
 * If a character purchased an item that is refundable, a Vendor Receipt will be
 * created on the user's Destiny Profile. These expire after a configurable period
 * of time, but until then can be used to get refunds on items. BNet does not
 * provide the ability to refund a purchase *yet*, but you know.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Vendors.DestinyVendorReceipt}
 */
export interface DestinyVendorReceipt {
  /**
   * The amount paid for the item, in terms of items that were consumed in the
   * purchase and their quantity.
   */
  readonly currencyPaid: DestinyItemQuantity[];
  /** The item that was received, and its quantity. */
  readonly itemReceived: DestinyItemQuantity;
  /** The unlock flag used to determine whether you still have the purchased item. */
  readonly licenseUnlockHash: number;
  /** The ID of the character who made the purchase. */
  readonly purchasedByCharacterId: string;
  /**
   * Whether you can get a refund, and what happens in order for the refund to be
   * received. See the DestinyVendorItemRefundPolicy enum for details.
   */
  readonly refundPolicy: DestinyVendorItemRefundPolicy;
  /** The identifier of this receipt. */
  readonly sequenceNumber: number;
  /** The seconds since epoch at which this receipt is rendered invalid. */
  readonly timeToExpiration: string;
  /** The date at which this receipt is rendered invalid. */
  readonly expiresOn: string;
}
