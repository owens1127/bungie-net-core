import { getBungieEnv } from './env';
import { BungieNetResponse } from './interfaces/BungieNetResponse';
import { NotConfiguredError } from './errors/NotConfiguredError';

export type BungieFetchConfig = {
  url: string;
  method: string;
  params?: { [key: string]: any };
  body?: any;
};

/** A client for interacting with the Bungie.net API */
export interface BungieClientProtocol {
  access_token?: string;
  fetch<T>(config: BungieFetchConfig): Promise<BungieNetResponse<T>>;
}

export const BasicBungieClient: BungieClientProtocol = {
  access_token: undefined,
  async fetch<T>(config: BungieFetchConfig): Promise<BungieNetResponse<T>> {
    const apiKey = getBungieEnv().BUNGIE_API_KEY;
    if (!apiKey) {
      throw new NotConfiguredError(['BUNGIE_API_KEY']);
    }

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      'X-API-KEY': apiKey
    };
    if (this.access_token)
      headers['Authorization'] = `Bearer ${this.access_token}`;

    const body = config.body ? JSON.stringify(config.body) : null;

    const url = new URL(config.url);
    if (config.params)
      Object.entries(config.params).forEach(([key, value]) =>
        url.searchParams.set(key, value)
      );

    const payload = {
      method: config.method,
      body,
      headers
    };

    const res = await fetch(url, payload);
    const data: BungieNetResponse<T> = await res.json();
    return data;
  }
};
