/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.16.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-typedef code generator program,
 * adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Do not edit these files manually.
 */

const { rateLimitedRequest } = require('../../rate-limiter.js');
/**
 * @typedef GetClanAggregateStatsParams
 * @property {string} groupId Group ID of the clan whose leaderboards you wish to fetch.
 * @property {string?} modes List of game modes for which to get leaderboards. See the documentation for DestinyActivityModeType for valid values, and pass in string representation, comma delimited.
 * @see {@link https://bungie-net.github.io/#Destiny2.GetClanAggregateStats}
*/

/**
 * Gets aggregated stats for a clan using the same categories as the clan
 * leaderboards. PREVIEW: This endpoint is still in beta, and may experience rough
 * edges. The schema is in final form, but there may be bugs that prevent desirable
 * operation.
 * @param {GetClanAggregateStatsParams} params
 * @returns ListOfDestinyClanAggregateStat
 * @this import(../../index).Client
 * @see {@link https://bungie-net.github.io/#Destiny2.GetClanAggregateStats}
*/
module.exports = async function getClanAggregateStats(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/Stats/AggregateClanStats/${params.groupId}/`,
    params: {
      modes: params.modes
    }
  });
}