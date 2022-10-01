const Client = require('../lib_old/destiny-api/destiny-2-api');
const Destiny2 = require('../index');
const {MembershipTypes} = require('../index');
let config = {
    apikey: process.env.BUNGIE_NET_API_KEY,
    clientId: process.env.BUNGIE_CLIENT_ID,
    secret: process.env.BUNGIE_SECRET,
    auth: '2c64116e7bc20025e030f833f25300ee',
    // Requires a new auth key code each time the tests are run
    token: process.env.access_token,
    refresh: process.env.refresh_token,
    memberShipId: '4611686018488107374',
    hunter: '2305843009468984093',
    warlock: '2305843009478184284',
    titan: '2305843009524164531',
    vendor: '672118013', // banshee
    node: '1196649252', // smgs
    weapon1: { // // witherhoard
        id: '6917529193730513947',
        hash: '2357297366'
    },
    weapon2: { // forebearance
        id: '6917529744998991936',
        hash: '613334176'
    },
    weapon3: { // cataclysmic
        id: '6917529790436439433',
        hash: '999767358'
    },
    umbralEngram: '3309706454',
    bounty: '6917529799997260449',
    bungieNetId: '21296180',

}

jest.setTimeout(12000);

const destiny = new Client({
    key: config.apikey,
    clientId: config.clientId,
    clientSecret: config.secret
});

test('Destiny2 config tests', () => {
    const testiny = new Client({
        key: config.apikey,
        clientId: config.clientId,
        clientSecret: config.secret
    });
    // not sure if this is redundant, may add other tests
    return expect(testiny._key).toEqual(config.apikey);
});

test('get uri test', () => {
    const uri = destiny.getAuthorizationURI('ABCDEF', 'google.com')
    return expect(uri).toEqual(
        `https://www.bungie.net/en/OAuth/Authorize?client_id=${config.clientId}&response_type=code&state=ABCDEF&redirect_uri=google.com`);
});

test('new token test', () => {
    return destiny.getNewToken(config.auth)
        .then(r => {
                expect(r).toHaveProperty('access_token');
                expect(r).toHaveProperty('refresh_token');
                destiny.updateTokens(r.access_token, r.refresh_token);
            }
        )
});

test('invalid token request test', () => {
    return destiny.getNewToken('hello')
        .then(res => {
            expect(res).toHaveProperty('error');
            expect(res).toHaveProperty('error_description');
        })
});

test('token refresh test', () => {
    return destiny.refreshToken(config.refresh)
        .then(res => {
            expect(res).toHaveProperty('access_token');
            expect(res).toHaveProperty('expires_in');
            expect(res).toHaveProperty('membership_id');
            expect(res).toHaveProperty('refresh_expires_in');
            expect(res).toHaveProperty('refresh_token');
            expect(res).toHaveProperty('token_type');
        })

});

test('getDestinyManifest returns the API\'s manifest', () => {
    return destiny.getDestinyManifest()
        .then(res => {
            expect(res.ErrorCode).toEqual(1); // success
            expect(res.Response).toHaveProperty('version');
            expect(res.Response).toHaveProperty('mobileAssetContentPath');
            expect(res.Response).toHaveProperty('mobileGearAssetDataBases');
            expect(res.Response).toHaveProperty('mobileWorldContentPaths');
            expect(res.Response).toHaveProperty('mobileClanBannerDatabasePath');
            expect(res.Response).toHaveProperty('mobileGearCDN');
        });
});

test('getDestinyEntityDefinition returns static definition of entity', () => {
    return destiny.getDestinyEntityDefinition('DestinyInventoryItemDefinition', '2907129557')
        .then(res => {
            expect(res.ErrorCode).toEqual(1); // success
            expect(res.Response).toHaveProperty('hash');
            expect(res.Response.hash).toEqual(2907129557);
        });
});

test('searchDestinyPlayer returns list of memberships tied to account', () => {
    return destiny.searchDestinyPlayerByBungieName(Destiny2.MembershipTypes.Steam, 'Newo', 9010)
        .then(res => {
            expect(res.ErrorCode).toEqual(1); // success
            expect(res.Response).toMatchObject([
                {
                    iconPath: '/img/theme/bungienet/icons/steamLogo.png',
                    membershipType: 3,
                    membershipId: '4611686018488107374',
                    displayName: 'Newo'
                }
            ])
        });
});

test('getLinkedProfiles all linked destinyProfiles of a user', () => {
    return destiny.getLinkedProfiles(Destiny2.MembershipTypes.All, config.memberShipId)
        .then(res => {
            expect(res.ErrorCode).toEqual(1); // success
            expect(res.Response).toMatchObject({
                'bnetMembership': {
                    'bungieGlobalDisplayName': 'Newo',
                    'bungieGlobalDisplayNameCode': 9010,
                    'crossSaveOverride': 0,
                    'displayName': 'Newo',
                    'iconPath': '/img/profile/avatars/default_avatar.gif',
                    'isPublic': false,
                    'membershipId': '21296180',
                    'membershipType': 254,
                    'supplementalDisplayName': 'Newo#9010'
                },
                'profiles': [{
                    'applicableMembershipTypes': [5, 3],
                    'bungieGlobalDisplayName': 'Newo',
                    'bungieGlobalDisplayNameCode': 9010,
                    'crossSaveOverride': 3,
                    'displayName': 'Newo',
                    'isCrossSavePrimary': true,
                    'isOverridden': false,
                    'isPublic': false,
                    'membershipId': '4611686018488107374',
                    'membershipType': 3
                }],
                'profilesWithErrors': []
            })
        });
});

test('getLinkedProfiles on bungie id with \'ALL\'', () => {
    return destiny.getLinkedProfiles(Destiny2.MembershipTypes.All, config.bungieNetId)
        .then(res => {
            console.log(res)
            expect(res.ErrorCode).toEqual(1); // success
            expect(res.Response).toMatchObject({
                'bnetMembership': {
                    'bungieGlobalDisplayName': 'Newo',
                    'bungieGlobalDisplayNameCode': 9010,
                    'crossSaveOverride': 0,
                    'displayName': 'Newo',
                    'iconPath': '/img/profile/avatars/default_avatar.gif',
                    'isPublic': false,
                    'membershipId': '21296180',
                    'membershipType': 254,
                    'supplementalDisplayName': 'Newo#9010'
                },
                'profiles': [{
                    'applicableMembershipTypes': [5, 3],
                    'bungieGlobalDisplayName': 'Newo',
                    'bungieGlobalDisplayNameCode': 9010,
                    'crossSaveOverride': 3,
                    'displayName': 'Newo',
                    'isCrossSavePrimary': true,
                    'isOverridden': false,
                    'isPublic': false,
                    'membershipId': '4611686018488107374',
                    'membershipType': 3
                }],
                'profilesWithErrors': []
            })
        });
});

// may have to move this into one test itself due to all possible enum values
test('getProfile returns user profile object', () => {
    return destiny.getProfile(MembershipTypes.Steam, config.memberShipId, [100])
        .then(res => {
            expect(res.ErrorCode).toEqual(1); // success
            expect(res.Response).toHaveProperty('profile');
            expect(res.Response.profile).toHaveProperty('data');
            expect(res.Response.profile).toHaveProperty('privacy');
            expect(res.Response.profile.data).toHaveProperty('userInfo');
            expect(res.Response.profile.data).toHaveProperty('dateLastPlayed');
            expect(res.Response.profile.data).toHaveProperty('versionsOwned');
            expect(res.Response.profile.data).toHaveProperty('characterIds');
        });
});

test('getProfile doesn\'t work on a bungie profile id', () => {
    return destiny.getProfile(MembershipTypes.BungieNext, config.bungieNetId)
        .then(res => {
            expect(res.ErrorCode).toEqual(7); // shouldn't work
        });
});

test('getCharacter returns character object', () => {
    return destiny.getCharacter(1, '4611686018452936098', '2305843009278477570', [200])
        .then(res => {
            expect(res.ErrorCode).toEqual(1); // success
            expect(res.Response).toHaveProperty('character');
            expect(res.Response.character).toHaveProperty('data');
            expect(res.Response.character.data).toHaveProperty('characterId');
            expect(res.Response.character.data.characterId).toEqual('2305843009278477570');
        });
});

test('getClanWeeklyRewardState returns the current clan progress', () => {
    return destiny.getClanWeeklyRewardState('206662')
        .then(res => {
            expect(res.ErrorCode).toEqual(1); // success
            expect(res.Response).toHaveProperty('milestoneHash');
            expect(res.Response.milestoneHash).toEqual(4253138191); // this may change not sure
            expect(res.Response).toHaveProperty('rewards');
            expect(res.Response).toHaveProperty('startDate');
            expect(res.Response).toHaveProperty('endDate');
        });
});

test('getClanBannerSource returns the values for a clan banner', () => {
    return destiny.getClanBannerSource()
        .then(res => {
            expect(res.ErrorCode).toEqual(1); // success
            expect(res.Response).toMatchObject({});
        });
});

test('getItem return a object with a specific item\'s info from my inventory', () => {
    return destiny.getItem(1, '4611686018452936098', '6917529055771173872', [300])
        .then(res => {
            expect(res.ErrorCode).toEqual(1); // success
            expect(res.Response).toHaveProperty('characterId');
            expect(res.Response.characterId).toEqual('2305843009278477570');
            expect(res.Response).toHaveProperty('instance');
        });
});

test('getVendors return the list of vendors', () => {
    return destiny.getVendors(Destiny2.MembershipTypes.Steam, config.memberShipId, config.hunter,
        [Destiny2.ComponentTypes.VendorSales], Destiny2.VendorFilters.ApiPurchasable)
        .then(res => {
            expect(res.ErrorCode).toEqual(1); // success
            expect(res.Response).toHaveProperty('categories');
            expect(res.Response).toHaveProperty('vendors');
            expect(res.Response).toHaveProperty('currencyLookups');
        });
});

test('getVendor details about a vendor', () => {
    return destiny.getVendor(Destiny2.MembershipTypes.Steam, config.memberShipId, config.hunter,
        config.vendor,
        [Destiny2.ComponentTypes.VendorSales])
        .then(res => {
            expect(res.ErrorCode).toEqual(1); // success
            expect(res.Response).toHaveProperty('vendor');
            expect(res.Response).toHaveProperty('categories');
            expect(res.Response).toHaveProperty('sales');
        });
});

test('getCollectibleNodeDetails details about a node', () => {
    return destiny.getCollectibleNodeDetails(Destiny2.MembershipTypes.Steam, config.memberShipId,
        config.titan, config.node,
        [Destiny2.ComponentTypes.Collectibles])
        .then(res => {
            expect(res.ErrorCode).toEqual(1); // success
            expect(res.Response).toHaveProperty('collectibles');
            expect(res.Response['collectibles']).toHaveProperty('data');
        });
});

test('transferItem from vault', () => {
    return destiny.transferItem(config.weapon1.hash, 1, false, config.weapon1.id, config.titan,
        Destiny2.MembershipTypes.Steam)
        .then(res => {
            expect(res.ErrorCode).toEqual(1); // success
        });
});

test('pullFromPostmaster to a character', () => {
    return destiny.pullFromPostmaster(config.umbralEngram, 3, '1234', config.hunter,
        Destiny2.MembershipTypes.Steam)
        .then(res => {
            expect(res.ErrorCode).toEqual(1623); // DestinyItemNotFound
            // Testing pulling an item from my postmaster is pain, so this will suffice
        });
});

test('equipItem to a character', () => {
    return destiny.equipItem(config.weapon1.id, config.titan,
        Destiny2.MembershipTypes.Steam)
        .then(res => {
            expect(res.ErrorCode).toEqual(1); // success
        });
});

test('equipItems to a character', () => {
    return destiny.equipItems([config.weapon1.id, config.weapon2.id, config.weapon3.id],
        config.titan,
        Destiny2.MembershipTypes.Steam)
        .then(res => {
            expect(res.ErrorCode).toEqual(1); // success
            expect(res.Response).toMatchObject({
                'equipResults': [
                    {
                        'itemInstanceId': '6917529193730513947'
                    },
                    {
                        'itemInstanceId': '6917529744998991936'
                    },
                    {
                        'itemInstanceId': '6917529790436439433'
                    }
                ]
            });
        });
});

test('setItemLockState of an item', () => {
    return destiny.setItemLockState(true, config.weapon1.id, config.titan,
        Destiny2.MembershipTypes.Steam)
        .then(res => {
            expect(res.ErrorCode).toEqual(1); // success
        });
});

test('setQuestTrackedState of a bounty', () => {
    return destiny.setQuestTrackedState(false, config.bounty, config.titan, Destiny2.MembershipTypes.Steam)
        .then(res => {
            expect(res.ErrorCode).toEqual(1); // success
        });
});

test('getPostGameCarnageReport for activityId 328104460', () => {
    return destiny.getPostGameCarnageReport('328104460')
        .then(res => {
            expect(res.ErrorCode).toEqual(1); // success
            expect(res.Response).toHaveProperty('period');
            expect(res.Response).toHaveProperty('activityDetails');
            expect(res.Response).toHaveProperty('entries');
            expect(res.Response).toHaveProperty('teams');
            expect(res.Response.activityDetails.referenceId).toEqual(1583254851);
            expect(res.Response.activityDetails.directorActivityHash).toEqual(3243161126);
            expect(res.Response.activityDetails.instanceId).toEqual('328104460');
        });
});

test('reportOffensivePostGameCarnageReportPlayer', () => {
    return destiny.reportOffensivePostGameCarnageReportPlayer([''], [''], '')
        .then(res => {
            expect(res.ErrorCode).toEqual(2108); // AccessNotPermittedByApplicationScope
            // I don't want to spam this endpoint
        });
});

test('searchDestinyEntities returns page list for Xenophage search', () => {
    return destiny.searchDestinyEntities('DestinyInventoryItemDefinition', 'Xenophage', [0])
        .then(res => {
            expect(res.ErrorCode).toEqual(1);
            expect(res.Response).toHaveProperty('suggestedWords');
            expect(res.Response).toHaveProperty('results');
        });
});

test('getHistoricalStatsDefinition', () => {
    return destiny.getHistoricalStatsDefinition()
        .then(res => {
            expect(res.ErrorCode).toEqual(1); // success
            expect(res.Response).toHaveProperty('activitiesCleared');
            expect(res.Response).toHaveProperty('medalAbilityNightstalkerTetherQuick');
            expect(res.Response).toHaveProperty('medalCountdownDefense');
        });
});

test('getHistoricalStats returns object containing historical stats for account for allPvE', () => {
    return destiny.getHistoricalStats(Destiny2.MembershipTypes.Steam, config.memberShipId,
        config.warlock, new Date(), new Date(new Date().getTime() - 86400000),
        [], [Destiny2.ActivityModeTypes.AllPvE])
        .then(res => {
            expect(res.ErrorCode).toEqual(1); // success
            expect(res.Response).toHaveProperty('allPvE');
            expect(res.Response['allPvE']).toHaveProperty('allTime');
            expect(res.Response['allPvE']['allTime']).toHaveProperty('activitiesCleared');
            expect(res.Response['allPvE']['allTime']).toHaveProperty('weaponKillsShotgun');
            expect(res.Response['allPvE']['allTime']).toHaveProperty('longestKillDistance');
        });
});

test('getHistoricalStatsForAccount returns aggregated stats for account', () => {
    return destiny.getHistoricalStatsForAccount(1, '4611686018452936098')
        .then(res => {
            expect(res.ErrorCode).toEqual(1);
            expect(res.Response).toHaveProperty('mergedDeletedCharacters');
            expect(res.Response).toHaveProperty('mergedAllCharacters');
            expect(res.Response).toHaveProperty('characters');
        });
});

test('getActivityHistory returns object containing 5 most recent PvE activities for char', () => {
    return destiny.getActivityHistory(1,
        '4611686018452936098',
        '2305843009278477570',
        5, Destiny2.ActivityModeTypes.AllPvE, 1)
        .then(res => {
            expect(res.ErrorCode).toEqual(1); // success
            expect(res.Response).toHaveProperty('activities');
            expect(res.Response['activities'][0]).toHaveProperty('period');
            expect(res.Response['activities'][0]).toHaveProperty('activityDetails');
        });
});

test('getUniqueWeaponHistory returns object w/ weapon stats for specific character', () => {
    return destiny.getUniqueWeaponHistory(Destiny2.MembershipTypes.All, config.memberShipId,
        config.warlock)
        .then(res => {
            expect(res.ErrorCode).toEqual(1);
            expect(res.Response).toHaveProperty('weapons');
            expect((res.Response['weapons'])).toBeInstanceOf(Array);
        });
});

test('getDestinyAggregateActivityStats returns all stats for all activities done by char', () => {
    return destiny.getDestinyAggregateActivityStats(Destiny2.MembershipTypes.All,
        config.memberShipId, config.hunter)
        .then(res => {
            expect(res.ErrorCode).toEqual(1);
            expect(res.Response).toHaveProperty('activities');
            expect((res.Response['activities'])).toBeInstanceOf(Array);
        })
});

test('getHistoricalStatsDefinition returns historical stats definitions', () => {
    return destiny.getHistoricalStatsDefinition()
        .then(res => {
            expect(res.ErrorCode).toEqual(1); // success
            expect(res.Response).toHaveProperty('completed');
            expect(res.Response).toHaveProperty('medalStreak10x');
            expect(res.Response).toHaveProperty('medalCountdownDefusedLastStand');
        });
});

// hash is a clan's weekly rewards progress
test('getPublicMilestoneContent for the hash 4253138191', () => {
    return destiny.getPublicMilestoneContent('4253138191')
        .then(res => {
            expect(res.ErrorCode).toEqual(1); // success
            expect(res.Response).toHaveProperty('about');
            expect(res.Response).toHaveProperty('status');
            expect(res.Response).toHaveProperty('tips');
        });
})

// since these always change we just check error code for success
test('getPublicMilestones returns list of current milestones', () => {
    return destiny.getPublicMilestones()
        .then(res => {
            expect(res.ErrorCode).toEqual(1); // success
        });

});
