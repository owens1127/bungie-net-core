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

import { BungieHttpProtocol } from './..';
import { BungieNetResponse } from '../interfaces/BungieNetResponse';
import { GroupTheme } from '../models/Config/GroupTheme';
import { BungieMembershipType } from '../models/BungieMembershipType';
import { GroupDateRange } from '../models/GroupsV2/GroupDateRange';
import { GroupType } from '../models/GroupsV2/GroupType';
import { GroupV2Card } from '../models/GroupsV2/GroupV2Card';
import { GroupQuery } from '../models/GroupsV2/GroupQuery';
import { GroupSearchResponse } from '../models/GroupsV2/GroupSearchResponse';
import { GroupResponse } from '../models/GroupsV2/GroupResponse';
import { GroupNameSearchRequest } from '../models/GroupsV2/GroupNameSearchRequest';
import { GroupOptionalConversation } from '../models/GroupsV2/GroupOptionalConversation';
import { GroupEditAction } from '../models/GroupsV2/GroupEditAction';
import { ClanBanner } from '../models/GroupsV2/ClanBanner';
import { GroupOptionsEditAction } from '../models/GroupsV2/GroupOptionsEditAction';
import { GroupOptionalConversationAddRequest } from '../models/GroupsV2/GroupOptionalConversationAddRequest';
import { GroupOptionalConversationEditRequest } from '../models/GroupsV2/GroupOptionalConversationEditRequest';
import { RuntimeGroupMemberType } from '../models/GroupsV2/RuntimeGroupMemberType';
import { SearchResultOfGroupMember } from '../models/SearchResultOfGroupMember';
import { GroupMemberLeaveResult } from '../models/GroupsV2/GroupMemberLeaveResult';
import { GroupBanRequest } from '../models/GroupsV2/GroupBanRequest';
import { SearchResultOfGroupBan } from '../models/SearchResultOfGroupBan';
import { SearchResultOfGroupEditHistory } from '../models/SearchResultOfGroupEditHistory';
import { SearchResultOfGroupMemberApplication } from '../models/SearchResultOfGroupMemberApplication';
import { GroupApplicationRequest } from '../models/GroupsV2/GroupApplicationRequest';
import { EntityActionResult } from '../models/Entities/EntityActionResult';
import { GroupApplicationListRequest } from '../models/GroupsV2/GroupApplicationListRequest';
import { GroupsForMemberFilter } from '../models/GroupsV2/GroupsForMemberFilter';
import { GetGroupsForMemberResponse } from '../models/GroupsV2/GetGroupsForMemberResponse';
import { GroupMembershipSearchResponse } from '../models/GroupsV2/GroupMembershipSearchResponse';
import { GroupPotentialMemberStatus } from '../models/GroupsV2/GroupPotentialMemberStatus';
import { GroupPotentialMembershipSearchResponse } from '../models/GroupsV2/GroupPotentialMembershipSearchResponse';
import { GroupApplicationResponse } from '../models/GroupsV2/GroupApplicationResponse';

/**
 * Returns a list of all available group avatars for the signed-in user.
 * @see {@link https://bungie-net.github.io/#GroupV2.GetAvailableAvatars}
 */
export async function getAvailableAvatars(
  http: BungieHttpProtocol
): Promise<BungieNetResponse<{ [key: number]: string }>> {
  const baseUrl = `https://www.bungie.net/Platform/GroupV2/GetAvailableAvatars/`;
  const searchParams = undefined;
  return await http<BungieNetResponse<{ [key: number]: string }>>({
    method: 'GET',
    baseUrl,
    searchParams,
    body: undefined
  });
}

/**
 * Returns a list of all available group themes.
 * @see {@link https://bungie-net.github.io/#GroupV2.GetAvailableThemes}
 */
export async function getAvailableThemes(http: BungieHttpProtocol): Promise<BungieNetResponse<GroupTheme[]>> {
  const baseUrl = `https://www.bungie.net/Platform/GroupV2/GetAvailableThemes/`;
  const searchParams = undefined;
  return await http<BungieNetResponse<GroupTheme[]>>({ method: 'GET', baseUrl, searchParams, body: undefined });
}

/**
 * Gets the state of the user's clan invite preferences for a particular membership
 * type - true if they wish to be invited to clans, false otherwise.
 * @see {@link https://bungie-net.github.io/#GroupV2.GetUserClanInviteSetting}
 */
export async function getUserClanInviteSetting(
  http: BungieHttpProtocol,
  params: {
    /** The Destiny membership type of the account we wish to access settings. */
    mType: BungieMembershipType;
  }
): Promise<BungieNetResponse<boolean>> {
  const baseUrl = `https://www.bungie.net/Platform/GroupV2/GetUserClanInviteSetting/${params.mType}/`;
  const searchParams = undefined;
  return await http<BungieNetResponse<boolean>>({ method: 'GET', baseUrl, searchParams, body: undefined });
}

/**
 * Gets groups recommended for you based on the groups to whom those you follow
 * belong.
 * @see {@link https://bungie-net.github.io/#GroupV2.GetRecommendedGroups}
 */
export async function getRecommendedGroups(
  http: BungieHttpProtocol,
  params: {
    /** Requested range in which to pull recommended groups */
    createDateRange: GroupDateRange;
    /** Type of groups requested */
    groupType: GroupType;
  }
): Promise<BungieNetResponse<GroupV2Card[]>> {
  const baseUrl = `https://www.bungie.net/Platform/GroupV2/Recommended/${params.groupType}/${params.createDateRange}/`;
  const searchParams = undefined;
  return await http<BungieNetResponse<GroupV2Card[]>>({ method: 'POST', baseUrl, searchParams, body: undefined });
}

/**
 * Search for Groups.
 * @see {@link https://bungie-net.github.io/#GroupV2.GroupSearch}
 */
export async function groupSearch(
  http: BungieHttpProtocol,
  body: GroupQuery
): Promise<BungieNetResponse<GroupSearchResponse>> {
  const baseUrl = `https://www.bungie.net/Platform/GroupV2/Search/`;
  const searchParams = undefined;
  return await http<BungieNetResponse<GroupSearchResponse>, GroupQuery>({
    method: 'POST',
    baseUrl,
    searchParams,
    body,
    contentType: 'application/json'
  });
}

/**
 * Get information about a specific group of the given ID.
 * @see {@link https://bungie-net.github.io/#GroupV2.GetGroup}
 */
export async function getGroup(
  http: BungieHttpProtocol,
  params: {
    /** Requested group's id. */
    groupId: string;
  }
): Promise<BungieNetResponse<GroupResponse>> {
  const baseUrl = `https://www.bungie.net/Platform/GroupV2/${params.groupId}/`;
  const searchParams = undefined;
  return await http<BungieNetResponse<GroupResponse>>({ method: 'GET', baseUrl, searchParams, body: undefined });
}

/**
 * Get information about a specific group with the given name and type.
 * @see {@link https://bungie-net.github.io/#GroupV2.GetGroupByName}
 */
export async function getGroupByName(
  http: BungieHttpProtocol,
  params: {
    /** Exact name of the group to find. */
    groupName: string;
    /** Type of group to find. */
    groupType: GroupType;
  }
): Promise<BungieNetResponse<GroupResponse>> {
  const baseUrl = `https://www.bungie.net/Platform/GroupV2/Name/${params.groupName}/${params.groupType}/`;
  const searchParams = undefined;
  return await http<BungieNetResponse<GroupResponse>>({ method: 'GET', baseUrl, searchParams, body: undefined });
}

/**
 * Get information about a specific group with the given name and type. The POST
 * version.
 * @see {@link https://bungie-net.github.io/#GroupV2.GetGroupByNameV2}
 */
export async function getGroupByNameV2(
  http: BungieHttpProtocol,
  body: GroupNameSearchRequest
): Promise<BungieNetResponse<GroupResponse>> {
  const baseUrl = `https://www.bungie.net/Platform/GroupV2/NameV2/`;
  const searchParams = undefined;
  return await http<BungieNetResponse<GroupResponse>, GroupNameSearchRequest>({
    method: 'POST',
    baseUrl,
    searchParams,
    body,
    contentType: 'application/json'
  });
}

/**
 * Gets a list of available optional conversation channels and their settings.
 * @see {@link https://bungie-net.github.io/#GroupV2.GetGroupOptionalConversations}
 */
export async function getGroupOptionalConversations(
  http: BungieHttpProtocol,
  params: {
    /** Requested group's id. */
    groupId: string;
  }
): Promise<BungieNetResponse<GroupOptionalConversation[]>> {
  const baseUrl = `https://www.bungie.net/Platform/GroupV2/${params.groupId}/OptionalConversations/`;
  const searchParams = undefined;
  return await http<BungieNetResponse<GroupOptionalConversation[]>>({
    method: 'GET',
    baseUrl,
    searchParams,
    body: undefined
  });
}

/**
 * Edit an existing group. You must have suitable permissions in the group to
 * perform this operation. This latest revision will only edit the fields you pass
 * in - pass null for properties you want to leave unaltered.
 * @see {@link https://bungie-net.github.io/#GroupV2.EditGroup}
 */
export async function editGroup(
  http: BungieHttpProtocol,
  params: {
    /** Group ID of the group to edit. */
    groupId: string;
  },
  body: GroupEditAction
): Promise<BungieNetResponse<number>> {
  const baseUrl = `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Edit/`;
  const searchParams = undefined;
  return await http<BungieNetResponse<number>, GroupEditAction>({
    method: 'POST',
    baseUrl,
    searchParams,
    body,
    contentType: 'application/json'
  });
}

/**
 * Edit an existing group's clan banner. You must have suitable permissions in the
 * group to perform this operation. All fields are required.
 * @see {@link https://bungie-net.github.io/#GroupV2.EditClanBanner}
 */
export async function editClanBanner(
  http: BungieHttpProtocol,
  params: {
    /** Group ID of the group to edit. */
    groupId: string;
  },
  body: ClanBanner
): Promise<BungieNetResponse<number>> {
  const baseUrl = `https://www.bungie.net/Platform/GroupV2/${params.groupId}/EditClanBanner/`;
  const searchParams = undefined;
  return await http<BungieNetResponse<number>, ClanBanner>({
    method: 'POST',
    baseUrl,
    searchParams,
    body,
    contentType: 'application/json'
  });
}

/**
 * Edit group options only available to a founder. You must have suitable
 * permissions in the group to perform this operation.
 * @see {@link https://bungie-net.github.io/#GroupV2.EditFounderOptions}
 */
export async function editFounderOptions(
  http: BungieHttpProtocol,
  params: {
    /** Group ID of the group to edit. */
    groupId: string;
  },
  body: GroupOptionsEditAction
): Promise<BungieNetResponse<number>> {
  const baseUrl = `https://www.bungie.net/Platform/GroupV2/${params.groupId}/EditFounderOptions/`;
  const searchParams = undefined;
  return await http<BungieNetResponse<number>, GroupOptionsEditAction>({
    method: 'POST',
    baseUrl,
    searchParams,
    body,
    contentType: 'application/json'
  });
}

/**
 * Add a new optional conversation/chat channel. Requires admin permissions to the
 * group.
 * @see {@link https://bungie-net.github.io/#GroupV2.AddOptionalConversation}
 */
export async function addOptionalConversation(
  http: BungieHttpProtocol,
  params: {
    /** Group ID of the group to edit. */
    groupId: string;
  },
  body: GroupOptionalConversationAddRequest
): Promise<BungieNetResponse<string>> {
  const baseUrl = `https://www.bungie.net/Platform/GroupV2/${params.groupId}/OptionalConversations/Add/`;
  const searchParams = undefined;
  return await http<BungieNetResponse<string>, GroupOptionalConversationAddRequest>({
    method: 'POST',
    baseUrl,
    searchParams,
    body,
    contentType: 'application/json'
  });
}

/**
 * Edit the settings of an optional conversation/chat channel. Requires admin
 * permissions to the group.
 * @see {@link https://bungie-net.github.io/#GroupV2.EditOptionalConversation}
 */
export async function editOptionalConversation(
  http: BungieHttpProtocol,
  params: {
    /** Conversation Id of the channel being edited. */
    conversationId: string;
    /** Group ID of the group to edit. */
    groupId: string;
  },
  body: GroupOptionalConversationEditRequest
): Promise<BungieNetResponse<string>> {
  const baseUrl = `https://www.bungie.net/Platform/GroupV2/${params.groupId}/OptionalConversations/Edit/${params.conversationId}/`;
  const searchParams = undefined;
  return await http<BungieNetResponse<string>, GroupOptionalConversationEditRequest>({
    method: 'POST',
    baseUrl,
    searchParams,
    body,
    contentType: 'application/json'
  });
}

/**
 * Get the list of members in a given group.
 * @see {@link https://bungie-net.github.io/#GroupV2.GetMembersOfGroup}
 */
export async function getMembersOfGroup(
  http: BungieHttpProtocol,
  params: {
    /** Page number (starting with 1). Each page has a fixed size of 50 items per page. */
    currentpage: number;
    /** The ID of the group. */
    groupId: string;
    /** Filter out other member types. Use None for all members. */
    memberType?: RuntimeGroupMemberType;
    /**
     * The name fragment upon which a search should be executed for members with
     * matching display or unique names.
     */
    nameSearch?: string;
  }
): Promise<BungieNetResponse<SearchResultOfGroupMember>> {
  const baseUrl = `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Members/`;
  const searchParams = new URLSearchParams();
  if (params.currentpage !== undefined) searchParams.append('currentpage', params.currentpage.toString());
  if (params.memberType !== undefined) searchParams.append('memberType', params.memberType.toString());
  if (params.nameSearch !== undefined) searchParams.append('nameSearch', params.nameSearch.toString());
  return await http<BungieNetResponse<SearchResultOfGroupMember>>({
    method: 'GET',
    baseUrl,
    searchParams,
    body: undefined
  });
}

/**
 * Get the list of members in a given group who are of admin level or higher.
 * @see {@link https://bungie-net.github.io/#GroupV2.GetAdminsAndFounderOfGroup}
 */
export async function getAdminsAndFounderOfGroup(
  http: BungieHttpProtocol,
  params: {
    /** Page number (starting with 1). Each page has a fixed size of 50 items per page. */
    currentpage: number;
    /** The ID of the group. */
    groupId: string;
  }
): Promise<BungieNetResponse<SearchResultOfGroupMember>> {
  const baseUrl = `https://www.bungie.net/Platform/GroupV2/${params.groupId}/AdminsAndFounder/`;
  const searchParams = new URLSearchParams();
  if (params.currentpage !== undefined) searchParams.append('currentpage', params.currentpage.toString());
  return await http<BungieNetResponse<SearchResultOfGroupMember>>({
    method: 'GET',
    baseUrl,
    searchParams,
    body: undefined
  });
}

/**
 * Edit the membership type of a given member. You must have suitable permissions
 * in the group to perform this operation.
 * @see {@link https://bungie-net.github.io/#GroupV2.EditGroupMembership}
 */
export async function editGroupMembership(
  http: BungieHttpProtocol,
  params: {
    /** ID of the group to which the member belongs. */
    groupId: string;
    /** Membership ID to modify. */
    membershipId: string;
    /** Membership type of the provide membership ID. */
    membershipType: BungieMembershipType;
    /** New membertype for the specified member. */
    memberType: RuntimeGroupMemberType;
  }
): Promise<BungieNetResponse<number>> {
  const baseUrl = `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Members/${params.membershipType}/${params.membershipId}/SetMembershipType/${params.memberType}/`;
  const searchParams = undefined;
  return await http<BungieNetResponse<number>>({ method: 'POST', baseUrl, searchParams, body: undefined });
}

/**
 * Kick a member from the given group, forcing them to reapply if they wish to re-
 * join the group. You must have suitable permissions in the group to perform this
 * operation.
 * @see {@link https://bungie-net.github.io/#GroupV2.KickMember}
 */
export async function kickMember(
  http: BungieHttpProtocol,
  params: {
    /** Group ID to kick the user from. */
    groupId: string;
    /** Membership ID to kick. */
    membershipId: string;
    /** Membership type of the provided membership ID. */
    membershipType: BungieMembershipType;
  }
): Promise<BungieNetResponse<GroupMemberLeaveResult>> {
  const baseUrl = `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Members/${params.membershipType}/${params.membershipId}/Kick/`;
  const searchParams = undefined;
  return await http<BungieNetResponse<GroupMemberLeaveResult>>({
    method: 'POST',
    baseUrl,
    searchParams,
    body: undefined
  });
}

/**
 * Bans the requested member from the requested group for the specified period of
 * time.
 * @see {@link https://bungie-net.github.io/#GroupV2.BanMember}
 */
export async function banMember(
  http: BungieHttpProtocol,
  params: {
    /** Group ID that has the member to ban. */
    groupId: string;
    /** Membership ID of the member to ban from the group. */
    membershipId: string;
    /** Membership type of the provided membership ID. */
    membershipType: BungieMembershipType;
  },
  body: GroupBanRequest
): Promise<BungieNetResponse<number>> {
  const baseUrl = `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Members/${params.membershipType}/${params.membershipId}/Ban/`;
  const searchParams = undefined;
  return await http<BungieNetResponse<number>, GroupBanRequest>({
    method: 'POST',
    baseUrl,
    searchParams,
    body,
    contentType: 'application/json'
  });
}

/**
 * Unbans the requested member, allowing them to re-apply for membership.
 * @see {@link https://bungie-net.github.io/#GroupV2.UnbanMember}
 */
export async function unbanMember(
  http: BungieHttpProtocol,
  params: {
    groupId: string;
    /** Membership ID of the member to unban from the group */
    membershipId: string;
    /** Membership type of the provided membership ID. */
    membershipType: BungieMembershipType;
  }
): Promise<BungieNetResponse<number>> {
  const baseUrl = `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Members/${params.membershipType}/${params.membershipId}/Unban/`;
  const searchParams = undefined;
  return await http<BungieNetResponse<number>>({ method: 'POST', baseUrl, searchParams, body: undefined });
}

/**
 * Get the list of banned members in a given group. Only accessible to group Admins
 * and above. Not applicable to all groups. Check group features.
 * @see {@link https://bungie-net.github.io/#GroupV2.GetBannedMembersOfGroup}
 */
export async function getBannedMembersOfGroup(
  http: BungieHttpProtocol,
  params: {
    /** Page number (starting with 1). Each page has a fixed size of 50 entries. */
    currentpage: number;
    /** Group ID whose banned members you are fetching */
    groupId: string;
  }
): Promise<BungieNetResponse<SearchResultOfGroupBan>> {
  const baseUrl = `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Banned/`;
  const searchParams = new URLSearchParams();
  if (params.currentpage !== undefined) searchParams.append('currentpage', params.currentpage.toString());
  return await http<BungieNetResponse<SearchResultOfGroupBan>>({
    method: 'GET',
    baseUrl,
    searchParams,
    body: undefined
  });
}

/**
 * Get the list of edits made to a given group. Only accessible to group Admins and
 * above.
 * @see {@link https://bungie-net.github.io/#GroupV2.GetGroupEditHistory}
 */
export async function getGroupEditHistory(
  http: BungieHttpProtocol,
  params: {
    /** Page number (starting with 1). Each page has a fixed size of 50 entries. */
    currentpage: number;
    /** Group ID whose edit history you are fetching */
    groupId: string;
  }
): Promise<BungieNetResponse<SearchResultOfGroupEditHistory>> {
  const baseUrl = `https://www.bungie.net/Platform/GroupV2/${params.groupId}/EditHistory/`;
  const searchParams = new URLSearchParams();
  if (params.currentpage !== undefined) searchParams.append('currentpage', params.currentpage.toString());
  return await http<BungieNetResponse<SearchResultOfGroupEditHistory>>({
    method: 'GET',
    baseUrl,
    searchParams,
    body: undefined
  });
}

/**
 * An administrative method to allow the founder of a group or clan to give up
 * their position to another admin permanently.
 * @see {@link https://bungie-net.github.io/#GroupV2.AbdicateFoundership}
 */
export async function abdicateFoundership(
  http: BungieHttpProtocol,
  params: {
    /** The new founder for this group. Must already be a group admin. */
    founderIdNew: string;
    /** The target group id. */
    groupId: string;
    /** Membership type of the provided founderIdNew. */
    membershipType: BungieMembershipType;
  }
): Promise<BungieNetResponse<boolean>> {
  const baseUrl = `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Admin/AbdicateFoundership/${params.membershipType}/${params.founderIdNew}/`;
  const searchParams = undefined;
  return await http<BungieNetResponse<boolean>>({ method: 'POST', baseUrl, searchParams, body: undefined });
}

/**
 * Get the list of users who are awaiting a decision on their application to join a
 * given group. Modified to include application info.
 * @see {@link https://bungie-net.github.io/#GroupV2.GetPendingMemberships}
 */
export async function getPendingMemberships(
  http: BungieHttpProtocol,
  params: {
    /** Page number (starting with 1). Each page has a fixed size of 50 items per page. */
    currentpage: number;
    /** ID of the group. */
    groupId: string;
  }
): Promise<BungieNetResponse<SearchResultOfGroupMemberApplication>> {
  const baseUrl = `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Members/Pending/`;
  const searchParams = new URLSearchParams();
  if (params.currentpage !== undefined) searchParams.append('currentpage', params.currentpage.toString());
  return await http<BungieNetResponse<SearchResultOfGroupMemberApplication>>({
    method: 'GET',
    baseUrl,
    searchParams,
    body: undefined
  });
}

/**
 * Get the list of users who have been invited into the group.
 * @see {@link https://bungie-net.github.io/#GroupV2.GetInvitedIndividuals}
 */
export async function getInvitedIndividuals(
  http: BungieHttpProtocol,
  params: {
    /** Page number (starting with 1). Each page has a fixed size of 50 items per page. */
    currentpage: number;
    /** ID of the group. */
    groupId: string;
  }
): Promise<BungieNetResponse<SearchResultOfGroupMemberApplication>> {
  const baseUrl = `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Members/InvitedIndividuals/`;
  const searchParams = new URLSearchParams();
  if (params.currentpage !== undefined) searchParams.append('currentpage', params.currentpage.toString());
  return await http<BungieNetResponse<SearchResultOfGroupMemberApplication>>({
    method: 'GET',
    baseUrl,
    searchParams,
    body: undefined
  });
}

/**
 * Approve all of the pending users for the given group.
 * @see {@link https://bungie-net.github.io/#GroupV2.ApproveAllPending}
 */
export async function approveAllPending(
  http: BungieHttpProtocol,
  params: {
    /** ID of the group. */
    groupId: string;
  },
  body: GroupApplicationRequest
): Promise<BungieNetResponse<EntityActionResult[]>> {
  const baseUrl = `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Members/ApproveAll/`;
  const searchParams = undefined;
  return await http<BungieNetResponse<EntityActionResult[]>, GroupApplicationRequest>({
    method: 'POST',
    baseUrl,
    searchParams,
    body,
    contentType: 'application/json'
  });
}

/**
 * Deny all of the pending users for the given group.
 * @see {@link https://bungie-net.github.io/#GroupV2.DenyAllPending}
 */
export async function denyAllPending(
  http: BungieHttpProtocol,
  params: {
    /** ID of the group. */
    groupId: string;
  },
  body: GroupApplicationRequest
): Promise<BungieNetResponse<EntityActionResult[]>> {
  const baseUrl = `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Members/DenyAll/`;
  const searchParams = undefined;
  return await http<BungieNetResponse<EntityActionResult[]>, GroupApplicationRequest>({
    method: 'POST',
    baseUrl,
    searchParams,
    body,
    contentType: 'application/json'
  });
}

/**
 * Approve all of the pending users for the given group.
 * @see {@link https://bungie-net.github.io/#GroupV2.ApprovePendingForList}
 */
export async function approvePendingForList(
  http: BungieHttpProtocol,
  params: {
    /** ID of the group. */
    groupId: string;
  },
  body: GroupApplicationListRequest
): Promise<BungieNetResponse<EntityActionResult[]>> {
  const baseUrl = `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Members/ApproveList/`;
  const searchParams = undefined;
  return await http<BungieNetResponse<EntityActionResult[]>, GroupApplicationListRequest>({
    method: 'POST',
    baseUrl,
    searchParams,
    body,
    contentType: 'application/json'
  });
}

/**
 * Approve the given membershipId to join the group/clan as long as they have
 * applied.
 * @see {@link https://bungie-net.github.io/#GroupV2.ApprovePending}
 */
export async function approvePending(
  http: BungieHttpProtocol,
  params: {
    /** ID of the group. */
    groupId: string;
    /** The membership id being approved. */
    membershipId: string;
    /** Membership type of the supplied membership ID. */
    membershipType: BungieMembershipType;
  },
  body: GroupApplicationRequest
): Promise<BungieNetResponse<boolean>> {
  const baseUrl = `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Members/Approve/${params.membershipType}/${params.membershipId}/`;
  const searchParams = undefined;
  return await http<BungieNetResponse<boolean>, GroupApplicationRequest>({
    method: 'POST',
    baseUrl,
    searchParams,
    body,
    contentType: 'application/json'
  });
}

/**
 * Deny all of the pending users for the given group that match the passed-in .
 * @see {@link https://bungie-net.github.io/#GroupV2.DenyPendingForList}
 */
export async function denyPendingForList(
  http: BungieHttpProtocol,
  params: {
    /** ID of the group. */
    groupId: string;
  },
  body: GroupApplicationListRequest
): Promise<BungieNetResponse<EntityActionResult[]>> {
  const baseUrl = `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Members/DenyList/`;
  const searchParams = undefined;
  return await http<BungieNetResponse<EntityActionResult[]>, GroupApplicationListRequest>({
    method: 'POST',
    baseUrl,
    searchParams,
    body,
    contentType: 'application/json'
  });
}

/**
 * Get information about the groups that a given member has joined.
 * @see {@link https://bungie-net.github.io/#GroupV2.GetGroupsForMember}
 */
export async function getGroupsForMember(
  http: BungieHttpProtocol,
  params: {
    /** Filter apply to list of joined groups. */
    filter: GroupsForMemberFilter;
    /** Type of group the supplied member founded. */
    groupType: GroupType;
    /** Membership ID to for which to find founded groups. */
    membershipId: string;
    /** Membership type of the supplied membership ID. */
    membershipType: BungieMembershipType;
  }
): Promise<BungieNetResponse<GetGroupsForMemberResponse>> {
  const baseUrl = `https://www.bungie.net/Platform/GroupV2/User/${params.membershipType}/${params.membershipId}/${params.filter}/${params.groupType}/`;
  const searchParams = undefined;
  return await http<BungieNetResponse<GetGroupsForMemberResponse>>({
    method: 'GET',
    baseUrl,
    searchParams,
    body: undefined
  });
}

/**
 * Allows a founder to manually recover a group they can see in game but not on
 * bungie.net
 * @see {@link https://bungie-net.github.io/#GroupV2.RecoverGroupForFounder}
 */
export async function recoverGroupForFounder(
  http: BungieHttpProtocol,
  params: {
    /** Type of group the supplied member founded. */
    groupType: GroupType;
    /** Membership ID to for which to find founded groups. */
    membershipId: string;
    /** Membership type of the supplied membership ID. */
    membershipType: BungieMembershipType;
  }
): Promise<BungieNetResponse<GroupMembershipSearchResponse>> {
  const baseUrl = `https://www.bungie.net/Platform/GroupV2/Recover/${params.membershipType}/${params.membershipId}/${params.groupType}/`;
  const searchParams = undefined;
  return await http<BungieNetResponse<GroupMembershipSearchResponse>>({
    method: 'GET',
    baseUrl,
    searchParams,
    body: undefined
  });
}

/**
 * Get information about the groups that a given member has applied to or been
 * invited to.
 * @see {@link https://bungie-net.github.io/#GroupV2.GetPotentialGroupsForMember}
 */
export async function getPotentialGroupsForMember(
  http: BungieHttpProtocol,
  params: {
    /** Filter apply to list of potential joined groups. */
    filter: GroupPotentialMemberStatus;
    /** Type of group the supplied member applied. */
    groupType: GroupType;
    /** Membership ID to for which to find applied groups. */
    membershipId: string;
    /** Membership type of the supplied membership ID. */
    membershipType: BungieMembershipType;
  }
): Promise<BungieNetResponse<GroupPotentialMembershipSearchResponse>> {
  const baseUrl = `https://www.bungie.net/Platform/GroupV2/User/Potential/${params.membershipType}/${params.membershipId}/${params.filter}/${params.groupType}/`;
  const searchParams = undefined;
  return await http<BungieNetResponse<GroupPotentialMembershipSearchResponse>>({
    method: 'GET',
    baseUrl,
    searchParams,
    body: undefined
  });
}

/**
 * Invite a user to join this group.
 * @see {@link https://bungie-net.github.io/#GroupV2.IndividualGroupInvite}
 */
export async function individualGroupInvite(
  http: BungieHttpProtocol,
  params: {
    /** ID of the group you would like to join. */
    groupId: string;
    /** Membership id of the account being invited. */
    membershipId: string;
    /** MembershipType of the account being invited. */
    membershipType: BungieMembershipType;
  },
  body: GroupApplicationRequest
): Promise<BungieNetResponse<GroupApplicationResponse>> {
  const baseUrl = `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Members/IndividualInvite/${params.membershipType}/${params.membershipId}/`;
  const searchParams = undefined;
  return await http<BungieNetResponse<GroupApplicationResponse>, GroupApplicationRequest>({
    method: 'POST',
    baseUrl,
    searchParams,
    body,
    contentType: 'application/json'
  });
}

/**
 * Cancels a pending invitation to join a group.
 * @see {@link https://bungie-net.github.io/#GroupV2.IndividualGroupInviteCancel}
 */
export async function individualGroupInviteCancel(
  http: BungieHttpProtocol,
  params: {
    /** ID of the group you would like to join. */
    groupId: string;
    /** Membership id of the account being cancelled. */
    membershipId: string;
    /** MembershipType of the account being cancelled. */
    membershipType: BungieMembershipType;
  }
): Promise<BungieNetResponse<GroupApplicationResponse>> {
  const baseUrl = `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Members/IndividualInviteCancel/${params.membershipType}/${params.membershipId}/`;
  const searchParams = undefined;
  return await http<BungieNetResponse<GroupApplicationResponse>>({
    method: 'POST',
    baseUrl,
    searchParams,
    body: undefined
  });
}
