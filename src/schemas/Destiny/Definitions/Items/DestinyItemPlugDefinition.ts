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

import { DestinyPlugRuleDefinition } from './DestinyPlugRuleDefinition';
import { PlugUiStyles } from '../../PlugUiStyles';
import { PlugAvailabilityMode } from '../../PlugAvailabilityMode';
import { DestinyParentItemOverride } from './DestinyParentItemOverride';
import { DestinyEnergyCapacityEntry } from './DestinyEnergyCapacityEntry';
import { DestinyEnergyCostEntry } from './DestinyEnergyCostEntry';

/**
 * If an item is a Plug, its DestinyInventoryItemDefinition.plug property will be
 * populated with an instance of one of these bad boys.
 *
 * This gives information about when it can be inserted, what the plug's category
 * is (and thus whether it is compatible with a socket... see
 * DestinySocketTypeDefinition for information about Plug Categories and socket
 * compatibility), whether it is enabled and other Plug info.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.Items.DestinyItemPlugDefinition}
 */
export interface DestinyItemPlugDefinition {
  /**
   * The rules around when this plug can be inserted into a socket, aside from the
   * socket's individual restrictions.
   *
   * The live data DestinyItemPlugComponent.insertFailIndexes will be an index into
   * this array, so you can pull out the failure strings appropriate for the user.
   */
  readonly insertionRules: DestinyPlugRuleDefinition[];
  /**
   * The string identifier for the plug's category. Use the socket's
   * DestinySocketTypeDefinition.plugWhitelist to determine whether this plug can be
   * inserted into the socket.
   */
  readonly plugCategoryIdentifier: string;
  /**
   * The hash for the plugCategoryIdentifier. You can use this instead if you wish: I
   * put both in the definition for debugging purposes.
   */
  readonly plugCategoryHash: number;
  /**
   * If you successfully socket the item, this will determine whether or not you get "
   * refunded" on the plug.
   */
  readonly onActionRecreateSelf: boolean;
  /**
   * If inserting this plug requires materials, this is the hash identifier for
   * looking up the DestinyMaterialRequirementSetDefinition for those requirements.
   * Mapped to DestinyMaterialRequirementSetDefinition in the manifest.
   */
  readonly insertionMaterialRequirementHash: number;
  /**
   * In the game, if you're inspecting a plug item directly, this will be the item
   * shown with the plug attached. Look up the DestinyInventoryItemDefinition for
   * this hash for the item. Mapped to DestinyInventoryItemDefinition in the manifest.
   */
  readonly previewItemOverrideHash: number;
  /**
   * It's not enough for the plug to be inserted. It has to be enabled as well. For
   * it to be enabled, it may require materials. This is the hash identifier for the
   * DestinyMaterialRequirementSetDefinition for those requirements, if there is one.
   * Mapped to DestinyMaterialRequirementSetDefinition in the manifest.
   */
  readonly enabledMaterialRequirementHash: number;
  /**
   * The rules around whether the plug, once inserted, is enabled and providing its
   * benefits.
   *
   * The live data DestinyItemPlugComponent.enableFailIndexes will be an index into
   * this array, so you can pull out the failure strings appropriate for the user.
   */
  readonly enabledRules: DestinyPlugRuleDefinition[];
  /**
   * Plugs can have arbitrary, UI-defined identifiers that the UI designers use to
   * determine the style applied to plugs. Unfortunately, we have neither a
   * definitive list of these labels nor advance warning of when new labels might be
   * applied or how that relates to how they get rendered. If you want to, you can
   * refer to known labels to change your own styles: but know that new ones can be
   * created arbitrarily, and we have no way of associating the labels with any
   * specific UI style guidance... you'll have to piece that together on your end. Or
   * do what we do, and just show plugs more generically, without specialized styles.
   */
  readonly uiPlugLabel: string;
  /**
   * This enum represents a set of flags - use bitwise operators to check which of
   * these match your value.
   */
  readonly plugStyle: PlugUiStyles;
  /**
   * Indicates the rules about when this plug can be used. See the
   * PlugAvailabilityMode enumeration for more information!
   */
  readonly plugAvailability: PlugAvailabilityMode;
  /**
   * If the plug meets certain state requirements, it may have an alternative label
   * applied to it. This is the alternative label that will be applied in such a
   * situation.
   */
  readonly alternateUiPlugLabel: string;
  /**
   * The alternate plug of the plug: only applies when the item is in states that
   * only the server can know about and control, unfortunately. See
   * AlternateUiPlugLabel for the related label info. This enum represents a set of
   * flags - use bitwise operators to check which of these match your value.
   */
  readonly alternatePlugStyle: PlugUiStyles;
  /**
   * If TRUE, this plug is used for UI display purposes only, and doesn't have any
   * interesting effects of its own.
   */
  readonly isDummyPlug: boolean;
  /**
   * Do you ever get the feeling that a system has become so overburdened by edge
   * cases that it probably should have become some other system entirely? So do I!
   *
   * In totally unrelated news, Plugs can now override properties of their parent
   * items. This is some of the relevant definition data for those overrides.
   *
   * If this is populated, it will have the override data to be applied when this
   * plug is applied to an item.
   */
  readonly parentItemOverride: DestinyParentItemOverride;
  /**
   * IF not null, this plug provides Energy capacity to the item in which it is
   * socketed. In Armor 2.0 for example, is implemented in a similar way to
   * Masterworks, where visually it's a single area of the UI being clicked on to "
   * Upgrade" to higher energy levels, but it's actually socketing new plugs.
   */
  readonly energyCapacity?: DestinyEnergyCapacityEntry;
  /**
   * IF not null, this plug has an energy cost. This contains the details of that
   * cost.
   */
  readonly energyCost?: DestinyEnergyCostEntry;
}
