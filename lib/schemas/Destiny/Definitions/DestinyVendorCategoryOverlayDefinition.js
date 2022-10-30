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

/**
 * The details of an overlay prompt to show to a user. They are all fairly self-
 * explanatory localized strings that can be shown.
 * @type DestinyVendorCategoryOverlayDefinition
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyVendorCategoryOverlayDefinition}
*/
class DestinyVendorCategoryOverlayDefinition {
  /**
   * @readonly
   * @type string
  */
  choiceDescription;
  /**
   * @readonly
   * @type string
  */
  description;
  /**
   * @readonly
   * @type string
  */
  icon;
  /**
   * @readonly
   * @type string
  */
  title;
  /**
   * If this overlay has a currency item that it features, this is said featured item.
   * Mapped to DestinyInventoryItemDefinition in the manifest.
   * @readonly
   * @type number?
  */
  currencyItemHash;
}
module.exports = DestinyVendorCategoryOverlayDefinition;