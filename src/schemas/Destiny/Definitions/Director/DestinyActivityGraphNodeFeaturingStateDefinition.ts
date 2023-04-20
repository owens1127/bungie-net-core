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

import { ActivityGraphNodeHighlightType } from '../../ActivityGraphNodeHighlightType';

/**
 * Nodes can have different visual states. This object represents a single visual
 * state ("highlight type") that a node can be in, and the unlock expression
 * condition to determine whether it should be set.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.Director.DestinyActivityGraphNodeFeaturingStateDefinition}
 */
export interface DestinyActivityGraphNodeFeaturingStateDefinition {
  /**
   * The node can be highlighted in a variety of ways - the game iterates through
   * these and finds the first FeaturingState that is valid at the present moment
   * given the Game, Account, and Character state, and renders the node in that state.
   * See the ActivityGraphNodeHighlightType enum for possible values.
   */
  readonly highlightType: ActivityGraphNodeHighlightType;
}
