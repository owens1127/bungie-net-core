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
} from '../src/endpoints/User';
import { TestCase } from './index';

export const getAvailableThemesTests: TestCase<typeof getAvailableThemes>[] = [];
export const getBungieNetUserByIdTests: TestCase<typeof getBungieNetUserById>[] = [];
export const getCredentialTypesForTargetAccountTests: TestCase<
  typeof getCredentialTypesForTargetAccount
>[] = [];
export const getMembershipDataByIdTests: TestCase<typeof getMembershipDataById>[] = [];
export const getMembershipDataForCurrentUserTests: TestCase<
  typeof getMembershipDataForCurrentUser
>[] = [];
export const getMembershipFromHardLinkedCredentialTests: TestCase<
  typeof getMembershipFromHardLinkedCredential
>[] = [];
export const getSanitizedPlatformDisplayNamesTests: TestCase<
  typeof getSanitizedPlatformDisplayNames
>[] = [];
export const searchByGlobalNamePostTests: TestCase<typeof searchByGlobalNamePost>[] = [];
export const searchByGlobalNamePrefixTests: TestCase<typeof searchByGlobalNamePrefix>[] = [];
