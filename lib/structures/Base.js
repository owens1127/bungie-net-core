/**
 * Represents a data model that is identifiable by a Snowflake (i.e. Discord API data models).
 * @abstract
 */
export class Base {
    constructor(client) {
        /**
         * The client that instantiated this
         * @type {DestinyAPIClient}
         * @readonly
         */
        Object.defineProperty(this, 'client', { value: client, writable: false });
    }

    _clone() {
        return Object.assign(Object.create(this), this);
    }

    _patch(data, context) {
        return {...context, ...data};
    }

    _update(data, context) {
        this._patch(data, context);
    }
}