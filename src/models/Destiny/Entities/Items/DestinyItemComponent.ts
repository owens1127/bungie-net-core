/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-net-core code generator program
 * Repository: {@link https://github.com/owens1127/bungie-net-core}
 * Do not edit these files manually.
 */
//

import { ItemBindStatus } from '../../ItemBindStatus';
import { ItemLocation } from '../../ItemLocation';
import { TransferStatuses } from '../../TransferStatuses';
import { ItemState } from '../../ItemState';
import { DestinyObjectiveProgress } from '../../Quests/DestinyObjectiveProgress';

/**
 * The base item component, filled with properties that are generally useful to
 * know in any item request or that don't feel worthwhile to put in their own
 * component.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Entities.Items.DestinyItemComponent}
 */

export interface DestinyItemComponent {
  /**
   * The identifier for the item's definition, which is where most of the useful
   * static information for the item can be found. Mapped to
   * DestinyInventoryItemDefinition in the manifest.
   */
  readonly itemHash: number;
  /**
   * If the item is instanced, it will have an instance ID. Lack of an instance ID
   * implies that the item has no distinct local qualities aside from stack size.
   */
  readonly itemInstanceId?: string;
  /**
   * The quantity of the item in this stack. Note that Instanced items cannot stack.
   * If an instanced item, this value will always be 1 (as the stack has exactly one
   * item in it)
   */
  readonly quantity: number;
  /** If the item is bound to a location, it will be specified in this enum. */
  readonly bindStatus: ItemBindStatus;
  /**
   * An easy reference for where the item is located. Redundant if you got the item
   * from an Inventory, but useful when making detail calls on specific items.
   */
  readonly location: ItemLocation;
  /**
   * The hash identifier for the specific inventory bucket in which the item is
   * located. Mapped to DestinyInventoryBucketDefinition in the manifest.
   */
  readonly bucketHash: number;
  /**
   * If there is a known error state that would cause this item to not be
   * transferable, this Flags enum will indicate all of those error states. Otherwise,
   * it will be 0 (CanTransfer). This enum represents a set of flags - use bitwise
   * operators to check which of these match your value.
   */
  readonly transferStatus: TransferStatuses;
  /** If the item can be locked, this will indicate that state. */
  readonly lockable: boolean;
  /**
   * A flags enumeration indicating the transient/custom states of the item that
   * affect how it is rendered: whether it's tracked or locked for example, or
   * whether it has a masterwork plug inserted. This enum represents a set of flags -
   * use bitwise operators to check which of these match your value.
   */
  readonly state: ItemState;
  /**
   * If populated, this is the hash of the item whose icon (and other secondary
   * styles, but *not* the human readable strings) should override whatever icons/
   * styles are on the item being sold.
   *
   * If you don't do this, certain items whose styles are being overridden by
   * socketed items - such as the "Recycle Shader" item - would show whatever their
   * default icon/style is, and it wouldn't be pretty or look accurate. Mapped to
   * DestinyInventoryItemDefinition in the manifest.
   */
  readonly overrideStyleItemHash?: number;
  /** If the item can expire, this is the date at which it will/did expire. */
  readonly expirationDate?: string;
  /**
   * If this is true, the object is actually a "wrapper" of the object it's
   * representing. This means that it's not the actual item itself, but rather an
   * item that must be "opened" in game before you have and can use the item.
   *
   * Wrappers are an evolution of "bundles", which give an easy way to let you
   * preview the contents of what you purchased while still letting you get a refund
   * before you "open" it.
   */
  readonly isWrapper: boolean;
  /**
   * If this is populated, it is a list of indexes into
   * DestinyInventoryItemDefinition.tooltipNotifications for any special tooltip
   * messages that need to be shown for this item.
   */
  readonly tooltipNotificationIndexes: number[];
  /**
   * The identifier for the currently-selected metric definition, to be displayed on
   * the emblem nameplate. Mapped to DestinyMetricDefinition in the manifest.
   */
  readonly metricHash?: number;
  /**
   * The objective progress for the currently-selected metric definition, to be
   * displayed on the emblem nameplate.
   */
  readonly metricObjective: DestinyObjectiveProgress;
  /**
   * The version of this item, used to index into the versions list in the item
   * definition quality block.
   */
  readonly versionNumber?: number;
  /**
   * If available, a list that describes which item values (rewards) should be shown (
   * true) or hidden (false).
   */
  readonly itemValueVisibility: boolean[];
}
