import { getItem } from 'bungie-api-typedef/endpoints/Destiny2'
import { DestinyComponentType } from 'bungie-api-typedef/schemas';
import { patchDestinyItemResponse } from '../patcher.js';
import { rateLimitedRequest } from '../rate-limiter.js';
import { InstancedItem } from '../structures/InstancedItem.js';
import { InstancedItemManager } from './InstancedItemManager.js';

/**
 *
 * @type {DestinyComponentType[]}
 */
const InstancedItemComponents = [
    DestinyComponentType.ItemCommonData,
    DestinyComponentType.ItemInstances,
    DestinyComponentType.ItemObjectives,
    DestinyComponentType.ItemPerks,
    DestinyComponentType.ItemRenderData,
    DestinyComponentType.ItemStats,
    DestinyComponentType.ItemTalentGrids,
    DestinyComponentType.ItemSockets,
    DestinyComponentType.ItemReusablePlugs,
    DestinyComponentType.ItemPlugObjectives,
    DestinyComponentType.ItemPlugStates
]

/**
 * Manages API methods for Instanced Items and stores their cache
 * @extends {InstancedItemManager}
 */
export class CharacterInstancedItemManager extends InstancedItemManager {
    constructor(client, membershipId, membershipType, characterId, items) {
        super(client, membershipId, membershipType, items);

        this.characterId = characterId;
    }

    /**
     * Resolves a InstancedItemResolvable to a InstancedItem object.
     * @method resolve
     * @memberof InstancedItemManager
     * @instance
     * @param {InstancedItemResolvable} instancedItemResolvable The InstancedItem resolvable to
     *     identify
     * @returns {?InstancedItem}
     */
    resolve(instancedItemResolvable) {
        return super.resolve(instancedItemResolvable);
    }

    /**
     * Fetches one InstancedItem from Bungie
     * @param {InstancedItemResolvable} resolvable The InstancedItem to fetch
     * @param {DestinyComponentType[]?} components=CharacterComponents
     * @returns {Promise<InstancedItem>}
     */
    async fetch(resolvable, components = InstancedItemComponents) {
        const item = this.resolve(resolvable)
        let itemInstanceId;
        if (item) {
            itemInstanceId = item.itemInstanceId;
        } else if (typeof resolvable === 'string' || typeof resolvable === 'number') {
            itemInstanceId = resolvable;
        } else {
            return Promise.reject(new ReferenceError('Unable to resolve the item'))
        }
        const res = await getItem(rateLimitedRequest.bind(this.client), {
            destinyMembershipId: this.membershipId,
            itemInstanceId,
            membershipType: this.membershipType,
            components
        })
        const context = {
            membershipId: this.membershipId,
            membershipType: this.membershipType,
            characterId: this.characterId,
            itemInstanceId
        }
        patchDestinyItemResponse(res.Response, this.client, context);
        return await this.client._definitionsQueue.process().then(() => {
            return Promise.resolve(this.cache.get(itemInstanceId));
        });
    }

    _update(id, data, context) {
        super._update(id, data, context);
    }

    /**
     * @return {InstancedItem[]}
     */
    get cacheArray() {
        super.cacheArray();
    }
}