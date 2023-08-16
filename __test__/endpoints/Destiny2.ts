import { constants, TestCase } from './global-setup';
import {
  awaGetActionToken,
  awaInitializeRequest,
  awaProvideAuthorizationResult,
  clearLoadout,
  equipItem,
  equipItems,
  equipLoadout,
  getActivityHistory,
  getCharacter,
  getClanAggregateStats,
  getClanBannerSource,
  getClanLeaderboards,
  getClanWeeklyRewardState,
  getCollectibleNodeDetails,
  getDestinyAggregateActivityStats,
  getDestinyEntityDefinition,
  getDestinyManifest,
  getHistoricalStats,
  getHistoricalStatsDefinition,
  getHistoricalStatsForAccount,
  getItem,
  getLeaderboards,
  getLeaderboardsForCharacter,
  getLinkedProfiles,
  getPostGameCarnageReport,
  getProfile,
  getPublicMilestoneContent,
  getPublicMilestones,
  getPublicVendors,
  getUniqueWeaponHistory,
  getVendor,
  getVendors,
  insertSocketPlug,
  insertSocketPlugFree,
  pullFromPostmaster,
  reportOffensivePostGameCarnageReportPlayer,
  searchDestinyEntities,
  searchDestinyPlayerByBungieName,
  setItemLockState,
  setQuestTrackedState,
  snapshotLoadout,
  transferItem,
  updateLoadoutIdentifiers
} from '../src/endpoints/Destiny2';
import { expect } from '@jest/globals';
import { DestinyComponentType } from '../src/enums/Destiny/DestinyComponentType';
import { BungieMembershipType } from '../src/enums/BungieMembershipType';
import { PlatformErrorCodes } from '../src/enums/Exceptions/PlatformErrorCodes';

export const awaGetActionTokenTests: TestCase<typeof awaGetActionToken>[] = [];
export const awaInitializeRequestTests: TestCase<
  typeof awaInitializeRequest
>[] = [];
export const awaProvideAuthorizationResultTests: TestCase<
  typeof awaProvideAuthorizationResult
>[] = [];
export const clearLoadoutTests: TestCase<typeof clearLoadout>[] = [];
export const equipItemTests: TestCase<typeof equipItem>[] = [];
export const equipItemsTests: TestCase<typeof equipItems>[] = [];
export const equipLoadoutTests: TestCase<typeof equipLoadout>[] = [];
export const getActivityHistoryTests: TestCase<typeof getActivityHistory>[] =
  [];
export const getCharacterTests: TestCase<typeof getCharacter>[] = [];
export const getClanAggregateStatsTests: TestCase<
  typeof getClanAggregateStats
>[] = [];
export const getClanBannerSourceTests: TestCase<typeof getClanBannerSource>[] =
  [];
export const getClanLeaderboardsTests: TestCase<typeof getClanLeaderboards>[] =
  [];
export const getClanWeeklyRewardStateTests: TestCase<
  typeof getClanWeeklyRewardState
>[] = [];
export const getCollectibleNodeDetailsTests: TestCase<
  typeof getCollectibleNodeDetails
>[] = [];
export const getDestinyAggregateActivityStatsTests: TestCase<
  typeof getDestinyAggregateActivityStats
>[] = [];
export const getDestinyEntityDefinitionTests: TestCase<
  typeof getDestinyEntityDefinition
>[] = [
  {
    name: 'get destiny entity definition',
    data: [
      {
        entityType: 'DestinyInventoryItemDefinition',
        hashIdentifier: constants.gjallarhornHash
      }
    ],
    promise: {
      success: ({ Response }) => {
        expect(Response).toHaveProperty('hash');
        expect(Response).toHaveProperty('index');
        expect(Response).toHaveProperty('redacted');
      }
    }
  }
];
export const getDestinyManifestTests: TestCase<typeof getDestinyManifest>[] = [
  {
    name: 'get destiny manifest',
    data: null,
    promise: {
      success: res => {
        expect(res.ErrorCode).toEqual(1);
        expect(res.Response).toHaveProperty('version');
        expect(res.Response).toHaveProperty('jsonWorldContentPaths');
      }
    }
  }
];
export const getHistoricalStatsTests: TestCase<typeof getHistoricalStats>[] =
  [];
export const getHistoricalStatsDefinitionTests: TestCase<
  typeof getHistoricalStatsDefinition
>[] = [];
export const getHistoricalStatsForAccountTests: TestCase<
  typeof getHistoricalStatsForAccount
>[] = [];
export const getItemTests: TestCase<typeof getItem>[] = [];
export const getLeaderboardsTests: TestCase<typeof getLeaderboards>[] = [];
export const getLeaderboardsForCharacterTests: TestCase<
  typeof getLeaderboardsForCharacter
>[] = [];
export const getLinkedProfilesTests: TestCase<typeof getLinkedProfiles>[] = [];
export const getPostGameCarnageReportTests: TestCase<
  typeof getPostGameCarnageReport
>[] = [];
export const getProfileTests: TestCase<typeof getProfile>[] = [
  {
    name: 'test get profile',
    data: [
      {
        components: [DestinyComponentType.Profiles],
        destinyMembershipId: constants.membershipId,
        membershipType: BungieMembershipType.TigerSteam
      }
    ],
    promise: {
      success: ({ Response }) => {
        expect(Response.characterActivities).toHaveProperty('profile');
        expect(Response).toHaveProperty('data');
        expect(Response).toMatchObject({
          characterIds: [
            '2305843009468984093',
            '2305843009478184284',
            '2305843009524164531'
          ],
          userInfo: {
            applicableMembershipTypes: [5, 6, 3],
            bungieGlobalDisplayName: 'Newo',
            bungieGlobalDisplayNameCode: 9010,
            crossSaveOverride: 3,
            displayName: 'Newo',
            isPublic: true,
            membershipId: '4611686018488107374',
            membershipType: 3
          }
        });
        expect(Response).toHaveProperty('responseMintedTimestamp');
        expect(Response).toHaveProperty('secondaryComponentsMintedTimestamp');
      }
    }
  },
  {
    name: 'test bad profile',
    data: [
      {
        components: [DestinyComponentType.Profiles],
        destinyMembershipId: constants.membershipId + 'agyfgajf',
        membershipType: BungieMembershipType.TigerSteam
      }
    ],
    promise: {
      failure: e => {
        expect(e.message).toBe(
          'Unable to parse your parameters.  Please correct them, and try again.'
        );
      }
    }
  }
];
export const getPublicMilestoneContentTests: TestCase<
  typeof getPublicMilestoneContent
>[] = [];
export const getPublicMilestonesTests: TestCase<typeof getPublicMilestones>[] =
  [];
export const getPublicVendorsTests: TestCase<typeof getPublicVendors>[] = [];
export const getUniqueWeaponHistoryTests: TestCase<
  typeof getUniqueWeaponHistory
>[] = [];
export const getVendorTests: TestCase<typeof getVendor>[] = [];
export const getVendorsTests: TestCase<typeof getVendors>[] = [];
export const insertSocketPlugTests: TestCase<typeof insertSocketPlug>[] = [];
export const insertSocketPlugFreeTests: TestCase<
  typeof insertSocketPlugFree
>[] = [];
export const pullFromPostmasterTests: TestCase<typeof pullFromPostmaster>[] =
  [];
export const reportOffensivePostGameCarnageReportPlayerTests: TestCase<
  typeof reportOffensivePostGameCarnageReportPlayer
>[] = [];
export const searchDestinyEntitiesTests: TestCase<
  typeof searchDestinyEntities
>[] = [];
export const searchDestinyPlayerByBungieNameTests: TestCase<
  typeof searchDestinyPlayerByBungieName
>[] = [
  {
    name: 'search player test exact',
    data: [
      {
        membershipType: BungieMembershipType.All
      },
      {
        displayName: 'Newo',
        displayNameCode: 9010
      }
    ],
    promise: {
      success: res => {
        expect(res.ErrorCode).toEqual(1);
        expect(res.Response[0].bungieGlobalDisplayName).toBe('Newo');
        expect(res.Response[0].bungieGlobalDisplayNameCode).toBe(9010);
      }
    }
  },
  {
    name: 'search player failure',
    data: [
      {
        membershipType: BungieMembershipType.All
      },
      {
        displayName: 'Newo',
        displayNameCode: 9
      }
    ],
    promise: {
      success: res => {
        expect(res.ErrorCode).toEqual(1);
        expect(res.Response).toHaveLength(0);
      }
    }
  }
];
export const setItemLockStateTests: TestCase<typeof setItemLockState>[] = [
  {
    name: 'unlock my prized gjnkr',
    data: [
      {
        state: false,
        itemId: constants.gjallarhornHash.toString(),
        characterId: constants.characterIdHunter,
        membershipType: BungieMembershipType.TigerSteam
      }
    ],
    promise: {
      failure(e) {
        expect(e.ErrorCode).toEqual(PlatformErrorCodes.WebAuthRequired);
      }
    }
  }
];
export const setQuestTrackedStateTests: TestCase<
  typeof setQuestTrackedState
>[] = [];
export const snapshotLoadoutTests: TestCase<typeof snapshotLoadout>[] = [];
export const transferItemTests: TestCase<typeof transferItem>[] = [];
export const updateLoadoutIdentifiersTests: TestCase<
  typeof updateLoadoutIdentifiers
>[] = [];
