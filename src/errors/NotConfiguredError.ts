import { BungieCredentials, getBungieEnv } from '../env';

export class NotConfiguredError extends Error implements BungieCredentials {
  readonly BUNGIE_API_KEY: string;
  readonly BUNGIE_CLIENT_ID: string;
  readonly BUNGIE_CLIENT_SECRET: string;

  constructor(vars: (keyof BungieCredentials)[]) {
    super(`Please configure your ${vars} as environment variable(s)`);
    this.name = 'BungieNotConfiguredError';
    const apiKey = getBungieEnv().BUNGIE_API_KEY;
    const clientId = getBungieEnv().BUNGIE_CLIENT_ID;
    const secret = getBungieEnv().BUNGIE_CLIENT_SECRET;
    this.BUNGIE_API_KEY = apiKey ? apiKey.substring(0, 5) + '...' : '';
    this.BUNGIE_CLIENT_ID = clientId;
    this.BUNGIE_CLIENT_SECRET = secret ? secret.substring(0, 5) + '...' : '';
  }
}
