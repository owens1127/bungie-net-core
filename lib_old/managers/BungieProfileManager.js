import { getLinkedProfiles } from 'bungie-api-typedef/endpoints/Destiny2';
import { BungieMembershipType } from 'bungie-api-typedef/schemas';
import { patchDestinyLinkedProfilesResponse } from '../patcher.js';
import { rateLimitedRequest } from '../rate-limiter.js';
import { BungieProfile } from '../structures/BungieProfile.js';
import { BaseManager } from './BaseManager.js';

/**
 * Manages API methods for Profiles and stores their cache.
 * @extends {BaseManager}
 */

export class BungieProfileManager extends BaseManager {
    constructor(client, profiles) {
        super(client);

        if (profiles) {
            profiles.forEach(profile => {
                if (profile instanceof BungieProfile) {
                    this.cache.set(profile.membershipId, profile)
                }
            });
        }
    }

    /**
     * The cache of this Manager
     * @type {Map<string, BungieProfile>}
     * @name BungieProfileManager#cache
     */

    /**
     * Data that resolves to give a BaseProfile object. This can be:
     * * A DestinyProfile object
     * * An membership id string
     * @typedef {BungieProfile|DestinyProfileResolvable|string} BungieProfileResolvable
     */

    /**
     * Resolves a ProfileResolvable to a DestinyProfile object.
     * @method resolve
     * @memberof BungieProfileManager
     * @instance
     * @param {BungieProfileResolvable} profileResolvable The profile resolvable to identify
     * @returns {?BungieProfile}
     */
    resolve(profileResolvable) {
        if (profileResolvable.membershipId) {
            return super.resolve(profileResolvable.membershipId);
        }
        return super.resolve(profileResolvable);
    }

    /**
     * Fetches one profile from Bungie
     * @param {BungieProfileResolvable} resolvable The character to fetch
     * @returns {Promise<BungieProfile>}
     */
    async fetch(resolvable) {
        let membershipId;
        const profile = this.resolve(resolvable ?? {})
        if (profile) {
            membershipId = profile.membershipId;
        } else if (typeof resolvable !== 'string') {
            return Promise.reject(new ReferenceError('Unable to resolve the profile'))
        } else {
            membershipId = resolvable;
        }
        const res = await getLinkedProfiles(rateLimitedRequest.bind(this.client), {
            membershipId,
            membershipType: BungieMembershipType.All,
            getAllMemberships: true
        });
        const context = {
            requestMembershipType: BungieMembershipType.All,
            requestMembershipId: membershipId
        }
        patchDestinyLinkedProfilesResponse(res.Response, this.client, context);
        return await this.client._definitionsQueue.process().then(() => {
            return Promise.resolve(this.cache.get(res.Response.bnetMembership.membershipId));
        });
    }

    _update(id, data, context) {
        if (data.membershipType !== BungieMembershipType.BungieNext) {
            return;
        }
        if (!this.cache.has(id)) {
            this.cache.set(id,
                new BungieProfile(this.client, {membershipId: id, ...data, ...context}))
        } else {
            super._update(id, data, context)
        }
    }

    /**
     * @return {BungieProfile[]}
     */
    get cacheAsArray() {
        const arr = [];
        this.cache.forEach(value => {
            arr.push(value)
        });
        return arr;
    }
}