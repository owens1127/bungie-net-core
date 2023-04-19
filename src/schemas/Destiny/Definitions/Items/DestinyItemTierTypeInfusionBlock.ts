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

/** @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.Items.DestinyItemTierTypeInfusionBlock} */
export interface DestinyItemTierTypeInfusionBlock {
  /**
   * The default portion of quality that will transfer from the infuser to the
   * infusee item. (InfuserQuality - InfuseeQuality) * baseQualityTransferRatio =
   * base quality transferred.
  */
  readonly baseQualityTransferRatio: number;
  /**
   * As long as InfuserQuality > InfuseeQuality, the amount of quality bestowed is
   * guaranteed to be at least this value, even if the transferRatio would dictate
   * that it should be less. The total amount of quality that ends up in the Infusee
   * cannot exceed the Infuser's quality however (for instance, if you infuse a 300
   * item with a 301 item and the minimum quality increment is 10, the infused item
   * will not end up with 310 quality)
  */
  readonly minimumQualityIncrement: number;
}
