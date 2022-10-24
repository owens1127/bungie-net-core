import { getItem } from 'bungie-api-typedef/endpoints/Destiny2'
import { DestinyComponentType } from 'bungie-api-typedef/schemas';
import { patchDestinyItemResponse } from '../patcher.js';
import { rateLimitedRequest } from '../rate-limiter.js';
import { InstancedItem } from '../structures/InstancedItem.js';
import { BaseManager } from './BaseManager.js';

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
 * @extends {BaseManager}
 */
export class InstancedItemManager extends BaseManager {
    constructor(client, membershipId, membershipType, items) {
        super(client);

        this.membershipId = membershipId;
        this.membershipType = membershipType;

        if (items) {
            items.forEach(item => {
                if (item instanceof InstancedItem) {
                    this.cache.set(item.itemInstanceId, item)
                }
            });
        }
    }

    /**
     * The cache of this Manager
     * @type {Map<string, InstancedItem>}
     * @name InstancedItemManager#cache
     */

    /**
     * Data that resolves to give a InstancedItem object. This can be:
     * * A InstancedItem object
     * * An InstancedItem itemInstanceId string
     * @typedef {InstancedItem|string|number} InstancedItemResolvable
     */

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
        if (instancedItemResolvable.itemInstanceId) {
            return super.resolve(instancedItemResolvable.itemInstanceId);
        }
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
            itemInstanceId
        }
        patchDestinyItemResponse(res.Response, this.client, context);
        return await this.client._definitionsQueue.process().then(() => {
            return Promise.resolve(this.cache.get(itemInstanceId));
        });
    }

    _update(id, data, context) {
        if (!this.cache.has(id)) {
            this.cache.set(id,
                new InstancedItem(this.client, {itemInstanceId: id, ...data, ...context}))
        } else {
            super._update(id, data, context)
        }
    }

    /**
     * @return {InstancedItem[]}
     */
    get cacheArray() {
        const arr = [];
        this.cache.forEach(value => {
            arr.push(value)
        });
        return arr;
    }
}