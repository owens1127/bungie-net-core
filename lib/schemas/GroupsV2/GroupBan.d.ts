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
import { UserInfoCard } from '../User/UserInfoCard';
import { GroupUserInfoCard } from './GroupUserInfoCard';
/** @see {@link https://bungie-net.github.io/#/components/schemas/GroupsV2.GroupBan} */
export interface GroupBan {
    readonly groupId: string;
    readonly lastModifiedBy: UserInfoCard;
    readonly createdBy: UserInfoCard;
    readonly dateBanned: string;
    readonly dateExpires: string;
    readonly comment: string;
    readonly bungieNetUserInfo: UserInfoCard;
    readonly destinyUserInfo: GroupUserInfoCard;
}
