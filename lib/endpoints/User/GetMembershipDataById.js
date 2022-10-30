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
 * @typedef GetMembershipDataByIdParams
 * @property {string} membershipId The membership ID of the target user.
 * @property {BungieMembershipType} membershipType Type of the supplied membership ID.
 * @see {@link https://bungie-net.github.io/#User.GetMembershipDataById}
*/

/**
 * Returns a list of accounts associated with the supplied membership ID and
 * membership type. This will include all linked accounts (even when hidden) if
 * supplied credentials permit it.
 * @param {GetMembershipDataByIdParams} params
 * @returns UserMembershipData
 * @this import(../../index).Client
 * @see {@link https://bungie-net.github.io/#User.GetMembershipDataById}
*/
module.exports = async function getMembershipDataById(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/User/GetMembershipsById/${params.membershipId}/${params.membershipType}/`
  });
}