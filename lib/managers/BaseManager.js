/**
 * Manages the API methods of a data model.
 * @abstract
 */
export class BaseManager {
    constructor(client) {
        /**
         * The client that instantiated this Manager
         * @name BaseManager#client
         * @type {DestinyAPIClient}
         * @readonly
         */
        this.client = client;
        this.cache = new Map();
    }

    resolve(id) {
        return this.cache.get(id);
    }

    async fetch(resolvable) {
        return resolvable;
    }

    _update(id, data, context) {
       this.cache.get(id)._patch({...data, ...context});
    }

    /**
     * @return {*[]}
     */
    get cacheAsArray() {
        const arr = [];
        this.cache.forEach(value => {
            arr.push(value)
        });
        return arr;
    }
}