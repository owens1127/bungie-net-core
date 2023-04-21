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

import { DestinyDisplayPropertiesDefinition } from './Common/DestinyDisplayPropertiesDefinition';

/**
 * An individual Destiny Entity returned from the entity search.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyEntitySearchResultItem}
 */
export interface DestinyEntitySearchResultItem {
  /**
   * The hash identifier of the entity. You will use this to look up the
   * DestinyDefinition relevant for the entity found.
   */
  readonly hash: number;
  /**
   * The type of entity, returned as a string matching the DestinyDefinition's
   * contract class name. You'll have to have your own mapping from class names to
   * actually looking up those definitions in the manifest databases.
   */
  readonly entityType: string;
  /**
   * Basic display properties on the entity, so you don't have to look up the
   * definition to show basic results for the item.
   */
  readonly displayProperties: DestinyDisplayPropertiesDefinition;
  /**
   * The ranking value for sorting that we calculated using our relevance formula.
   * This will hopefully get better with time and iteration.
   */
  readonly weight: number;
}
