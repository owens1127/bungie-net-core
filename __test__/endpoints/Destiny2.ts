import { EndpointTestSuite } from '../endpoints.test';
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
} from '../../src/endpoints/Destiny2';
import { expect } from '@jest/globals';
import { DestinyComponentType } from '../../src/enums/Destiny/DestinyComponentType';
import { BungieMembershipType } from '../../src/enums/BungieMembershipType';
import { PlatformErrorCodes } from '../../src/enums/Exceptions/PlatformErrorCodes';
import { constants } from '../global-setup';

export const awaGetActionTokenTests: EndpointTestSuite<
  typeof awaGetActionToken
> = {
  endpoint: awaGetActionToken,
  cases: []
};
export const awaInitializeRequestTests: EndpointTestSuite<
  typeof awaInitializeRequest
> = {
  endpoint: awaInitializeRequest,
  cases: []
};
export const awaProvideAuthorizationResultTests: EndpointTestSuite<
  typeof awaProvideAuthorizationResult
> = {
  endpoint: awaProvideAuthorizationResult,
  cases: []
};
export const clearLoadoutTests: EndpointTestSuite<typeof clearLoadout> = {
  endpoint: clearLoadout,
  cases: []
};
export const equipItemTests: EndpointTestSuite<typeof equipItem> = {
  endpoint: equipItem,
  cases: []
};
export const equipItemsTests: EndpointTestSuite<typeof equipItems> = {
  endpoint: equipItems,
  cases: []
};
export const equipLoadoutTests: EndpointTestSuite<typeof equipLoadout> = {
  endpoint: equipLoadout,
  cases: []
};
export const getActivityHistoryTests: EndpointTestSuite<
  typeof getActivityHistory
> = {
  endpoint: getActivityHistory,
  cases: []
};
export const getCharacterTests: EndpointTestSuite<typeof getCharacter> = {
  endpoint: getCharacter,
  cases: []
};
export const getClanAggregateStatsTests: EndpointTestSuite<
  typeof getClanAggregateStats
> = {
  endpoint: getClanAggregateStats,
  cases: []
};
export const getClanBannerSourceTests: EndpointTestSuite<
  typeof getClanBannerSource
> = {
  endpoint: getClanBannerSource,
  cases: []
};
export const getClanLeaderboardsTests: EndpointTestSuite<
  typeof getClanLeaderboards
> = {
  endpoint: getClanLeaderboards,
  cases: []
};
export const getClanWeeklyRewardStateTests: EndpointTestSuite<
  typeof getClanWeeklyRewardState
> = {
  endpoint: getClanWeeklyRewardState,
  cases: []
};
export const getCollectibleNodeDetailsTests: EndpointTestSuite<
  typeof getCollectibleNodeDetails
> = {
  endpoint: getCollectibleNodeDetails,
  cases: []
};
export const getDestinyAggregateActivityStatsTests: EndpointTestSuite<
  typeof getDestinyAggregateActivityStats
> = {
  endpoint: getDestinyAggregateActivityStats,
  cases: []
};
export const getDestinyEntityDefinitionTests: EndpointTestSuite<
  typeof getDestinyEntityDefinition
> = {
  endpoint: getDestinyEntityDefinition,
  cases: [
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
  ]
};
export const getDestinyManifestTests: EndpointTestSuite<
  typeof getDestinyManifest
> = {
  endpoint: getDestinyManifest,
  cases: [
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
  ]
};
export const getHistoricalStatsTests: EndpointTestSuite<
  typeof getHistoricalStats
> = {
  endpoint: getHistoricalStats,
  cases: []
};
export const getHistoricalStatsDefinitionTests: EndpointTestSuite<
  typeof getHistoricalStatsDefinition
> = {
  endpoint: getHistoricalStatsDefinition,
  cases: []
};
export const getHistoricalStatsForAccountTests: EndpointTestSuite<
  typeof getHistoricalStatsForAccount
> = {
  endpoint: getHistoricalStatsForAccount,
  cases: []
};
export const getItemTests: EndpointTestSuite<typeof getItem> = {
  endpoint: getItem,
  cases: []
};
export const getLeaderboardsTests: EndpointTestSuite<typeof getLeaderboards> = {
  endpoint: getLeaderboards,
  cases: []
};
export const getLeaderboardsForCharacterTests: EndpointTestSuite<
  typeof getLeaderboardsForCharacter
> = {
  endpoint: getLeaderboardsForCharacter,
  cases: []
};
export const getLinkedProfilesTests: EndpointTestSuite<
  typeof getLinkedProfiles
> = {
  endpoint: getLinkedProfiles,
  cases: []
};
export const getPostGameCarnageReportTests: EndpointTestSuite<
  typeof getPostGameCarnageReport
> = {
  endpoint: getPostGameCarnageReport,
  cases: []
};
export const getProfileTests: EndpointTestSuite<typeof getProfile> = {
  endpoint: getProfile,
  cases: [
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
          expect(Response).toHaveProperty('profile');
          expect(Response.profile).toHaveProperty('data');
          expect(Response.profile.data).toMatchObject({
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
  ]
};
export const getPublicMilestoneContentTests: EndpointTestSuite<
  typeof getPublicMilestoneContent
> = {
  endpoint: getPublicMilestoneContent,
  cases: []
};
export const getPublicMilestonesTests: EndpointTestSuite<
  typeof getPublicMilestones
> = {
  endpoint: getPublicMilestones,
  cases: []
};
export const getPublicVendorsTests: EndpointTestSuite<typeof getPublicVendors> =
  {
    endpoint: getPublicVendors,
    cases: []
  };
export const getUniqueWeaponHistoryTests: EndpointTestSuite<
  typeof getUniqueWeaponHistory
> = {
  endpoint: getUniqueWeaponHistory,
  cases: []
};
export const getVendorTests: EndpointTestSuite<typeof getVendor> = {
  endpoint: getVendor,
  cases: []
};
export const getVendorsTests: EndpointTestSuite<typeof getVendors> = {
  endpoint: getVendors,
  cases: []
};
export const insertSocketPlugTests: EndpointTestSuite<typeof insertSocketPlug> =
  {
    endpoint: insertSocketPlug,
    cases: []
  };
export const insertSocketPlugFreeTests: EndpointTestSuite<
  typeof insertSocketPlugFree
> = {
  endpoint: insertSocketPlugFree,
  cases: []
};
export const pullFromPostmasterTests: EndpointTestSuite<
  typeof pullFromPostmaster
> = {
  endpoint: pullFromPostmaster,
  cases: []
};
export const reportOffensivePostGameCarnageReportPlayerTests: EndpointTestSuite<
  typeof reportOffensivePostGameCarnageReportPlayer
> = {
  endpoint: reportOffensivePostGameCarnageReportPlayer,
  cases: []
};
export const searchDestinyEntitiesTests: EndpointTestSuite<
  typeof searchDestinyEntities
> = {
  endpoint: searchDestinyEntities,
  cases: []
};
export const searchDestinyPlayerByBungieNameTests: EndpointTestSuite<
  typeof searchDestinyPlayerByBungieName
> = {
  endpoint: searchDestinyPlayerByBungieName,
  cases: [
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
  ]
};
export const setItemLockStateTests: EndpointTestSuite<typeof setItemLockState> =
  {
    endpoint: setItemLockState,
    cases: [
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
    ]
  };
export const setQuestTrackedStateTests: EndpointTestSuite<
  typeof setQuestTrackedState
> = {
  endpoint: setQuestTrackedState,
  cases: []
};
export const snapshotLoadoutTests: EndpointTestSuite<typeof snapshotLoadout> = {
  endpoint: snapshotLoadout,
  cases: []
};
export const transferItemTests: EndpointTestSuite<typeof transferItem> = {
  endpoint: transferItem,
  cases: []
};
export const updateLoadoutIdentifiersTests: EndpointTestSuite<
  typeof updateLoadoutIdentifiers
> = {
  endpoint: updateLoadoutIdentifiers,
  cases: []
};
