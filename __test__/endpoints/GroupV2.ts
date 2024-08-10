import { EndpointTestSuite } from '../endpoints.test';
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
  getGroupEditHistory,
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

export const abdicateFoundershipTests: EndpointTestSuite<typeof abdicateFoundership> = {
  endpoint: abdicateFoundership,
  cases: []
};
export const addOptionalConversationTests: EndpointTestSuite<typeof addOptionalConversation> = {
  endpoint: addOptionalConversation,
  cases: []
};
export const approveAllPendingTests: EndpointTestSuite<typeof approveAllPending> = {
  endpoint: approveAllPending,
  cases: []
};
export const approvePendingTests: EndpointTestSuite<typeof approvePending> = {
  endpoint: approvePending,
  cases: []
};
export const approvePendingForListTests: EndpointTestSuite<typeof approvePendingForList> = {
  endpoint: approvePendingForList,
  cases: []
};
export const banMemberTests: EndpointTestSuite<typeof banMember> = {
  endpoint: banMember,
  cases: []
};
export const denyAllPendingTests: EndpointTestSuite<typeof denyAllPending> = {
  endpoint: denyAllPending,
  cases: []
};
export const denyPendingForListTests: EndpointTestSuite<typeof denyPendingForList> = {
  endpoint: denyPendingForList,
  cases: []
};
export const editClanBannerTests: EndpointTestSuite<typeof editClanBanner> = {
  endpoint: editClanBanner,
  cases: []
};
export const editFounderOptionsTests: EndpointTestSuite<typeof editFounderOptions> = {
  endpoint: editFounderOptions,
  cases: []
};
export const editGroupTests: EndpointTestSuite<typeof editGroup> = {
  endpoint: editGroup,
  cases: []
};
export const editGroupMembershipTests: EndpointTestSuite<typeof editGroupMembership> = {
  endpoint: editGroupMembership,
  cases: []
};
export const editOptionalConversationTests: EndpointTestSuite<typeof editOptionalConversation> = {
  endpoint: editOptionalConversation,
  cases: []
};
export const getAdminsAndFounderOfGroupTests: EndpointTestSuite<typeof getAdminsAndFounderOfGroup> = {
  endpoint: getAdminsAndFounderOfGroup,
  cases: []
};
export const getAvailableAvatarsTests: EndpointTestSuite<typeof getAvailableAvatars> = {
  endpoint: getAvailableAvatars,
  cases: []
};
export const getAvailableThemesTests: EndpointTestSuite<typeof getAvailableThemes> = {
  endpoint: getAvailableThemes,
  cases: []
};
export const getBannedMembersOfGroupTests: EndpointTestSuite<typeof getBannedMembersOfGroup> = {
  endpoint: getBannedMembersOfGroup,
  cases: []
};
export const getGroupEditHistoryTests: EndpointTestSuite<typeof getGroupEditHistory> = {
  endpoint: getGroupEditHistory,
  cases: []
};
export const getGroupTests: EndpointTestSuite<typeof getGroup> = {
  endpoint: getGroup,
  cases: []
};
export const getGroupByNameTests: EndpointTestSuite<typeof getGroupByName> = {
  endpoint: getGroupByName,
  cases: []
};
export const getGroupByNameV2Tests: EndpointTestSuite<typeof getGroupByNameV2> = {
  endpoint: getGroupByNameV2,
  cases: []
};
export const getGroupOptionalConversationsTests: EndpointTestSuite<typeof getGroupOptionalConversations> = {
  endpoint: getGroupOptionalConversations,
  cases: []
};
export const getGroupsForMemberTests: EndpointTestSuite<typeof getGroupsForMember> = {
  endpoint: getGroupsForMember,
  cases: []
};
export const getInvitedIndividualsTests: EndpointTestSuite<typeof getInvitedIndividuals> = {
  endpoint: getInvitedIndividuals,
  cases: []
};
export const getMembersOfGroupTests: EndpointTestSuite<typeof getMembersOfGroup> = {
  endpoint: getMembersOfGroup,
  cases: []
};
export const getPendingMembershipsTests: EndpointTestSuite<typeof getPendingMemberships> = {
  endpoint: getPendingMemberships,
  cases: []
};
export const getPotentialGroupsForMemberTests: EndpointTestSuite<typeof getPotentialGroupsForMember> = {
  endpoint: getPotentialGroupsForMember,
  cases: []
};
export const getRecommendedGroupsTests: EndpointTestSuite<typeof getRecommendedGroups> = {
  endpoint: getRecommendedGroups,
  cases: []
};
export const getUserClanInviteSettingTests: EndpointTestSuite<typeof getUserClanInviteSetting> = {
  endpoint: getUserClanInviteSetting,
  cases: []
};
export const groupSearchTests: EndpointTestSuite<typeof groupSearch> = {
  endpoint: groupSearch,
  cases: []
};
export const individualGroupInviteTests: EndpointTestSuite<typeof individualGroupInvite> = {
  endpoint: individualGroupInvite,
  cases: []
};
export const individualGroupInviteCancelTests: EndpointTestSuite<typeof individualGroupInviteCancel> = {
  endpoint: individualGroupInviteCancel,
  cases: []
};
export const kickMemberTests: EndpointTestSuite<typeof kickMember> = {
  endpoint: kickMember,
  cases: []
};
export const recoverGroupForFounderTests: EndpointTestSuite<typeof recoverGroupForFounder> = {
  endpoint: recoverGroupForFounder,
  cases: []
};
export const unbanMemberTests: EndpointTestSuite<typeof unbanMember> = {
  endpoint: unbanMember,
  cases: []
};
