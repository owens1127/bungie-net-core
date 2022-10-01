import { getVendor } from 'bungie-api-typedef/endpoints/Destiny2/index.js';
import { DestinyComponentType } from 'bungie-api-typedef/schemas';
import { patchDestinyVendorResponse } from '../patcher.js';
import { rateLimitedRequest } from '../rate-limiter.js';
import { Vendor } from '../structures/Vendor.js';
import { BaseManager } from './BaseManager.js';

/**
 * Manages API methods for Vendors and stores their cache
 * @extends {BaseManager}
 */
export class VendorManager extends BaseManager {
    /**
     *
     * @type {DestinyComponentType[]}
     */
    static VendorComponents = [
        DestinyComponentType.Vendors,
        DestinyComponentType.VendorCategories,
        DestinyComponentType.VendorSales,
        DestinyComponentType.CurrencyLookups,
        DestinyComponentType.StringVariables
    ]

    constructor(client, membershipId, membershipType, characterId, vendors) {
        super(client);

        this.membershipId = membershipId;
        this.membershipType = membershipType;
        this.characterId = characterId;

        if (vendors) {
            vendors.forEach(vendor => {
                if (vendor instanceof Vendor) {
                    this.cache.set(vendor.vendorHash, vendor)
                }
            });
        }
    }

    /**
     * The cache of this Manager
     * @type {Map<string, Vendor>}
     * @name VendorManager#cache
     */

    /**
     * Data that resolves to give a Vendor object. This can be:
     * * A Vendor object
     * * An Vendor vendorHash string
     * @typedef {Vendor|string|number} VendorResolvable
     */

    /**
     * Resolves a VendorResolvable to a Vendor object.
     * @method resolve
     * @memberof VendorManager
     * @instance
     * @param {VendorResolvable} VendorResolvable The Vendor resolvable
     *     to identify
     * @returns {?Vendor}
     */
    resolve(VendorResolvable) {
        if (VendorResolvable.vendorHash) {
            return super.resolve(VendorResolvable.vendorHash);
        }
        return super.resolve(VendorResolvable);
    }

    /**
     * Fetches one Vendor from Bungie
     * @param {VendorResolvable} resolvable The Vendor to fetch
     * @param {DestinyComponentType[]?} components
     * @returns {Promise<Vendor>}
     */
    async fetch(resolvable, components = VendorManager.VendorComponents) {
        const vendor = this.resolve(resolvable)
        let vendorHash;
        if (vendor) {
            vendorHash = vendor.vendorHash;
        } else if (typeof resolvable === 'string' || typeof resolvable === 'number') {
            vendorHash = resolvable;
        } else {
            return Promise.reject(new ReferenceError('Unable to resolve the vendor'))
        }
        const res = await getVendor(rateLimitedRequest.bind(this.client), {
            destinyMembershipId: this.membershipId,
            membershipType: this.membershipType,
            characterId: this.characterId,
            vendorHash,
            components: components
        });
        const context = {
            membershipId: this.membershipId,
            membershipType: this.membershipType,
            characterId: this.characterId,
            vendorHash
        }
        patchDestinyVendorResponse(res.Response, this.client, context);
        return await this.client._definitionsQueue.process().then(() => {
            return Promise.resolve(this.cache.get(vendorHash));
        });
    }

    _update(id, data, context) {
        if (!this.cache.has(id)) {
            this.cache.set(id, new Vendor(this.client, {vendorHash: id, ...data}, context))
        } else {
            super._update(id, data, context)
        }
    }

    /**
     * @return {Vendor[]}
     */
    get cacheArray() {
        const arr = [];
        this.cache.forEach(value => {
            arr.push(value)
        });
        return arr;
    }
}