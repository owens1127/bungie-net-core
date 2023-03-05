function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
import { __credentials__ } from '../util/credentials';
export class NotConfiguredError extends Error {
    constructor() {
        super();
        _defineProperty(this, 'BUNGIE_API_KEY', void 0);
        _defineProperty(this, 'BUNGIE_CLIENT_ID', void 0);
        _defineProperty(this, 'BUNGIE_CLIENT_SECRET', void 0);
        const api_key = __credentials__().BUNGIE_API_KEY;
        const client_id = __credentials__().BUNGIE_CLIENT_ID;
        const secret = __credentials__().BUNGIE_CLIENT_SECRET;
        this.message = `Please configure your API Key, Client ID, and Client Secret as environment variables: 'BUNGIE_API_KEY, BUNGIE_CLIENT_ID, 'BUNGIE_API_KEY, BUNGIE_CLIENT_SECRET`;
        this.BUNGIE_API_KEY = api_key ? api_key.substring(0, 5) + '...' : '';
        this.BUNGIE_CLIENT_ID = client_id;
        this.BUNGIE_CLIENT_SECRET = secret
            ? secret.substring(0, 5) + '...'
            : '';
    }
}
