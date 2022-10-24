import { BaseProfile } from './BaseProfile.js';

/**
 * Represents any player's profile on Bungie.net.
 * @extends {BaseProfile}
 */
export class BungieProfile extends BaseProfile {
    constructor(client, data, context = {}) {
        super(client, data, context);

        if (data) {
            this._patch({...data, ...context});
        }
    }

    _patch(data) {
        super._patch(data);
    }
}