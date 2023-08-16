import { constants, TestCase } from '../global-setup';
import {
  abdicateFoundership,
  addOptionalConversation,
  approveAllPending,
  approvePending,
  approvePendingForList,
  banMember,
  denyAllPending,
  denyPendingForList,
  editClanBanner,
  editFounderOptions,
  editGroup,
  editGroupMembership,
  editOptionalConversation,
  getAdminsAndFounderOfGroup,
  getAvailableAvatars,
  getAvailableThemes,
  getBannedMembersOfGroup,
  getGroup,
  getGroupByName,
  getGroupByNameV2,
  getGroupOptionalConversations,
  getGroupsForMember,
  getInvitedIndividuals,
  getMembersOfGroup,
  getPendingMemberships,
  getPotentialGroupsForMember,
  getRecommendedGroups,
  getUserClanInviteSetting,
  groupSearch,
  individualGroupInvite,
  individualGroupInviteCancel,
  kickMember,
  recoverGroupForFounder,
  unbanMember
} from '../../src/endpoints/GroupV2';

export const abdicateFoundershipTests: TestCase<typeof abdicateFoundership>[] =
  [];
export const addOptionalConversationTests: TestCase<
  typeof addOptionalConversation
>[] = [];
export const approveAllPendingTests: TestCase<typeof approveAllPending>[] = [];
export const approvePendingTests: TestCase<typeof approvePending>[] = [];
export const approvePendingForListTests: TestCase<
  typeof approvePendingForList
>[] = [];
export const banMemberTests: TestCase<typeof banMember>[] = [];
export const denyAllPendingTests: TestCase<typeof denyAllPending>[] = [];
export const denyPendingForListTests: TestCase<typeof denyPendingForList>[] =
  [];
export const editClanBannerTests: TestCase<typeof editClanBanner>[] = [];
export const editFounderOptionsTests: TestCase<typeof editFounderOptions>[] =
  [];
export const editGroupTests: TestCase<typeof editGroup>[] = [];
export const editGroupMembershipTests: TestCase<typeof editGroupMembership>[] =
  [];
export const editOptionalConversationTests: TestCase<
  typeof editOptionalConversation
>[] = [];
export const getAdminsAndFounderOfGroupTests: TestCase<
  typeof getAdminsAndFounderOfGroup
>[] = [];
export const getAvailableAvatarsTests: TestCase<typeof getAvailableAvatars>[] =
  [];
export const getAvailableThemesTests: TestCase<typeof getAvailableThemes>[] =
  [];
export const getBannedMembersOfGroupTests: TestCase<
  typeof getBannedMembersOfGroup
>[] = [];
export const getGroupTests: TestCase<typeof getGroup>[] = [];
export const getGroupByNameTests: TestCase<typeof getGroupByName>[] = [];
export const getGroupByNameV2Tests: TestCase<typeof getGroupByNameV2>[] = [];
export const getGroupOptionalConversationsTests: TestCase<
  typeof getGroupOptionalConversations
>[] = [];
export const getGroupsForMemberTests: TestCase<typeof getGroupsForMember>[] =
  [];
export const getInvitedIndividualsTests: TestCase<
  typeof getInvitedIndividuals
>[] = [];
export const getMembersOfGroupTests: TestCase<typeof getMembersOfGroup>[] = [];
export const getPendingMembershipsTests: TestCase<
  typeof getPendingMemberships
>[] = [];
export const getPotentialGroupsForMemberTests: TestCase<
  typeof getPotentialGroupsForMember
>[] = [];
export const getRecommendedGroupsTests: TestCase<
  typeof getRecommendedGroups
>[] = [];
export const getUserClanInviteSettingTests: TestCase<
  typeof getUserClanInviteSetting
>[] = [];
export const groupSearchTests: TestCase<typeof groupSearch>[] = [];
export const individualGroupInviteTests: TestCase<
  typeof individualGroupInvite
>[] = [];
export const individualGroupInviteCancelTests: TestCase<
  typeof individualGroupInviteCancel
>[] = [];
export const kickMemberTests: TestCase<typeof kickMember>[] = [];
export const recoverGroupForFounderTests: TestCase<
  typeof recoverGroupForFounder
>[] = [];
export const unbanMemberTests: TestCase<typeof unbanMember>[] = [];
