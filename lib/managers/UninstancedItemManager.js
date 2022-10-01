import { getProfile } from 'bungie-api-typedef/endpoints/Destiny2/index.js';
import { DestinyComponentType } from 'bungie-api-typedef/schemas';
import { patchDestinyProfileResponse } from '../patcher.js';
import { rateLimitedRequest } from '../rate-limiter.js';
import { UninstancedItem } from '../structures/UninstancedItem.js';
import { BaseManager } from './BaseManager.js';

/**
 * Manages API methods for Instanced Items and stores their cache
 * @extends {BaseManager}
 */
export class UninstancedItemManager extends BaseManager {
    constructor(client, membershipId, membershipType, items) {
        super(client);

        this.membershipId = membershipId;
        this.membershipType = membershipType;

        if (items) {
            items.forEach(item => {
                if (item instanceof UninstancedItem) {
                    this.cache.set(item.itemHash, item)
                }
            });
        }
    }

    /**
     * The cache of this Manager
     * @type {Map<string, UninstancedItem>}
     * @name UninstancedItemManager#cache
     */

    /**
     * Data that resolves to give a UninstancedItem object. This can be:
     * * A UninstancedItem object
     * * An UninstancedItem itemHash string
     * @typedef {UninstancedItem|string|number} UninstancedItemResolvable
     */

    /**
     * Resolves a UninstancedItemResolvable to a UninstancedItem object.
     * @method resolve
     * @memberof UninstancedItemManager
     * @instance
     * @param {UninstancedItemResolvable} uninstancedItemResolvable The UninstancedItem resolvable
     *     to identify
     * @returns {?UninstancedItem}
     */
    resolve(uninstancedItemResolvable) {
        if (uninstancedItemResolvable.itemHash) {
            return super.resolve(uninstancedItemResolvable.itemHash);
        }
        return super.resolve(uninstancedItemResolvable);
    }

    /**
     * Fetches one UninstancedItem from Bungie
     * @param {UninstancedItemResolvable} resolvable The UninstancedItem to fetch
     * @returns {Promise<UninstancedItem>}
     */
    async fetch(resolvable) {
        const item = this.resolve(resolvable)
        let itemHash;
        if (item) {
            itemHash = item.itemHash;
        } else if (typeof resolvable === 'string' || typeof resolvable === 'number') {
            itemHash = resolvable;
        } else {
            return Promise.reject(new ReferenceError('Unable to resolve the item'))
        }
        const res = await getProfile(rateLimitedRequest.bind(this.client), {
            destinyMembershipId: this.membershipId,
            membershipType: this.membershipType,
            components: [DestinyComponentType.ItemCommonData]
        });
        const context = {
            membershipId: this.membershipId,
            membershipType: this.membershipType
        }
        patchDestinyProfileResponse(res.Response, this.client, context);
        return await this.client._definitionsQueue.process().then(() => {
            return Promise.resolve(this.cache.get(itemHash));
        });
    }

    _update(id, data, context) {
        if (!this.cache.has(id)) {
            this.cache.set(id,
                new UninstancedItem(this.client, {itemHash: id, ...data, ...context}))
        } else {
            super._update(id, data, context)
        }
    }

    /**
     * @return {UninstancedItem[]}
     */
    get cacheArray() {
        const arr = [];
        this.cache.forEach(value => {
            arr.push(value)
        });
        return arr;
    }
}