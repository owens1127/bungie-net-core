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

import { DestinyDisplayPropertiesDefinition } from '../Common/DestinyDisplayPropertiesDefinition';

/**
 * The definition for information related to a key/value pair that is relevant for
 * a particular Milestone or component within the Milestone.
 *
 * This lets us more flexibly pass up information that's useful to someone, even if
 * it's not necessarily us.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.Milestones.DestinyMilestoneValueDefinition}
 */

export interface DestinyMilestoneValueDefinition {
  readonly key: string;
  readonly displayProperties: DestinyDisplayPropertiesDefinition;
}
