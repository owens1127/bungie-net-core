import { getProfile } from 'bungie-api-typedef/endpoints/Destiny2/index.js';
import { BungieMembershipType, DestinyComponentType } from 'bungie-api-typedef/schemas';
import { patchDestinyProfileResponse } from '../patcher.js';
import { rateLimitedRequest } from '../rate-limiter.js';
import { DestinyProfile } from '../structures/DestinyProfile.js';
import { BaseManager } from './BaseManager.js';

/**
 *
 * @type {DestinyComponentType[]}
 */
const ProfileComponents = [
    DestinyComponentType.Profiles,
    DestinyComponentType.VendorReceipts,
    DestinyComponentType.ProfileInventories,
    DestinyComponentType.ProfileCurrencies,
    DestinyComponentType.Kiosks,
    DestinyComponentType.ItemPlugStates,
    DestinyComponentType.ItemSockets,
    DestinyComponentType.ProfileProgression,
    DestinyComponentType.PresentationNodes,
    DestinyComponentType.Records,
    DestinyComponentType.Collectibles,
    DestinyComponentType.Transitory,
    DestinyComponentType.Metrics,
    DestinyComponentType.StringVariables,
    DestinyComponentType.PlatformSilver,
    DestinyComponentType.Characters
]

/**
 * Manages API methods for Profiles and stores their cache.
 * @extends {BaseManager}
 */
export class DestinyProfileManager extends BaseManager {
    constructor(client, profiles) {
        super(client);

        if (profiles) {
            profiles.forEach(profile => {
                if (profile instanceof DestinyProfile) {
                    this.cache.set(profile.membershipId, profile)
                }
            });
        }
    }

    /**
     * The cache of this Manager
     * @type {Map<string, DestinyProfile>}
     * @name DestinyProfileManager#cache
     */

    /**
     * Data that resolves to give a DestinyProfile object. This can be:
     * * A DestinyProfile object
     * * An membership id string
     * @typedef {DestinyProfile|Character|InstancedItem|Vendor|string} DestinyProfileResolvable
     */

    /**
     * Resolves a ProfileResolvable to a DestinyProfile object.
     * @method resolve
     * @memberof BungieProfileManager
     * @instance
     * @param {DestinyProfileResolvable} profileResolvable The profile resolvable to identify
     * @returns {?DestinyProfile}
     */
    resolve(profileResolvable) {
        if (profileResolvable.membershipId) {
            return super.resolve(profileResolvable.membershipId);
        }
        return super.resolve(profileResolvable);
    }

    /**
     * Fetches one profile from Bungie
     * @param {DestinyProfileResolvable} resolvable The character to fetch
     * @param {DestinyComponentType[]?} components=ProfileComponents
     * @returns {Promise<DestinyProfile>}
     */
    async fetch(resolvable, components = ProfileComponents) {
        const profile = this.resolve(resolvable ?? {})
        let destinyMembershipId, membershipType;
        if (profile) {
            destinyMembershipId = profile.membershipId;
            membershipType = profile.membershipType;
        } else if (typeof resolvable !== 'string') {
            return Promise.reject(new ReferenceError('Unable to resolve the profile'))
        } else {
            destinyMembershipId = resolvable
            membershipType = BungieMembershipType.All;
        }

        const res = await getProfile(rateLimitedRequest.bind(this.client), {
            membershipType,
            destinyMembershipId,
            components
        });
        const context = {
            membershipId: destinyMembershipId,
            membershipType: res.Response.profile.data.userInfo.membershipType
        }
        patchDestinyProfileResponse(res.Response, this.client, context);
        return await this.client._definitionsQueue.process().then(() => {
            return Promise.resolve(this.cache.get(destinyMembershipId));
        });
    }

    _update(id, data, context) {
        if (!this.cache.has(id)) {
            this.cache.set(id,
                new DestinyProfile(this.client, {membershipId: id, ...data, ...context}))
        } else {
            super._update(id, data, context)
        }
    }

    /**
     * @return {DestinyProfile[]}
     */
    get cacheArray() {
        const arr = [];
        this.cache.forEach(value => {
            arr.push(value)
        });
        return arr;
    }
}