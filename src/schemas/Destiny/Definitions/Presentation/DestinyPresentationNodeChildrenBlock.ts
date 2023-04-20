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

import { DestinyPresentationNodeChildEntry } from './DestinyPresentationNodeChildEntry';
import { DestinyPresentationNodeCollectibleChildEntry } from './DestinyPresentationNodeCollectibleChildEntry';
import { DestinyPresentationNodeRecordChildEntry } from './DestinyPresentationNodeRecordChildEntry';
import { DestinyPresentationNodeMetricChildEntry } from './DestinyPresentationNodeMetricChildEntry';
import { DestinyPresentationNodeCraftableChildEntry } from './DestinyPresentationNodeCraftableChildEntry';

/**
 * As/if presentation nodes begin to host more entities as children, these lists
 * will be added to. One list property exists per type of entity that can be
 * treated as a child of this presentation node, and each holds the identifier of
 * the entity and any associated information needed to display the UI for that
 * entity (if anything)
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.Presentation.DestinyPresentationNodeChildrenBlock}
 */
export interface DestinyPresentationNodeChildrenBlock {
  readonly presentationNodes: DestinyPresentationNodeChildEntry[];
  readonly collectibles: DestinyPresentationNodeCollectibleChildEntry[];
  readonly records: DestinyPresentationNodeRecordChildEntry[];
  readonly metrics: DestinyPresentationNodeMetricChildEntry[];
  readonly craftables: DestinyPresentationNodeCraftableChildEntry[];
}
