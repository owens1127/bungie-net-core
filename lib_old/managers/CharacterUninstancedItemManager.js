import { getProfile } from 'bungie-api-typedef/endpoints/Destiny2/index.js';
import { DestinyComponentType } from 'bungie-api-typedef/schemas';
import { patchDestinyProfileResponse } from '../patcher.js';
import { rateLimitedRequest } from '../rate-limiter.js';
import { UninstancedItem } from '../structures/UninstancedItem.js';
import { UninstancedItemManager } from './UninstancedItemManager.js';

/**
 * Manages API methods for Instanced Items and stores their cache
 * @extends {UninstancedItemManager}
 */
export class CharacterUninstancedItemManager extends UninstancedItemManager {
    constructor(client, membershipId, membershipType, characterId, items) {
        super(client, membershipId, membershipType, items);

        this.characterId = characterId;
    }

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
            membershipType: this.membershipType,
            characterId: this.characterId
        }
        patchDestinyProfileResponse(res.Response, this.client, context);
        return await this.client._definitionsQueue.process().then(() => {
            return Promise.resolve(this.cache.get(itemHash));
        });
    }

    _update(id, data, context) {
        super._update(id, data, context);
    }

    /**
     * @return {UninstancedItem[]}
     */
    get cacheArray() {
        super.cacheArray();
    }
}