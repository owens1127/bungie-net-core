/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-net-core code generator program
 * Repository: {@link https://github.com/owensimpson/bungie-net-core}
 * Do not edit these files manually.
 */
//

import { Datapoint } from './Datapoint';

/** @see {@link https://bungie-net.github.io/#/components/schemas/Applications.Series} */

export interface Series {
  /** Collection of samples with time and value. */
  readonly datapoints: Datapoint[];
  /** Target to which to datapoints apply. */
  readonly target: string;
}
