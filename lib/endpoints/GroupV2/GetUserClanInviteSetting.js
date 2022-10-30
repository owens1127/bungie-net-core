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
 * @typedef GetUserClanInviteSettingParams
 * @property {BungieMembershipType} mType The Destiny membership type of the account we wish to access settings.
 * @see {@link https://bungie-net.github.io/#GroupV2.GetUserClanInviteSetting}
*/

/**
 * Gets the state of the user's clan invite preferences for a particular membership
 * type - true if they wish to be invited to clans, false otherwise.
 * @param {GetUserClanInviteSettingParams} params
 * @returns boolean
 * @this import(../../index).Client
 * @see {@link https://bungie-net.github.io/#GroupV2.GetUserClanInviteSetting}
*/
module.exports = async function getUserClanInviteSetting(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/GroupV2/GetUserClanInviteSetting/${params.mType}/`
  });
}