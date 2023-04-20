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

import { DestinyDisplayPropertiesDefinition } from '../Common/DestinyDisplayPropertiesDefinition';
import { DestinyReportReasonDefinition } from './DestinyReportReasonDefinition';

/**
 * If you're going to report someone for a Terms of Service violation, you need to
 * choose a category and reason for the report. This definition holds both the
 * categories and the reasons within those categories, for simplicity and my own
 * laziness' sake.
 *
 * Note tha this means that, to refer to a Reason by reasonHash, you need a
 * combination of the reasonHash *and* the associated ReasonCategory's hash: there
 * are some reasons defined under multiple categories.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.Reporting.DestinyReportReasonCategoryDefinition}
 */
export interface DestinyReportReasonCategoryDefinition {
  readonly displayProperties: DestinyDisplayPropertiesDefinition;
  /** The specific reasons for the report under this category. */
  readonly reasons: { [key: number]: DestinyReportReasonDefinition };
  /**
   * The unique identifier for this entity. Guaranteed to be unique for the type of
   * entity, but not globally.
   *
   * When entities refer to each other in Destiny content, it is this hash that they
   * are referring to.
   */
  readonly hash: number;
  /** The index of the entity as it was found in the investment tables. */
  readonly index: number;
  /**
   * If this is true, then there is an entity with this identifier/type combination,
   * but BNet is not yet allowed to show it. Sorry!
   */
  readonly redacted: boolean;
}
