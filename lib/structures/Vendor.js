import { InstancedItemManager } from '../managers/InstancedItemManager.js';
import { VendorInstancedItemManager } from '../managers/VendorInstancedItemManager.js';
import { Base } from './Base.js';

/**
 * Represents any character in Schemas
 * @extends {Base}
 */
export class Vendor extends Base {
    constructor(client, data, context) {
        super(client);

        /**
         *
         * @type {VendorInstancedItemManager}
         */
        this.instancedItems = new VendorInstancedItemManager();

        this._patch({...data, ...context});
    }

    _patch(data) {
        super._patch(data);
        if ('vendorHash' in data) {
            this.vendorHash = data.vendorHash;
        }
        if ('characterId' in data) {
            /**
             * The character's id
             * @type {string}
             */
            this.characterId = data.characterId;
        }
        if ('membershipId' in data) {
            /**
             * The member the character belongs to
             * @type {string}
             */
            this.membershipId = data.membershipId;
        }
        if ('membershipType' in data) {
            /**
             * The type of membership the character belongs to
             * @type {BungieMembershipType}
             */
            this.membershipType = data.membershipType;
        }
        if ('canPurchase' in data) {
            this.canPurchase = data.canPurchase;
        }
        if ('progression' in data) {
            this.progression = data.progression;
        }
        if ('vendorLocationIndex' in data) {
            this.vendorLocationIndex = data.vendorLocationIndex;
        }
        if ('seasonalRank' in data) {
            this.seasonalRank = data.seasonalRank;
        }
        if ('nextRefreshDate' in data) {
            this.nextRefreshDate = new Date(data.nextRefreshDate);
        }
        if ('enabled' in data) {
            this.enabled = data.enabled;
        }
        if ('categories' in data) {
            this.categories = data.categories;
        }
        if ('sales' in data) {
            this.sales = data.sales;
        }
        if ('currencies' in data) {
            this.currencies = data.currencies;
        }
        if ('stringVariables' in data) {
            this.stringVariables = data.stringVariables;
        }
    }

    // TODO properties

    // TODO methods
}