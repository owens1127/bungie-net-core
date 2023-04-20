import { _credentials } from '../util/credentials';

export class NotConfiguredError extends Error {
  private BUNGIE_API_KEY: string;
  private BUNGIE_CLIENT_ID: string;
  private BUNGIE_CLIENT_SECRET: string;
  constructor() {
    super();
    const apiKey = _credentials().BUNGIE_API_KEY;
    const clientId = _credentials().BUNGIE_CLIENT_ID;
    const secret = _credentials().BUNGIE_CLIENT_SECRET;
    this.message = `Please configure your API Key, Client ID, and Client Secret as environment variables: 'BUNGIE_API_KEY, BUNGIE_CLIENT_ID, 'BUNGIE_API_KEY, BUNGIE_CLIENT_SECRET`;
    this.BUNGIE_API_KEY = apiKey ? apiKey.substring(0, 5) + '...' : '';
    this.BUNGIE_CLIENT_ID = clientId;
    this.BUNGIE_CLIENT_SECRET = secret ? secret.substring(0, 5) + '...' : '';
  }
}
