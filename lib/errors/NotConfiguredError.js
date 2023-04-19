import { _credentials } from '../util/credentials';
export class NotConfiguredError extends Error {
    BUNGIE_API_KEY;
    BUNGIE_CLIENT_ID;
    BUNGIE_CLIENT_SECRET;
    constructor() {
        super();
        const api_key = _credentials().BUNGIE_API_KEY;
        const client_id = _credentials().BUNGIE_CLIENT_ID;
        const secret = _credentials().BUNGIE_CLIENT_SECRET;
        this.message = `Please configure your API Key, Client ID, and Client Secret as environment variables: 'BUNGIE_API_KEY, BUNGIE_CLIENT_ID, 'BUNGIE_API_KEY, BUNGIE_CLIENT_SECRET`;
        this.BUNGIE_API_KEY = api_key ? api_key.substring(0, 5) + '...' : '';
        this.BUNGIE_CLIENT_ID = client_id;
        this.BUNGIE_CLIENT_SECRET = secret ? secret.substring(0, 5) + '...' : '';
    }
}
