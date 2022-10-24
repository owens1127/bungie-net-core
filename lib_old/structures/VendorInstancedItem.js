import { BaseItem } from './BaseItem.js';

/**
 * Represents any InstancedItem in a vendor
 * @extends {BaseItem}
 */
export class VendorInstancedItem extends BaseItem {
    constructor(client, data) {
        super(client, data);
        /**
         * The hash of the vendor this item belongs to
         * @type string
         */
        this.vendorHash = data.vendorHash
        /**
         * The id of the item
         * @type {string}
         */
        this.itemInstanceId = data.itemInstanceId;

        this._patch(data);
    }

    _patch(data) {
        super._patch(data)
        if ('item' in data) {
            this.item = data.item;
        }
        if ('instance' in data) {
            this.instance = data.instance;
        }
        if ('objectives' in data) {
            this.objectives = data.objectives;
        }
        if ('perks' in data) {
            this.perks = data.perks;
        }
        if ('renderData' in data) {
            this.renderData = data.renderData;
        }
        if ('stats' in data) {
            this.stats = data.stats;
        }
        if ('talentGrid' in data) {
            this.talentGrid = data.talentGrid;
        }
        if ('sockets' in data) {
            this.sockets = data.sockets;
        }
        if ('reusablePlugs' in data) {
            this.reusablePlugs = data.reusablePlugs;
        }
        if ('plugObjectives' in data) {
            this.plugObjectives = data.plugObjectives;
        }
    }
}