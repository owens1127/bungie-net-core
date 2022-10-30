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
 * @typedef GetTrendingEntryDetailParams
 * @property {string} identifier The identifier for the entity to be returned.
 * @property {TrendingEntryType} trendingEntryType The type of entity to be returned.
 * @see {@link https://bungie-net.github.io/#Trending.GetTrendingEntryDetail}
*/

/**
 * Returns the detailed results for a specific trending entry. Note that trending
 * entries are uniquely identified by a combination of *both* the TrendingEntryType
 * *and* the identifier: the identifier alone is not guaranteed to be globally
 * unique.
 * @param {GetTrendingEntryDetailParams} params
 * @returns TrendingDetail
 * @this import(../../index).Client
 * @see {@link https://bungie-net.github.io/#Trending.GetTrendingEntryDetail}
*/
module.exports = async function getTrendingEntryDetail(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/Trending/Details/${params.trendingEntryType}/${params.identifier}/`
  });
}