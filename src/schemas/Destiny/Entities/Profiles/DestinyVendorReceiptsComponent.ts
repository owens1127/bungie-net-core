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

import { DestinyVendorReceipt } from '../../Vendors/DestinyVendorReceipt';

/**
 * For now, this isn't used for much: it's a record of the recent refundable
 * purchases that the user has made. In the future, it could be used for providing
 * refunds/buyback via the API. Wouldn't that be fun?
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Entities.Profiles.DestinyVendorReceiptsComponent}
 */
export interface DestinyVendorReceiptsComponent {
  /** The receipts for refundable purchases made at a vendor. */
  readonly receipts: DestinyVendorReceipt[];
}
