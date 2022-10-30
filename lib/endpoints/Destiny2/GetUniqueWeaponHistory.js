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
 * @typedef GetUniqueWeaponHistoryParams
 * @property {string} characterId The id of the character to retrieve.
 * @property {string} destinyMembershipId The Destiny membershipId of the user to retrieve.
 * @property {BungieMembershipType} membershipType A valid non-BungieNet membership type.
 * @see {@link https://bungie-net.github.io/#Destiny2.GetUniqueWeaponHistory}
*/

/**
 * Gets details about unique weapon usage, including all exotic weapons.
 * @param {GetUniqueWeaponHistoryParams} params
 * @returns DestinyHistoricalWeaponStatsData
 * @this import(../../index).Client
 * @see {@link https://bungie-net.github.io/#Destiny2.GetUniqueWeaponHistory}
*/
module.exports = async function getUniqueWeaponHistory(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/${params.membershipType}/Account/${params.destinyMembershipId}/Character/${params.characterId}/Stats/UniqueWeapons/`
  });
}