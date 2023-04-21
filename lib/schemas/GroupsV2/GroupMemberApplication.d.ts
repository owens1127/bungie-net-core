/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.8
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
import { GroupApplicationResolveState } from './GroupApplicationResolveState';
import { GroupUserInfoCard } from './GroupUserInfoCard';
import { UserInfoCard } from '../User/UserInfoCard';
/** @see {@link https://bungie-net.github.io/#/components/schemas/GroupsV2.GroupMemberApplication} */
export interface GroupMemberApplication {
    readonly groupId: string;
    readonly creationDate: string;
    readonly resolveState: GroupApplicationResolveState;
    readonly resolveDate?: string;
    readonly resolvedByMembershipId?: string;
    readonly requestMessage: string;
    readonly resolveMessage: string;
    readonly destinyUserInfo: GroupUserInfoCard;
    readonly bungieNetUserInfo: UserInfoCard;
}
