import { __credentials__ } from '../util/credentials';

export class NotConfiguredError extends Error {
    private api_key: string;
    private client_id: string;
    private secret: string;
    constructor() {
        super();
        const api_key = __credentials__().BUNGIE_API_KEY
        const client_id = __credentials__().BUNGIE_CLIENT_ID
        const secret = __credentials__().BUNGIE_SECRET
        this.message =
            `Please configure your API key and Client ID as environment variables: 'BUNGIE_API_KEY, BUNGIE_CLIENT_ID`
        this.api_key = api_key ? api_key.substring(0, 5) + "..." : ""
        this.client_id = client_id;
        this.secret = secret ? secret.substring(0, 5) + "..." : ""
    }

}