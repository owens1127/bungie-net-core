/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.4
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
//

import { DestinyDisplayPropertiesDefinition } from '../Common/DestinyDisplayPropertiesDefinition';

/**
 * A specific reason for being banned. Only accessible under the related category (
 * DestinyReportReasonCategoryDefinition) under which it is shown. Note that this
 * means that report reasons' reasonHash are not globally unique: and indeed,
 * entries like "Other" are defined under most categories for example.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.Reporting.DestinyReportReasonDefinition}
 */
export interface DestinyReportReasonDefinition {
  /**
   * The identifier for the reason: they are only guaranteed unique under the
   * Category in which they are found.
   */
  readonly reasonHash: number;
  readonly displayProperties: DestinyDisplayPropertiesDefinition;
}
