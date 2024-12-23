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

import { DestinyItemInvestmentStatDefinition } from './DestinyItemInvestmentStatDefinition';
import { DestinyObjectiveGrantStyle } from '../DestinyObjectiveGrantStyle';

/**
 * Defines the conditions under which stat modifications will be applied to a
 * Character while participating in an objective.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyObjectiveStatEntryDefinition}
 */

export interface DestinyObjectiveStatEntryDefinition {
  /** The stat being modified, and the value used. */
  readonly stat: DestinyItemInvestmentStatDefinition;
  /**
   * Whether it will be applied as long as the objective is active, when it's
   * completed, or until it's completed.
   */
  readonly style: DestinyObjectiveGrantStyle;
}
