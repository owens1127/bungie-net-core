import { Base } from './Base.js';

/**
 * Represents any Item in Schemas
 * @abstract
 * @extends {Base}
 */
export class BaseItem extends Base {
    constructor(client, data) {
        super(client);

        this._patch(data);
    }

    _patch(data) {
        super._patch(data)
        if ('itemHash' in data) {
            /**
             * The hash for the item
             * @type {string}
             */
            this.itemHash = data.itemHash;
        }
        if ('quantity' in data) {
            /**
             * The quantity of the item in this stack
             * @type {number}
             */
            this.quantity = data.quantity;
        }
        if ('bindStatus' in data) {
            /**
             * If the item is bound
             * @type {ItemBindStatus}
             */
            this.bindStatus = data.bindStatus;
        }
        if ('location' in data) {
            this.location = data.location;
        }
        if ('bucketHash' in data) {
            this.bucketHash = data.bucketHash;
        }
        if ('transferStatus' in data) {
            this.transferStatus = data.transferStatus;
        }
        if ('lockable' in data) {
            this.lockable = data.lockable;
        }
        if ('state' in data) {
            this.state = data.state;
        }
        if ('overrideStyleItemHash' in data) {
            this.overrideStyleItemHash = data.overrideStyleItemHash;
        }
        if ('expirationDate' in data) {
            this.expirationDate = data.expirationDate;
        }
        if ('isWrapper' in data) {
            this.isWrapper = data.isWrapper;
        }
        if ('tooltipNotificationIndexes' in data) {
            this.tooltipNotificationIndexes = data.tooltipNotificationIndexes;
        }
        if ('metricHash' in data) {
            this.metricHash = data.metricHash;
        }
        if ('metricObjective' in data) {
            this.metricObjective = data.metricObjective;
        }
        if ('versionNumber' in data) {
            this.versionNumber = data.versionNumber;
        }
        if ('itemValueVisibility' in data) {
            this.itemValueVisibility = data.itemValueVisibility;
        }
        if ('membershipId' in data) {
            /**
             * The id of the member the item belongs to
             * @type {string}
             */
            this.membershipId = data.membershipId;
        }
        if ('membershipType' in data) {
            this.membershipType = data.membershipType;
        }
        if ('characterId' in data) {
            /**
             * The id of the member the item belongs to
             * @type {string}
             */
            this.characterId = data.characterId;
        }
    }

    // TODO properties

    // TODO methods
}