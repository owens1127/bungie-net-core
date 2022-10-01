import * as Schemas from 'bungie-api-typedef/schemas'
import { InvalidComponentsError } from './errors/InvalidComponentsError.js';

// allows jsdoc to work
const placeholder = Schemas;

/**
 * @param {Schemas.DestinyLinkedProfilesResponse} response
 * @param {DestinyAPIClient} client
 * @param {Object} context
 * @return void
 **/
export function patchDestinyLinkedProfilesResponse(response, client, context) {
    response.profiles.forEach((profile, profileIndex) => {
        patchDestinyProfileUserInfoCard(profile, client, {...context, profileIndex});
    });
    patchUserInfoCard(response.bnetMembership, client, context);
    // response.profilesWithErrors
}

/**
 *
 * @param {Schemas.DestinyProfileUserInfoCard} card
 * @param {DestinyAPIClient} client
 * @param {Object} context
 */
function patchDestinyProfileUserInfoCard(card, client, context) {
    context.membershipId = card.membershipId;
    client.destinyProfiles._update(card.membershipId, card, context);
    patchDestinyPlatformSilverComponent(card.platformSilver, client, context);
}

/**
 * @typedef {Object} DestinyResponseContext
 * @property {string} membershipId
 * @property {Schemas.BungieMembershipType} membershipType
 * @property {string} [characterId]
 * @property {string} [vendorHash]
 */

/**
 * @typedef {'character' | 'profile' | 'vendor'} DestinyResponseScope
 */

/**
 *
 * @param {Schemas.DestinyProfileResponse} response
 * @param {DestinyAPIClient} client
 * @param {DestinyResponseContext} context
 * @return void
 */
export function patchDestinyProfileResponse(response, client, context) {
    if ('vendorReceipts' in response) {
        patchDestinyVendorReceiptsComponent(response.vendorReceipts.data, client, context);
    }
    if ('profileInventory' in response) {
        patchDestinyInventoryComponent(response.profileInventory.data, client, context, 'profile');
    }
    if ('profileCurrencies' in response) {
        patchDestinyInventoryComponent(response.profileCurrencies.data, client, context, 'profile');
    }
    if ('profile' in response) {
        patchDestinyProfileComponent(response.profile.data, client, context);
    }
    if ('profileKiosks' in response) {
        patchDestinyKiosksComponent(response.profileKiosks.data, client, context, 'profile');
    }
    if ('profilePlugSets' in response) {
        patchDestinyPlugSetsComponent(response.profilePlugSets.data, client, context, 'profile');
    }
    if ('profileProgression' in response) {
        patchDestinyProfileProgressionComponent(response.profileProgression.data, client, context);
    }
    if ('profilePresentationNodes' in response) {
        patchDestinyPresentationNodesComponent(response.profilePresentationNodes.data, client,
            context, 'profile');
    }
    if ('profileRecords' in response) {
        patchDestinyProfileRecordsComponent(response.profileRecords.data, client, context);
    }
    if ('profileCollectibles' in response) {
        patchDestinyProfileCollectiblesComponent(response.profileCollectibles.data, client,
            context);
    }
    if ('profileTransitoryData' in response) {
        patchDestinyProfileTransitoryComponent(response.profileTransitoryData.data, client,
            context);
    }
    if ('metrics' in response) {
        patchDestinyMetricsComponent(response.metrics.data, client, context);
    }
    if ('profileStringVariables' in response) {
        patchDestinyStringVariablesComponent(response.profileStringVariables.data, client, context,
            'profile');
    }
    if ('platformSilver' in response) {
        patchDestinyPlatformSilverComponent(response.platformSilver.data, client, context);
    }
    if ('characters' in response) {
        Object.keys(response.characters.data).forEach(key => {
            context.characterId = key;
            patchDestinyCharacterComponent(response.characters.data[key], client, context);
        })
    }
    if ('characterInventories' in response) {
        Object.keys(response.characterInventories.data).forEach(key => {
            context.characterId = key;
            patchDestinyInventoryComponent(response.characterInventories.data[key], client, context,
                'character');
        })
    }
    if ('characterProgressions' in response) {
        Object.keys(response.characterProgressions.data).forEach(key => {
            context.characterId = key;
            patchDestinyCharacterProgressionComponent(response.characterProgressions.data[key],
                client, context);
        })
    }
    if ('characterRenderData' in response) {
        Object.keys(response.characterRenderData.data).forEach(key => {
            context.characterId = key;
            patchDestinyCharacterRenderComponent(response.characterRenderData.data[key], client,
                context);
        })
    }
    if ('characterActivities' in response) {
        Object.keys(response.characterActivities.data).forEach(key => {
            context.characterId = key;
            patchDestinyCharacterActivitiesComponent(response.characterActivities.data[key], client,
                context);
        })
    }
    if ('characterEquipment' in response) {
        Object.keys(response.characterEquipment.data).forEach(key => {
            context.characterId = key;
            patchDestinyInventoryComponent(response.characterEquipment.data[key], client,
                context, 'character');
        })
    }
    if ('characterKiosks' in response) {
        Object.keys(response.characterKiosks.data).forEach(key => {
            context.characterId = key;
            patchDestinyKiosksComponent(response.characterKiosks.data[key], client, context,
                'character');
        })
    }
    if ('characterPlugSets' in response) {
        Object.keys(response.characterPlugSets.data).forEach(key => {
            context.characterId = key;
            patchDestinyPlugSetsComponent(response.characterPlugSets.data[key], client, context,
                'character');
        })
    }
    if ('characterPresentationNodes' in response) {
        Object.keys(response.characterPresentationNodes.data).forEach(key => {
            context.characterId = key;
            patchDestinyPresentationNodesComponent(response.characterPresentationNodes.data[key],
                client, context, 'character');
        })
    }
    if ('characterRecords' in response) {
        Object.keys(response.characterRecords.data).forEach(key => {
            context.characterId = key;
            patchDestinyCharacterRecordsComponent(response.characterRecords.data[key], client,
                context);
        })
    }
    if ('characterCollectibles' in response) {
        Object.keys(response.characterCollectibles.data).forEach(key => {
            context.characterId = key;
            patchDestinyCollectiblesComponent(response.characterCollectibles.data[key], client,
                context, 'character');
        })
    }
    if ('characterStringVariables' in response) {
        Object.keys(response.characterStringVariables.data).forEach(key => {
            context.characterId = key;
            patchDestinyStringVariablesComponent(response.characterStringVariables.data[key],
                client, context, 'character');
        })
    }
    if ('characterCraftables' in response) {
        Object.keys(response.characterCraftables.data).forEach(key => {
            context.characterId = key;
            patchDestinyCraftablesComponent(response.characterCraftables.data[key], client, context,
                'character');
        })
    }
    if ('characterCurrencyLookups' in response) {
        Object.keys(response.characterCurrencyLookups.data).forEach(key => {
            context.characterId = key;
            patchDestinyCurrenciesComponent(response.characterCurrencyLookups.data[key], client,
                context, 'character');
        })
    }
    if ('characterUninstancedItemComponents' in response) {
        Object.keys(response.characterUninstancedItemComponents).forEach(key => {
            context.characterId = key;
            patchDestinyBaseItemComponentSetKeyedByHash(
                response.characterUninstancedItemComponents[key],
                client, context, 'character');
        })
    }
    if ('itemComponents' in response) {
        patchDestinyItemComponentSetKeyedByInstance(response.itemComponents, client, context,
            'profile');
    }
}

/**
 *
 * @param {Schemas.DestinyCharacterResponse} response
 * @param {DestinyAPIClient} client
 * @param {DestinyResponseContext} context
 * @return void
 */
export function patchCharacterResponse(response, client, context) {
    if ('inventory' in response) {
        patchDestinyInventoryComponent(response.inventory.data, client, context, 'character');
    }
    if ('character' in response) {
        patchDestinyCharacterComponent(response.character.data, client, context)
    }
    if ('progressions' in response) {
        patchDestinyCharacterProgressionComponent(response.progressions.data, client, context)
    }
    if ('renderData' in response) {
        patchDestinyCharacterRenderComponent(response.renderData.data, client, context)
    }
    if ('activities' in response) {
        patchDestinyCharacterActivitiesComponent(response.activities.data, client, context)
    }
    if ('equipment' in response) {
        patchDestinyInventoryComponent(response.equipment.data, client, context, 'character')
    }
    if ('kiosks' in response) {
        patchDestinyKiosksComponent(response.kiosks.data, client, context, 'character')
    }
    if ('plugSets' in response) {
        patchDestinyPlugSetsComponent(response.plugSets.data, client, context, 'character')
    }
    if ('presentationNodes' in response) {
        patchDestinyPresentationNodesComponent(response.presentationNodes.data, client, context,
            'character')
    }
    if ('records' in response) {
        patchDestinyCharacterRecordsComponent(response.records.data, client, context)
    }
    if ('collectibles' in response) {
        patchDestinyCollectiblesComponent(response.collectibles.data, client, context, 'character')
    }
    if ('currencyLookups' in response) {
        patchDestinyCurrenciesComponent(response.currencyLookups.data, client, context, 'character')
    }
    if ('itemComponents' in response) {
        patchDestinyItemComponentSetKeyedByInstance(response.itemComponents, client, context,
            'character')
    }
    if ('uninstancedItemComponents' in response) {
        patchDestinyBaseItemComponentSetKeyedByHash(response.uninstancedItemComponents, client,
            context,
            'profile')
    }
}

/**
 *
 * @param {Schemas.DestinyVendorResponse} response
 * @param {DestinyAPIClient} client
 * @param {DestinyResponseContext} context
 * @return void
 */
export function patchDestinyVendorResponse(response, client, context) {
    if (!('vendorHash' in context)) {
        throw new Error(
            'The requested item had no instanceId. All item responses should have an item instance id in the context.');
    }
    let data = {};
    if ('vendor' in response) {
        data = response.vendor.data
    }
    if ('categories' in response && response.categories.data !== undefined) {
        data.categories = response.categories.data.categories
    }
    if ('sales' in response && response.sales.data !== undefined) {
        data.sales = response.sales.data
    }
    if ('itemComponents' in response) {
        patchDestinyItemComponentSetKeyedByVendor(response.itemComponents, client, context)
    }
    if ('currencyLookups' in response) {
        patchDestinyCurrenciesComponent(response.currencyLookups.data, client, context, 'vendor')
    }
    if ('stringVariables' in response) {
        patchDestinyStringVariablesComponent(response.stringVariables.data, client, context,
            'vendor')
    }
    client.destinyProfiles.cache.get(context.membershipId).characters.cache.get(context.characterId)
        .vendors._update(context.vendorHash, data, context)
}

/**
 *
 * @param {Schemas.DestinyItemResponse} response
 * @param {DestinyAPIClient} client
 * @param {DestinyResponseContext} context
 */
export function patchDestinyItemResponse(response, client, context) {
    if (!('itemInstanceId' in context)) {
        throw new Error(
            'The requested item had no instanceId. All item responses should have an item instance id in the context.');
    }
    let scope;
    let instancedItems;
    if ('vendorHash' in context) {
        instancedItems =
            client.destinyProfiles.cache.get(context.membershipId)?.characters.cache
                .get(context.characterId)?.vendors.cache.get(context.vendorHash)?.instancedItems
        scope = 'vendorHash'
    } else if ('characterId' in response) {
        scope = 'character'
        context.characterId = response.characterId
        instancedItems =
            client.destinyProfiles.cache.get(context.membershipId)?.characters.cache
                .get(context.characterId)?.instancedItems
    } else {
        scope = 'profile';
        instancedItems =
            client.destinyProfiles.cache.get(context.membershipId)?.instancedItems
    }
    if ('item' in response) {
        context.itemHash = response.item.data?.itemHash;
        context.itemInstanceId = response.item.data?.itemInstanceId;
        patchDestinyItemComponent(response.item.data, client, context, scope)
    }
    let data = {};
    if ('instance' in response && response.instance.data !== undefined) {
        data.instance = response.instance.data;
    }
    if ('perks' in response && response.perks.data !== undefined) {
        data.perks = response.perks.data;
    }
    if ('stats' in response && response.stats.data !== undefined) {
        data.stats = response.stats.data;
    }
    if ('objectives' in response && response.objectives.data !== undefined) {
        data.objectives = response.objectives.data;
    }
    if ('plugObjectives' in response && response.plugObjectives.data !== undefined) {
        data.plugObjectives = response.plugObjectives.data;
    }
    if ('renderData' in response && response.renderData.data !== undefined) {
        data.renderData = response.renderData.data;
    }
    if ('reusablePlugs' in response && response.reusablePlugs.data !== undefined) {
        data.reusablePlugs = response.reusablePlugs.data;
    }
    if ('sockets' in response && response.sockets.data !== undefined) {
        data.sockets = response.sockets.data;
    }
    if ('talentGrid' in response && response.talentGrid.data !== undefined) {
        data.talentGrid = response.talentGrid.data;
    }
    instancedItems._update(context.itemInstanceId, data, context)
}

/**
 *
 * @param {Schemas.DestinyVendorReceiptsComponent} component
 * @param {DestinyAPIClient} client
 * @param {DestinyResponseContext} context
 * @return void
 */
function patchDestinyVendorReceiptsComponent(component, client, context) {
    client.destinyProfiles._update(context.membershipId, {vendorReceipts: component.receipts},
        context)
}

/**
 *
 * @param {Schemas.DestinyInventoryComponent} component
 * @param {DestinyAPIClient} client
 * @param {DestinyResponseContext} context
 * @param {DestinyResponseScope} scope
 * @return void
 */
function patchDestinyInventoryComponent(component, client, context, scope) {
    component.items.forEach(item => {
        patchDestinyItemComponent(item, client, context, scope)
    });
}

/**
 *
 * @param {Schemas.DestinyItemComponent} component
 * @param {DestinyAPIClient} client
 * @param {DestinyResponseContext} context
 * @param {DestinyResponseScope} scope
 * @return void
 */
function patchDestinyItemComponent(component, client, context, scope) {
    if (scope === 'profile') {
        if (component.itemInstanceId) {
            client.destinyProfiles.cache.get(context.membershipId)?.instancedItems
                ._update(component.itemInstanceId, component, context)
        } else if (component.itemHash) {
            client.destinyProfiles.cache.get(context.membershipId)?.uninstancedItems
                ._update(component.itemHash, component, context)
        } else {
            throw new InvalidComponentsError(
                'The requested item had no itemHash or instanceId. All item requests should'
                + 'contain the component `DestinyComponentType.ItemCommonData`');
        }
    } else if (scope === 'character') {
        if (component.itemInstanceId) {
            client.destinyProfiles.cache.get(context.membershipId)?.characters.cache
                .get(context.characterId)?.instancedItems
                ._update(component.itemInstanceId, component, context)
        } else if (component.itemHash) {
            client.destinyProfiles.cache.get(context.membershipId)?.characters.cache
                .get(context.characterId)?.uninstancedItems
                ._update(component.itemHash, component, context)
        } else {
            throw new InvalidComponentsError(
                'The requested item had no itemHash or instanceId. All item requests should'
                + 'contain the component `DestinyComponentType.ItemCommonData`');
        }
    } else if (scope === 'vendor') {
        if (component.itemInstanceId) {
            client.destinyProfiles.cache.get(context.membershipId)?.characters.cache
                .get(context.characterId)?.vendors.cache.get(context.vendorHash)?.instancedItems
                ._update(component.itemInstanceId, component, context)
        } else {
            throw new InvalidComponentsError(
                'The requested item had no itemHash or instanceId. All item requests should'
                + 'contain the component `DestinyComponentType.ItemCommonData`');
        }
    } else {
        throw new Error('invalid scope')
    }
}

/**
 *
 * @param {Schemas.DestinyPlatformSilverComponent} component
 * @param {DestinyAPIClient} client
 * @param {DestinyResponseContext} context
 * @return void
 */
function patchDestinyPlatformSilverComponent(component, client, context) {
    Object.keys(component.platformSilver).forEach(key => {
        patchDestinyItemComponent(component.platformSilver[key], client, context, 'profile');
    })
}

/**
 *
 * @param {Schemas.DestinyProfileComponent} component
 * @param {DestinyAPIClient} client
 * @param {DestinyResponseContext} context
 * @return void
 */
function patchDestinyProfileComponent(component, client, context) {
    client.destinyProfiles._update(context.membershipId, component, context);
    patchUserInfoCard(component.userInfo, client, context);
}

/**
 *
 * @param {Schemas.UserInfoCard} card
 * @param {DestinyAPIClient} client
 * @param {{}} context
 * @return void
 */
function patchUserInfoCard(card, client, context) {
    // this data is static 99.9999% of the time
    client.bungieProfiles._update(card.membershipId, card, context)
}

/**
 *
 * @param {Schemas.DestinyKiosksComponent} component
 * @param {DestinyAPIClient} client
 * @param {DestinyResponseContext} context
 * @param {DestinyResponseScope} scope
 * @return void
 */
function patchDestinyKiosksComponent(component, client, context, scope) {
    if (scope === 'character') {
        client.destinyProfiles.cache.get(context.membershipId)
            ?.characters._update(context.characterId, {kioskItems: component.kioskItems}, context);
    } else if (scope === 'profile') {
        client.destinyProfiles._update(context.membershipId, {kioskItems: component.kioskItems},
            context);
    } else {
        throw new Error('invalid scope')
    }
}

/**
 *
 * @param {Schemas.DestinyPlugSetsComponent} component
 * @param {DestinyAPIClient} client
 * @param {DestinyResponseContext} context
 * @param {DestinyResponseScope} scope
 * @return void
 */
function patchDestinyPlugSetsComponent(component, client, context, scope) {
    if (scope === 'character') {
        client.destinyProfiles.cache.get(context.membershipId)?.characters
            ._update(context.characterId, component, context);
    } else if (scope === 'profile') {
        client.destinyProfiles._update(context.membershipId, component, context);
    } else {
        throw new Error('invalid scope')
    }
}

/**
 *
 * @param {Schemas.DestinyProfileProgressionComponent} component
 * @param {DestinyAPIClient} client
 * @param {DestinyResponseContext} context
 * @return void
 */
function patchDestinyProfileProgressionComponent(component, client, context) {
    client.destinyProfiles._update(context.membershipId, component, context)
}

/**
 *
 * @param {Schemas.DestinyPresentationNodesComponent} component
 * @param {DestinyAPIClient} client
 * @param {DestinyResponseContext} context
 * @param {DestinyResponseScope} scope
 * @return void
 */
function patchDestinyPresentationNodesComponent(component, client, context, scope) {
    if (scope === 'profile') {
        client.destinyProfiles._update(context.membershipId, component, context)
    } else if (scope === 'character') {
        client.destinyProfiles.cache.get(context.membershipId)?.characters
            ._update(context.characterId, component, context)
    } else {
        throw new Error('invalid scope')
    }
}

/**
 *
 * @param {Schemas.DestinyProfileRecordsComponent} component
 * @param {DestinyAPIClient} client
 * @param {DestinyResponseContext} context
 * @return void
 */
function patchDestinyProfileRecordsComponent(component, client, context) {
    client.destinyProfiles._update(context.membershipId, {records: component}, context);
}

/**
 *
 * @param {Schemas.DestinyProfileCollectiblesComponent} component
 * @param {DestinyAPIClient} client
 * @param {DestinyResponseContext} context
 * @return void
 */
function patchDestinyProfileCollectiblesComponent(component, client, context) {
    client.destinyProfiles._update(context.membershipId, {collectibles: component}, context);
}

/**
 *
 * @param {Schemas.DestinyProfileTransitoryComponent} component
 * @param {DestinyAPIClient} client
 * @param {DestinyResponseContext} context
 * @return void
 */
function patchDestinyProfileTransitoryComponent(component, client, context) {
    client.destinyProfiles._update(context.membershipId, {transitoryData: component}, context);
}

/**
 *
 * @param {Schemas.DestinyMetricsComponent} component
 * @param {DestinyAPIClient} client
 * @param {DestinyResponseContext} context
 * @return void
 */
function patchDestinyMetricsComponent(component, client, context) {
    client.destinyProfiles._update(context.membershipId, {metrics: component}, context);
}

/**
 *
 * @param {Schemas.DestinyStringVariablesComponent} component
 * @param {DestinyAPIClient} client
 * @param {DestinyResponseContext} context
 * @param {DestinyResponseScope} scope
 * @return void
 */
function patchDestinyStringVariablesComponent(component, client, context, scope) {
    if (scope === 'profile') {
        client.destinyProfiles._update(context.membershipId, {stringVariables: component}, context)
    } else if (scope === 'character') {
        client.destinyProfiles.cache.get(context.membershipId)?.characters
            ._update(context.characterId, {stringVariables: component.integerValuesByHash}, context)
    } else if (scope === 'vendor') {
        client.destinyProfiles.cache.get(context.membershipId)?.characters.cache
            .get(context.characterId)?.vendors
            ._update(context.vendorHash, {stringVariables: component.integerValuesByHash}, context)
    } else {
        throw new Error('invalid scope')
    }
}

/**
 *
 * @param {Schemas.DestinyCurrenciesComponent} component
 * @param {DestinyAPIClient} client
 * @param {DestinyResponseContext} context
 * @param {DestinyResponseScope} scope
 * @return void
 */
function patchDestinyCurrenciesComponent(component, client, context, scope) {
    if (scope === 'profile') {
        client.destinyProfiles._update(context.membershipId, {currencies: component.itemQuantities},
            context)
    } else if (scope === 'character') {
        client.destinyProfiles.cache.get(context.membershipId)?.characters
            ._update(context.characterId, {currencies: component.itemQuantities}, context)
    } else if (scope === 'vendor') {
        client.destinyProfiles.cache.get(context.membershipId)?.characters.cache
            .get(context.characterId)?.vendors
            ._update(context.vendorHash, {currencies: component.itemQuantities}, context)
    } else {
        throw new Error('invalid scope')
    }
}

/**
 *
 * @param {Schemas.DestinyCharacterComponent} component
 * @param {DestinyAPIClient} client
 * @param {DestinyResponseContext} context
 * @return void
 */
function patchDestinyCharacterComponent(component, client, context) {
    client.destinyProfiles.cache.get(context.membershipId)?.characters
        ._update(context.characterId, component, context)
}

/**
 *
 * @param {Schemas.DestinyCharacterProgressionComponent} component
 * @param {DestinyAPIClient} client
 * @param {DestinyResponseContext} context
 * @return void
 */
function patchDestinyCharacterProgressionComponent(component, client, context) {
    client.destinyProfiles.cache.get(context.membershipId)?.characters
        ._update(context.characterId, {progression: component}, context)
}

/**
 *
 * @param {Schemas.DestinyCharacterRenderComponent} component
 * @param {DestinyAPIClient} client
 * @param {DestinyResponseContext} context
 * @return void
 */
function patchDestinyCharacterRenderComponent(component, client, context) {
    client.destinyProfiles.cache.get(context.membershipId)?.characters
        ._update(context.characterId, {renderData: component}, context)
}

/**
 *
 * @param {Schemas.DestinyCharacterActivitiesComponent} component
 * @param {DestinyAPIClient} client
 * @param {DestinyResponseContext} context
 * @return void
 */
function patchDestinyCharacterActivitiesComponent(component, client, context) {
    client.destinyProfiles.cache.get(context.membershipId)?.characters
        ._update(context.characterId, {activities: component}, context)
}

/**
 *
 * @param {Schemas.DestinyCharacterRecordsComponent} component
 * @param {DestinyAPIClient} client
 * @param {DestinyResponseContext} context
 * @return void
 */
function patchDestinyCharacterRecordsComponent(component, client, context) {
    client.destinyProfiles.cache.get(context.membershipId)?.characters
        ._update(context.characterId, {records: component}, context)
}

/**
 *
 * @param {Schemas.DestinyCollectiblesComponent} component
 * @param {DestinyAPIClient} client
 * @param {DestinyResponseContext} context
 * @param {DestinyResponseScope} scope
 * @return void
 */
function patchDestinyCollectiblesComponent(component, client, context, scope) {
    // note this component currently only is used for characters
    if (scope === 'character') {
        client.destinyProfiles.cache.get(context.membershipId)?.characters
            ._update(context.characterId, {collectibles: component}, context)
    } else {
        throw new Error('invalid scope')
    }
}

/**
 *
 * @param {Schemas.DestinyCraftablesComponent} component
 * @param {DestinyAPIClient} client
 * @param {DestinyResponseContext} context
 * @param {DestinyResponseScope} scope
 * @return void
 */
function patchDestinyCraftablesComponent(component, client, context, scope) {
    // note this component currently only is used for characters
    if (scope === 'character') {
        client.destinyProfiles.cache.get(context.membershipId)?.characters
            ._update(context.characterId, {craftables: component}, context)
    } else {
        throw new Error('invalid scope')
    }
}

/**
 *
 * @param {Schemas.DestinyBaseItemComponentSetOfuint32} component
 * @param {DestinyAPIClient} client
 * @param {DestinyResponseContext} context
 * @param {DestinyResponseScope} scope
 * @return void
 */
function patchDestinyBaseItemComponentSetKeyedByHash(component, client, context, scope) {
    if (scope === 'profile') {
        if (component.perks?.data) {
            Object.keys(component.perks.data).forEach(key => {
                const perks = component.perks.data[key]
                client.destinyProfiles.cache.get(context.membershipId)?.uninstancedItems
                    ._update(key, perks, context)
            })
        }
        if (component.objectives?.data) {
            Object.keys(component.objectives.data).forEach(key => {
                const objectiveComponent = component.objectives.data[key]
                client.destinyProfiles.cache.get(context.membershipId)?.uninstancedItems
                    ._update(key, objectiveComponent, context)
            })
        }
    } else if (scope === 'character') {
        if (component.perks?.data) {
            Object.keys(component.perks.data).forEach(key => {
                const perks = component.perks.data[key]
                client.destinyProfiles.cache.get(context.membershipId)?.characters.cache
                    .get(context.characterId)?.uninstancedItems._update(key, perks, context)
            })
        }
        if (component.objectives?.data) {
            Object.keys(component.objectives.data).forEach(key => {
                const objectiveComponent = component.objectives.data[key]
                client.destinyProfiles.cache.get(context.membershipId)?.characters.cache
                    .get(context.characterId)?.uninstancedItems
                    ._update(key, objectiveComponent, context)
            })
        }
    } else {
        throw new Error('invalid scope')
    }
}

/**
 *
 * @param {Schemas.DestinyItemComponentSetOfint32} component
 * @param {DestinyAPIClient} client
 * @param {DestinyResponseContext} context
 * @return void
 */
function patchDestinyItemComponentSetKeyedByVendor(component, client, context) {
    /**
     * @type {VendorInstancedItemManager}
     */
    const instancedItems = client.destinyProfiles.cache.get(context.membershipId)?.characters.cache
        .get(context.characterId)?.vendors.cache.get(context.vendorHash)?.instancedItems;
    /**
     * @type string
     */
    if (!instancedItems) throw new Error('not cached');
    if (component.perks.data) {
        Object.keys(component.perks.data).forEach(key => {
            const perks = component.perks.data[key]
            instancedItems._update(key, perks, context)
        })
    }
    if (component.objectives.data) {
        Object.keys(component.objectives.data).forEach(key => {
            const objectives = component.objectives.data[key]
            instancedItems._update(key, objectives, context)
        })
    }
    if (component.renderData.data) {
        Object.keys(component.renderData.data).forEach(key => {
            const renderData = component.renderData.data[key]
            instancedItems._update(key, renderData, context)
        })
    }
    if (component.stats.data) {
        Object.keys(component.stats.data).forEach(key => {
            const stats = component.stats.data[key]
            instancedItems._update(key, stats, context)
        })
    }
    if (component.sockets.data) {
        Object.keys(component.sockets.data).forEach(key => {
            const sockets = component.sockets.data[key]
            instancedItems._update(key, sockets, context)
        })
    }
    if (component.instances.data) {
        Object.keys(component.instances.data).forEach(key => {
            const instance = component.instances.data[key]
            instancedItems._update(key, instance, context)
        })
    }
    if (component.plugStates?.data) {
        Object.keys(component.plugStates.data).forEach(key => {
            const plugStates = component.plugStates.data[key]
            instancedItems._update(key, plugStates, context)
        })
    }
    if (component.reusablePlugs?.data) {
        Object.keys(component.reusablePlugs.data).forEach(key => {
            const reusablePlugs = component.reusablePlugs.data[key]
            instancedItems._update(key, reusablePlugs, context)
        })
    }
    if (component.talentGrids?.data) {
        Object.keys(component.talentGrids.data).forEach(key => {
            const talentGrid = component.talentGrids.data[key]
            instancedItems._update(key, talentGrid, context)
        })
    }
}

/**
 *
 * @param {Schemas.DestinyItemComponentSetOfint64} component
 * @param {DestinyAPIClient} client
 * @param {DestinyResponseContext} context
 * @param {DestinyResponseScope} scope
 * @return void
 */
function patchDestinyItemComponentSetKeyedByInstance(component, client, context, scope) {
    /**
     * @type {InstancedItemManager}
     */
    let instancedItems
    if (scope === 'profile') {
        instancedItems = client.destinyProfiles.cache.get(context.membershipId)?.instancedItems;
    } else if (scope === 'character') {
        instancedItems =
            client.destinyProfiles.cache.get(context.membershipId)?.characters.cache
                .get(context.characterId)?.instancedItems;
    } else {
        throw new Error('invalid scope');
    }
    if (!instancedItems) throw new Error('not cached');

    if (component.perks?.data) {
        Object.keys(component.perks.data).forEach(key => {
            const perks = component.perks.data[key]
            instancedItems._update(key, perks, context)
        })
    }
    if (component.objectives?.data) {
        Object.keys(component.objectives.data).forEach(key => {
            const objectives = component.objectives.data[key]
            instancedItems._update(key, objectives, context)
        })
    }
    if (component.renderData?.data) {
        Object.keys(component.renderData.data).forEach(key => {
            const renderData = component.renderData.data[key]
            instancedItems._update(key, renderData, context)
        })
    }
    if (component.stats?.data) {
        Object.keys(component.stats.data).forEach(key => {
            const stats = component.stats.data[key]
            instancedItems._update(key, stats, context)
        })
    }
    if (component.sockets?.data) {
        Object.keys(component.sockets.data).forEach(key => {
            const sockets = component.sockets.data[key]
            instancedItems._update(key, sockets, context)
        })
    }
    if (component.instances?.data) {
        Object.keys(component.instances.data).forEach(key => {
            const instance = component.instances.data[key]
            instancedItems._update(key, instance, context)
        })
    }
    if (component.plugStates?.data) {
        Object.keys(component.plugStates.data).forEach(key => {
            const plugStates = component.plugStates.data[key]
            instancedItems._update(key, plugStates, context)
        })
    }
    if (component.reusablePlugs?.data) {
        Object.keys(component.reusablePlugs.data).forEach(key => {
            const reusablePlugs = component.reusablePlugs.data[key]
            instancedItems._update(key, reusablePlugs, context)
        })
    }
    if (component.talentGrids?.data) {
        Object.keys(component.talentGrids.data).forEach(key => {
            const talentGrid = component.talentGrids.data[key]
            instancedItems._update(key, talentGrid, context)
        })
    }
}