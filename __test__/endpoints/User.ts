import { EndpointTestSuite } from '../endpoints.test';
import {
  getAvailableThemes,
  getBungieNetUserById,
  getCredentialTypesForTargetAccount,
  getMembershipDataById,
  getMembershipDataForCurrentUser,
  getMembershipFromHardLinkedCredential,
  getSanitizedPlatformDisplayNames,
  searchByGlobalNamePost,
  searchByGlobalNamePrefix
} from '../../src/endpoints/User';

export const getAvailableThemesTests: EndpointTestSuite<typeof getAvailableThemes> = {
  endpoint: getAvailableThemes,
  cases: []
};
export const getBungieNetUserByIdTests: EndpointTestSuite<typeof getBungieNetUserById> = {
  endpoint: getBungieNetUserById,
  cases: []
};
export const getCredentialTypesForTargetAccountTests: EndpointTestSuite<typeof getCredentialTypesForTargetAccount> = {
  endpoint: getCredentialTypesForTargetAccount,
  cases: []
};
export const getMembershipDataByIdTests: EndpointTestSuite<typeof getMembershipDataById> = {
  endpoint: getMembershipDataById,
  cases: []
};
export const getMembershipDataForCurrentUserTests: EndpointTestSuite<typeof getMembershipDataForCurrentUser> = {
  endpoint: getMembershipDataForCurrentUser,
  cases: []
};
export const getMembershipFromHardLinkedCredentialTests: EndpointTestSuite<typeof getMembershipFromHardLinkedCredential> = {
  endpoint: getMembershipFromHardLinkedCredential,
  cases: []
};
export const getSanitizedPlatformDisplayNamesTests: EndpointTestSuite<typeof getSanitizedPlatformDisplayNames> = {
  endpoint: getSanitizedPlatformDisplayNames,
  cases: []
};
export const searchByGlobalNamePostTests: EndpointTestSuite<typeof searchByGlobalNamePost> = {
  endpoint: searchByGlobalNamePost,
  cases: []
};
export const searchByGlobalNamePrefixTests: EndpointTestSuite<typeof searchByGlobalNamePrefix> = {
  endpoint: searchByGlobalNamePrefix,
  cases: []
};
