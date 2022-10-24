import { BaseItem } from './BaseItem.js';

/**
 * Represents any UninstancedItem in Schemas
 * @extends {Base}
 */
export class UninstancedItem extends BaseItem {
    constructor(client, data, context = {}) {
        super(client, data, context);

        this._patch({...data, ...context});
    }

    _patch(data) {
        super._patch(data)

        if ('perks' in data) {
            this.perks = data.perks;
        }
        if ('objectiveComponent' in data) {
            this.objectiveComponent = data.objectiveComponent;
        }
    }

    // TODO properties

    // TODO methods
}