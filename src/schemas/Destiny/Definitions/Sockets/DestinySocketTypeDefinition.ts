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

import { DestinyDisplayPropertiesDefinition } from '../Common/DestinyDisplayPropertiesDefinition';
import { DestinyInsertPlugActionDefinition } from './DestinyInsertPlugActionDefinition';
import { DestinyPlugWhitelistEntryDefinition } from './DestinyPlugWhitelistEntryDefinition';
import { DestinySocketVisibility } from '../../DestinySocketVisibility';
import { DestinySocketTypeScalarMaterialRequirementEntry } from './DestinySocketTypeScalarMaterialRequirementEntry';

/**
 * All Sockets have a "Type": a set of common properties that determine when the
 * socket allows Plugs to be inserted, what Categories of Plugs can be inserted,
 * and whether the socket is even visible at all given the current game/character/
 * account state.
 *
 * See DestinyInventoryItemDefinition for more information about Socketed items and
 * Plugs.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.Sockets.DestinySocketTypeDefinition}
 */
export interface DestinySocketTypeDefinition {
  /**
   * There are fields for this display data, but they appear to be unpopulated as of
   * now. I am not sure where in the UI these would show if they even were populated,
   * but I will continue to return this data in case it becomes useful.
   */
  readonly displayProperties: DestinyDisplayPropertiesDefinition;
  /** Defines what happens when a plug is inserted into sockets of this type. */
  readonly insertAction: DestinyInsertPlugActionDefinition;
  /**
   * A list of Plug "Categories" that are allowed to be plugged into sockets of this
   * type.
   *
   * These should be compared against a given plug item's
   * DestinyInventoryItemDefinition.plug.plugCategoryHash, which indicates the plug
   * item's category.
   *
   * If the plug's category matches any whitelisted plug, or if the whitelist is
   * empty, it is allowed to be inserted.
   */
  readonly plugWhitelist: DestinyPlugWhitelistEntryDefinition[];
  /** Mapped to DestinySocketCategoryDefinition in the manifest. */
  readonly socketCategoryHash: number;
  /**
   * Sometimes a socket isn't visible. These are some of the conditions under which
   * sockets of this type are not visible. Unfortunately, the truth of visibility is
   * much, much more complex. Best to rely on the live data for whether the socket is
   * visible and enabled.
   */
  readonly visibility: DestinySocketVisibility;
  readonly alwaysRandomizeSockets: boolean;
  readonly isPreviewEnabled: boolean;
  readonly hideDuplicateReusablePlugs: boolean;
  /**
   * This property indicates if the socket type determines whether Emblem icons and
   * nameplates should be overridden by the inserted plug item's icon and nameplate.
   */
  readonly overridesUiAppearance: boolean;
  readonly avoidDuplicatesOnInitialization: boolean;
  readonly currencyScalars: DestinySocketTypeScalarMaterialRequirementEntry[];
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
