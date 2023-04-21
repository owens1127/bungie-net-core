/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.8
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
//

/**
 * This enum represents a set of flags - use bitwise operators to check which of
 * these match your value.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.VendorItemStatus}
 */
export enum VendorItemStatus {
  Success = 0,
  NoInventorySpace = 1,
  NoFunds = 2,
  NoProgression = 4,
  NoUnlock = 8,
  NoQuantity = 16,
  OutsidePurchaseWindow = 32,
  NotAvailable = 64,
  UniquenessViolation = 128,
  UnknownError = 256,
  AlreadySelling = 512,
  Unsellable = 1024,
  SellingInhibited = 2048,
  AlreadyOwned = 4096,
  DisplayOnly = 8192
}
