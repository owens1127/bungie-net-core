/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.17.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-typedef code generator program,
 * adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Do not edit these files manually.
 */
import { IgnoreLength } from '../Ignores/IgnoreLength';
/** @see {@link https://bungie-net.github.io/#/components/schemas/GroupsV2.GroupBanRequest} */
export interface GroupBanRequest {
    readonly comment: string;
    readonly length: IgnoreLength;
}
